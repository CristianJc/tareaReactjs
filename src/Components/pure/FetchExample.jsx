import React, { useState, useEffect } from "react";
import {
  getAllPageUsers,
  getAllUsers,
  getUserDetails,
  login
} from "../../services/fetchService";
const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [totalUser, setTotalUser] = useState(12);
  const [pages, setPages] = useState(2);
  const [usersPerPage, setUsersPerPage] = useState(6);
  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
      .then((response) => {
        if (response.status == 200 && response.ok) {
          response
            .json()
            .then((body) => {
              console.log("All Users", body.data);
              setUsers(body.data);
              setPages(body.total_pages);
              setUsersPerPage(body.per_page);
              setTotalUser(body.total);
            })
            .catch((error) => console.log(`Something went wrong: ${error}`));
        }
      })
      .catch((error) => {
        alert(`Error retreiving the users: ${error}`);
      })
      .finally(() => {
        console.log("Ended obtaining users:");
        console.table(users);
      });
  };

  const obtainPageUsers = (page) => {
    getAllPageUsers(page)
      .then((response) => {
        setUsers(response.data);
        setTotalUser(response.total);
        setUsersPerPage(response.per_page);
        setPages(response.total_pages);
      })
      .catch((error) => console.log(`Something went wrong: ${error}`))
      .finally(() => {
        console.log("Ended obtaining users:");
        console.table("hola user", users);
      });
  };

  const obtainUserDetail = (id) => {
    getUserDetails(id)
      .then((response) => {
        setSelectedUser(response.data);
      })
      .catch((error) => console.log(`Something went wrong: ${error}`))
      .finally(() => {
        console.log("Ended obtaining users:");
        console.table(selectedUser);
      });
  };

const authUser= ()=>{
   login("eve.holt@reqres.in","cityslicka").then((response) => {
    console.log("Token:",response.token);
    sessionStorage.setItem('token',response.token);
  })
  .catch((error) => console.log(`Eror while login user: ${error}`))
  .finally(() => {
    console.log("Ended obtaining Token:");
    console.table(selectedUser);
  
    
   });
}

  return (
    <div>

<button onClick={() => authUser(2)}>Login</button>

      <h2>Users:</h2>

      {users.map((user, index) => (
        <p key={index} onClick={() => obtainUserDetail(user.id)}>
          {user.first_name} {user.last_name}
        </p>
      ))}
      <p>
        Showing {usersPerPage} users of {totalUser}{" "}
      </p>
      <button onClick={() => obtainPageUsers(1)}>1</button>
      <button onClick={() => obtainPageUsers(2)}>2</button>
      <div>
        {selectedUser !== '' ? (
          <div>
        
            <h3>User Details</h3>
            <p>Name: {selectedUser.first_name} </p>
            <p>Last Name: {selectedUser.last_name} </p>
            <p>Email: {selectedUser.email} </p>
            <img
              alt="Avatar"
              src={selectedUser.avatar}
              style={{ height: "150px", width: "150px" }}
            />
          </div>
        ) : (
          <h6> Please Click on User to see ist Details</h6>
        )}
      </div>
    </div>
      
  );
};

export default FetchExample;
