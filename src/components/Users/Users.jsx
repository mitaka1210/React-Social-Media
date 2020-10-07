import React, { Component } from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import * as axios from "axios";

 class Users extends Component {

     getUsers = () => {
         if (this.props.users.length === 0) {
             // TODO: Въпрос на сървъра
             axios.get("https://social-network.samuraijs.com/api/1.0/users")

                 .then(response => {

                     this.props.setUsers(response.data.items)
                 });
         }
     }

  render() {
      return  <div>
          <button onClick={this.getUsers}>Get users</button>
          {this.props.users.map((u) =>  <div key={u.id}>
                    <span>
                        <div className={styles.usersPhoto}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=''/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id)}}>Follow</button>}
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
}

export default Users;