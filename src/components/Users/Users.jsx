import React, { Component } from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import * as axios from "axios";

 class Users extends Component {


        // TODO: Метод жизнен цикъл - Life cycle
        componentDidMount() {
            // TODO: Въпрос на сървъра

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)

                .then(response => {
                    this.props.setUsers(response.data.items);
                    // TODO: Akо искам да взема всички страници от сървъра трябва да разкоментирам всичко свързано с setTotalUsersCount
                    // this.props.setTotalUsersCount(response.data.totalCount);
                });
        };

        onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            axios.get
            (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)

                .then(response => {

                    this.props.setUsers(response.data.items)
                });
        }


     render() {

         let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
         let pages = [];

         for (let  i =1 ; i <= pagesCount; i++){

             pages.push(i);
         }
        //  pagesCount.forEach( e=>{
        //     pages.push(e);
        // })

      return  <div>
          <div className={styles.pageNum}>
              {pages.map((p) => {
                  return <span
                    onClick={() =>this.onPageChanged(p)}
                    className={ this.props.currentPage === p && styles.selectedPAge}>{p}</span>})
              }

          </div>

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