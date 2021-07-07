import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "./../../common/FormsContols/FormsControls";
import {
  maxLengthCreator,
  required,
} from "./../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  let maxLength50 = maxLengthCreator(50);

  const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Textarea}
            validate={[required, maxLength50]}
            name="newMessageText"
            placeholder="Enter your message"
          />
        </div>
        <div>
          <button>Send Message</button>
        </div>
      </form>
    );
  };

  const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(
    AddMessageForm
  );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <div>
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
