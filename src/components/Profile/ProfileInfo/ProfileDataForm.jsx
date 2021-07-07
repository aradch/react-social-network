import { Field, reduxForm } from "redux-form";
import { Input } from "../../../common/FormsContols/FormsControls";
import { Textarea } from "./../../../common/FormsContols/FormsControls";
import s from "./ProfileInfo.module.css";
import styles from "../../../common/FormsContols/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button>save</button>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <b> Full name</b>:
        <Field placeholder="Full name" name="fullName" component={Input} />
      </div>
      <div>
        <b> Looking for a job</b>:
        <Field name="lookingForAJob" component={Input} type="checkbox" />
      </div>
      <div>
        <b> My professional skills</b>:
        <Field
          placeholder="My professional skills"
          name="lookingForAJobDescription"
          component={Textarea}
        />
      </div>
      <div>
        <b> About me</b>:
        <Field placeholder="About me" name="aboutMe" component={Textarea} />
      </div>
      <div>
        <b> Contacts</b>:
        {Object.keys(profile.contacts).map((key) => (
          <div className={s.contact}>
            <b>{key}</b>:
            <Field
              placeholder={key}
              name={"contacts." + key}
              component={Input}
            />
          </div>
        ))}
      </div>
    </form>
  );
};

const ProfileDataFormRedux = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormRedux;
