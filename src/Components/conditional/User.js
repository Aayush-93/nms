// import React, { useState } from "react";

// function User() {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const togglebtn = () => {
//     setIsAdmin((pre) => !pre);
//   };
//   return (
//     <div>
//       <h1>Conditonal rendering </h1>
//       <button onClick={togglebtn}>
//         Switch to {isAdmin ? "User" : "Admin"} View
//       </button>
//       <div> {isAdmin ? <h2>Welcome Admin</h2> : <h2>welcome User </h2>}</div>
//     </div>
//   );
// }

// export default User;

import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";

function User() {
  const [isloggedIn, setisLoggedIn] = useState(true);
  const togglebtn = () => {
    setisLoggedIn((pre) => !pre);
  };
  return (
    <div>
      <h1>Conditonal </h1>

      <button onClick={togglebtn}>
        {isloggedIn ? "Login-page" : "signup-page"}
      </button>
      <div>{isloggedIn ? <Login /> : <Signup />}</div>
    </div>
  );
}

export default User;
