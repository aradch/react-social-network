import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsContols/FormsControls";
import { required } from "./../../utils/validators/validators";
import { login } from "./../../redux/auth-reducer";
import { Redirect } from "react-router";
import styles from "../../common/FormsContols/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          name="email"
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          validate={[required]}
          component={Input}
          type="password"
        />
      </div>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox" />
        remember me
      </div>

      {captchaUrl && (
        <div>
          <img src={captchaUrl} />
          <Field
            placeholder="Symbols from image"
            name="captcha"
            validate={[required]}
            component={Input}
          />
        </div>
      )}

      {error && <div className={styles.formSummaryError}>{error}</div>}

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  let onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) return <Redirect to="/profile" />;

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
