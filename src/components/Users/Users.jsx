import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let  i =1 ; i <= pagesCount; i++){

        pages.push(i);
    }
    //  pagesCount.forEach( e=>{
    //     pages.push(e);
    // })


    return <div className={styles.mainContainer}>
                <div className={styles.pageNum}>
                    {pages.map((p) =>{
                        return <span className={props.currentPage === p && styles.selectedPAge}
                        onClick={(e)=> {props.onPageChanged(p);
                        }}>{p}</span>})}

                </div>

                {props.users.map((u) =>  <div key={u.id}>
                    <span>
                        <div className={styles.usersPhoto}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=''/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>

                            <span>
                                <div>{u.name}</div>
                                <div> {u.status}</div>
                            </span>

                    </span>
                    <span>
                        <div>
                           <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </span>

                </div>)
                }
            </div>
}

export default Users;