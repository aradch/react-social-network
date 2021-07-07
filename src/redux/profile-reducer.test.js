import { addPostActionCreator, deletePost } from "./profile-reducer";
import profileReducer from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 20 },
  ],
};

test("length of posts should be incremented", () => {
  let action = addPostActionCreator("it-kamasutra");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});
test("message of new post correct", () => {
  let action = addPostActionCreator("it-kamasutra");

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe("it-kamasutra");
});

test("after deleting length of posts should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});
test("after deleting length shouldn't be decrement if id is incorrect", () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});
