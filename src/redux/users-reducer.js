const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING ';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: true

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
          users: action.users }

        }
        case SET_CURRENT_PAGE: {
            return{
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING : {
            return {...state, isFetching: action.isFetching}
        }
        // case SET_TOTAL_USERS_COUNT: {
        //     return {
        //         ...state,
        //         totalUsersCount: action.count
        //     }
        // }
        default:
            return state;
    }

}
// TODO: КРАТКИЯ ВАРИАНТ НА ДВАТА ACTION доло

export const follow = (userId) => ({ type: FOLLOW, userId})


export const unfollow = (userId) => {

    return {
        type: UNFOLLOW,
        userId: userId

    }
}
//
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching  })
// export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})



export default usersReducer;