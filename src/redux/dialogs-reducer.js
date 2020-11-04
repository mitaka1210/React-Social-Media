const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState = {
  dialogs: [
    { id: 1, name: 'Dimitar' },

    { id: 2, name: 'Aleksandar' },

    { id: 3, name: 'Pesho' },

    { id: 4, name: 'Gosho' },

    { id: 5, name: 'Ivan' },
    { id: 6, name: 'Ivane' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Where we go today?' },
    { id: 4, message: 'What is your plan for today?' },
    { id: 5, message: 'What ' },
  ],
  newMessageText: '',
};
const dialogsReducer = (state = initialState, action) => {
  // TODO: обявяваме променлива: stateCopy
  let stateCopy;
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;

      stateCopy = {
        ...state,

        // TODO: добавяме в messages нов масив с стария самив и в края добавяме това което е push при натискане на бутона SEND
        messages: [...state.messages, { id: 6, message: body }],
        newMessageText: '',
      };

      return stateCopy;
      // TODO: messages: [...state.messages, {id: 6, message: body }] - съкратения вариатн на долното
      // stateCopy3.messages.push({id: 6, message: body });
      // stateCopy3.newMessageBody='';
    }

    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody: newMessageBody,
});

export default dialogsReducer;
