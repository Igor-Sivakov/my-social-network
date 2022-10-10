import profileReducer, { addPost } from '../reducers/profileReducer';
import userAvatar from '../../img/userAvatar.jpeg';

let state = {
  postsData: [
    {
      id: 1,
      name: 'Dima',
      avatar: userAvatar,
      message: 'Hey,how are you?',
      likeCounts: 15,
    },
    {
      id: 2,
      avatar: userAvatar,
      name: 'Alina',
      message: "Yo, it's my fist post!",
      likeCounts: 21,
    },
    {
      id: 3,
      avatar: userAvatar,
      name: 'Ben',
      message: 'Yes I am!',
      likeCounts: 12,
    },
    {
      id: 4,
      avatar: userAvatar,
      name: 'Kim',
      message: 'Coco Loko! Alo Alo...',
      likeCounts: 36,
    },
  ],
};

test('length of new postsData should be incremented', () => {
  // 1. test post data
  let action = addPost('it-kamasutra');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(5);
});

test('message in new postsData should be correct', () => {
  // 1. test post data
  let action = addPost('it-kamasutra');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData[4].message).toBe('it-kamasutra');
});
