import { rerenderTree } from '../render';

let state = {
  profilePage: {
    postsData: [
      {
        id: 1,
        name: 'Dima',
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        message: 'Hey,how are you?',
        likeCounts: 15,
      },
      {
        id: 2,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Alina',
        message: "Yo, it's my fist post!",
        likeCounts: 21,
      },
      {
        id: 3,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Ben',
        message: 'Yes I am!',
        likeCounts: 12,
      },
      {
        id: 4,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Kim',
        message: 'Coco Loko! Alo Alo...',
        likeCounts: 36,
      },
    ],
    newPostText: '',
  },
  dialogsPage: {
    dialogsData: [
      {
        id: 1,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Dima',
      },
      {
        id: 2,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Alina',
      },
      {
        id: 3,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Ben',
      },
      {
        id: 4,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Vitaliy',
      },
      {
        id: 5,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Olga',
      },
      {
        id: 6,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Kate',
      },
      {
        id: 7,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Caren',
      },
      {
        id: 8,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Kostya',
      },
      {
        id: 9,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Inna',
      },
      {
        id: 10,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Nick',
      },
      {
        id: 11,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Fiona',
      },
    ],
    messagesData: [
      {
        id: 1,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Dima',
        message: 'Hey,how are you?',
      },
      {
        id: 2,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Alina',
        message: 'I am fine.Are you ready to fun?',
      },
      {
        id: 3,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Ben',
        message: 'Yes I am!',
      },
      {
        id: 4,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Vitaliy',
        message: 'Coco Loko! Alo Alo...',
      },
      {
        id: 5,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Dima',
        message: 'Hey,how are you?',
      },
      {
        id: 6,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Alina',
        message: 'I am fine.Are you ready to fun?',
      },
      {
        id: 7,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Ben',
        message: 'Yes I am!',
      },
      {
        id: 8,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Vitaliy',
        message: 'Coco Loko! Alo Alo...',
      },
    ],
    newMessageText: '',
  },
  sideBar: {
    friendsData: [
      {
        id: 1,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Dima',
      },
      {
        id: 2,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Alina',
      },
      {
        id: 3,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Ben',
      },
      {
        id: 4,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Vitaliy',
      },
      {
        id: 5,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Olga',
      },
      {
        id: 6,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Kate',
      },
      {
        id: 7,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Caren',
      },
      {
        id: 8,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Kostya',
      },
      {
        id: 9,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Inna',
      },
      {
        id: 10,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Nick',
      },
      {
        id: 11,
        avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
        name: 'Fiona',
      },
    ],
  },
};

export let addPost = () => {
  let randomId = Math.floor(Math.random() * 10) + 1;
  let newPost = {
    id: randomId,
    name: 'userName',
    avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
    message: state.profilePage.newPostText,
    likeCounts: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
};

window.state = state;

export let addMessage = () => {
  let randomId = Math.floor(Math.random() * 10) + 1;
  let newMessage = {
    id: randomId,
    avatar: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
    name: 'userName',
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderTree(state);
};

export let updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderTree(state);
};

export default state;
