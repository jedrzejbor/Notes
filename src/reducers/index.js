import {
  ADD_ITEM,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  AUTH_SUCCESS,
  FETCH_SUCCESS,
  FETCH_REQUEST,
} from 'actions';

const initialState = {
  userID: '5ec685200a8931fd598ab498',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_ITEM:
      return {
        /* wprowadzamy poprzedni state ktory mielismy zeby miec pewnosc ze nie nadpisujemy */
        ...state,
        /* nasteonie za pomoca dynamicznego klucza wybieramy te tablice ktora chcemy modyfikowac */
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        /* wprowadzamy poprzedni state ktory mielismy zeby miec pewnosc ze nie nadpisujemy */
        ...state,
        /* nasteonie za pomoca dynamicznego klucza wybieramy te tablice ktora chcemy modyfikowac */
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;

// twitters: [
//   {
//     id: 1,
//     title: 'Hello Roman',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '1 day',
//     twitterName: 'hello_roman',
//   },
//   {
//     id: 2,
//     title: 'Redux guy',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '1 day',
//     twitterName: 'dan_abramov',
//   },
//   {
//     id: 3,
//     title: 'React router stuff',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '5 days',
//     twitterName: 'mjackson',
//   },
//   {
//     id: 4,
//     title: 'Super animacje!',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '10 days',
//     twitterName: 'sarah_edo',
//   },
// ],
// notes: [
//   {
//     id: 1,
//     title: 'Wake me up when Vue ends',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '1 day',
//   },
//   {
//     id: 2,
//     title: 'Como es An Gular?',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '1 day',
//   },
//   {
//     id: 3,
//     title: 'Du bist Reactish',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '5 days',
//   },
//   {
//     id: 4,
//     title: 'Reactuj się kto moze!',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '10 days',
//   },
// ],
// articles: [
//   {
//     id: 1,
//     title: 'React on my mind',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     articleUrl: 'https://youtube.com/helloroman',
//     created: '1 day',
//   },
//   {
//     id: 2,
//     title: 'Wish you React',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     articleUrl: 'https://youtube.com/helloroman',
//     created: '1 day',
//   },
//   {
//     id: 3,
//     title: 'You gave React a bad name',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     articleUrl: 'https://youtube.com/helloroman',
//     created: '5 days',
//   },
//   {
//     id: 4,
//     title: 'Is it React you looking for?',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     articleUrl: 'https://youtube.com/helloroman',
//     created: '10 days',
//   },
// ],
