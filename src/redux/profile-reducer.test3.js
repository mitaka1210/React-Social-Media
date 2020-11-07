import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are u?', likeCounts: 12 },
    { id: 2, message: "It's my first post", likeCounts: 11 },
    { id: 3, message: 'Here?', likeCounts: 33 },
    { id: 4, message: 'Do you want go eat?', likeCounts: 1 },
    { id: 5, message: 'Do you want go eat?', likeCounts: 7 },
  ],
};

//TODO: CREATE TEST
//? 1. test data
it('length of post should be incremented', () => {
  let action = addPostActionCreator('Dimitar Dimitrov');

  //? 2. action
  let newState = profileReducer(state, action);

  //? 3. expectation
  expect(newState.posts.length).toBe(6);
});

//=================================================

//? 1. test data
it('after deleting', () => {
  let action = deletePost(1);

  //? 2. action
  let newState = profileReducer(state, action);

  //? 3. expectation
  expect(newState.posts.length).toBe(3);
});
