const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {

    users: [


        {id: 1, followed: false,photoUrl:'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png',fullName: 'Dimitar', status: 'I am a boss', location: {city: 'Shumen', country: 'Bulgaria'}},


        {id: 2, followed: true, photoUrl:'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png', fullName: 'Aleksandar', status: 'I am a boss', location: {city: 'Varna', country: 'Bulgaria'}},

        {id: 3, followed: false,photoUrl:'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png', fullName: 'Pesho', status: 'I am a boss', location: {city: 'Sofia', country: 'Bulgaria'}},

        {id: 4, followed: false,photoUrl:'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png', fullName: 'Gosho', status: 'I am a boss', location: {city: 'Plovdiv', country: 'Bulgaria'}},

        {id: 5, followed: false,photoUrl:'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png', fullName: 'Ivan', status: 'I am a boss', location: {city: 'Pleven', country: 'Bulgaria'}},

        {id: 6, followed: false,photoUrl:'https://futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png', fullName: 'Marin', status: 'I am a boss', location: {city: 'Yambol', country: 'Bulgaria'}},

    ]
};
const usersReducer =(state = initialState,action) => {

// TODO: обявяваме променлива: stateCopy

    switch (action.type){
        case FOLLOW: {
            let stateCopy = {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    // TODO: Вземаме user.id(човека и неговия номер ) и ако са равни правим пълно копие на users и сменяме followed
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }

                    return u;
                })

            }
             return stateCopy  
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