import React from 'react';
import styles from './users.module.css';

function Users(props) {
    return  <div>
        {props.users.map((u) =>  <div key={u.id}>
                    <span>
                        <div className={styles.usersPhoto}>
                            <img src={u.photoUrl} alt=''/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>

                            <span>
                                <div>{u.fullName}</div>
                                <div> {u.status}</div>
                            </span>

                    </span>
                    <span>
                        <div>
                           <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </span>

                </div>)
        }
    </div>


}

export default Users;