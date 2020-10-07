const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
      users: [ ],

};
const usersReducer =(state = initialState,action) => {

// TODO: обявяваме променлива: stateCopy

    switch (action.type){
        case FOLLOW: {
            return {
                 ...state,
                 // users: [...state.users],
                 users: state.users.map(u => {
                     // TODO: Вземаме user.id(човека и неговия номер ) и ако са равни правим пълно копие на users и сменяме followed
                     if (u.id === action.userId) {
                         return {...u, followed: true}
                     }

                     return u;
                 })

             };
        }


        case UNFOLLOW: {
         return {
                ...state,
                // users: [...state.users],
                users: state.users.map( u  =>  {
                    // TODO: Вземаме user.id(човека и неговия номер ) и ако са равни правим пълно копие на users и сменяме followed
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }

                    return u;
                })
            }
        }

        case SET_USERS: {
          return {
          ...state,
          users: [ ...state.users, ...action.users ]}

        }
        default:
            return state;
    }

}



// TODO: КРАТКИЯ ВАРИАНТ НА ДВАТА ACTION доло

export const followAC = (userId) => ({ type: FOLLOW, userId})


export const unfollowAC = (userId) => {

    return {
        type: UNFOLLOW,
        userId: userId

    }
}
//
export const setUsersAC = (users) => ({type: SET_USERS, users})





export default usersReducer;