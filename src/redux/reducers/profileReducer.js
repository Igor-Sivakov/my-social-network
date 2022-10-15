import userInfoAvatar from '../../img/userInfoAvatar.jpeg';
import userAvatar from '../../img/userAvatar.jpeg';
import { profileAPI } from './../../componets/API/API';
const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

let initialState = {
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
  profile: {
    id: 25991,
    fullName: 'Sivakov Igor',
    aboutMe: 'I’ll come back and be stronger',
    lookingForAJobDescription: 'Looking for a job: //it-kamasutra.com',
    photos: {
      large: userInfoAvatar,
      small: userInfoAvatar,
    },
  },
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let randomId = Math.floor(Math.random() * 10) + 4;
      let newPost = {
        id: randomId,
        name: 'userName',
        avatar: userAvatar,
        message: action.post,
        likeCounts: 0,
      };

      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const addPost = (post) => ({ type: ADD_POST, post });

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    dispatch(savePhotoSuccess(response.data.data.photos));
  };
};

export default profileReducer;
