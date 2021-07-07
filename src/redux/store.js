import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 20 },
      ],
      newPostText: "it-kamasutra",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Y" },
        { id: 5, message: "o" },
        { id: 6, message: "jh" },
        { id: 7, message: "yg" },
        { id: 8, message: "ojjbhj" },
        { id: 9, message: "Yo" },
      ],
      newMessageText: "",
    },
    sidebar: {
      navbarFriends: [
        {
          id: 1,
          name: "Dimych",
          avatar: "https://templates.cms-guide.com/37219/images/background.jpg",
        },
        {
          id: 2,
          name: "Andrey",
          avatar: "https://templates.cms-guide.com/37219/images/background.jpg",
        },
        {
          id: 3,
          name: "Victor",
          avatar: "https://templates.cms-guide.com/37219/images/background.jpg",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
