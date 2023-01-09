// import React from 'react'


// const Ecommerce = () => {
//   return (
//     <div>eCommerce



//     </div>
//   )
// }

// export default Ecommerce

/************************************************************************ */

// import React from 'react'
// import axios from "axios";
// import { useState } from 'react';


// const eCommerce = () => {
//     const[User , setUser] = useState()
//         const fetchData = () => {
//             return axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=f317b1df")
//                   .then((response) => setUser(response.data));
//           }
        
//           useEffect(() => {
//             fetchData();
//           },[])
   

//   return (
//     <div>eCommerce</div>
//   )
// }

// export default eCommerce


/************************************************************************ */

// import React, { useEffect, useState } from "react";

// function eCommerce() { 
//   const [user, setUser] = useState([]);

//   const fetchData = () => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//           .then((response) => response.json())
//           .then((data) => setUser(data));
//   }

//   useEffect(() => {
//     fetchData();
//   },[])

//   return (
//     <main>
//       <h1>User List</h1>
//       <ul>
//         {user && user.length > 0 && user.map((userObj, index) => (
//             <li key={userObj.id}>{userObj.name}</li>
//           ))}
//       </ul>
//     </main>
//   );
// }

// export default App;

/************************************************************************ */

// import React , { useEffect, useState } from "react";

// const Ecommerce = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f317b1df")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Ecommerce;