import { connect } from "react-redux";
import { sendMessageActionCreator } from "./../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage(newMessageText) {
      dispatch(sendMessageActionCreator(newMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
