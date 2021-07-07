import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={s.message}>
      <img src="https://templates.cms-guide.com/37219/images/background.jpg" />
      <span>{props.message}</span>
    </div>
  );
};

export default Message;
