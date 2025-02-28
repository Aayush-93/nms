// App.js
// import React from "react";
// import { CHANNEL } from "./contents/data"; // Import the data
// import "./App.css"; // Import the CSS file

// const App = () => {
//   console.log(CHANNEL);
//   return (
//     <div className="app-container">
//       <h1 className="app-title">YouTube Channels</h1>
//       <div className="grid">
//         {CHANNEL.map((channel) => (
//           <div key={channel.id} className="card">
//             <img
//               // src={`https://via.placeholder.com/150?text=${channel.title}`} // Placeholder image
//               src="https://yt3.googleusercontent.com/ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg=s900-c-k-c0x00ffffff-no-rj"
//               alt={`${channel.title} thumbnail`}
//             />
//             <div className="card-content">
//               <h3 className="card-title">{channel.title}</h3>
//               <p className="card-meta">{channel.user}</p>
//               <p className="card-meta">
//                 {channel.views} views • {channel.posted}
//               </p>
//               <button className="card-button">Visit Channel</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
