const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE  = 'SEND_MESSAGE';
let initialState = {

    dialogs: [

        {id: 1,name: 'Dimitar'},

        {id: 2,name: 'Aleksandar'},

        { id: 3,name: 'Pesho'},

        {id: 4, name: 'Gosho' },

        {id: 5,name: 'Ivan'},
        {id: 6, name: 'Ivane'}

    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Where we go today?' },
        { id: 4, message: 'What is your plan for today?' },
        { id: 5, message: 'What ' },
    ],
    newMessageBody: ""
}
const dialogsReducer =(state = initialState,action) => {



    switch (action.type){

        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state };

            stateCopy.newMessageBody = action.body;
            return stateCopy
        }

        case SEND_MESSAGE: {
            let stateCopy3 = {...state}
            let body = [...state.newMessageBody]
            stateCopy3.messages.push({id: 6, message: body });
            stateCopy3.newMessageBody='';
            return stateCopy3
        }


        default:
            return state;
    }

}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE})


export const updateNewMessageBodyCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body

    }
}
export default dialogsReducer