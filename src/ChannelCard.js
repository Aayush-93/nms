import React from "react";
import "./App.css";

const ChannelCard = ({ channel }) => {
  return (
    <div className="card">
      <img
        src={`https://via.placeholder.com/150?text=${channel.tittle}`}
        alt={`${channel.tittle} thumbnail`}
      />
      <div className="card-content">
        <h3 className="card-title">{channel.tittle}</h3>
        <p className="card-meta">{channel.user}</p>
        <p className="card-meta">
          {channel.views} views • {channel.posted}
        </p>
        <button className="card-button">Visit Channel</button>
      </div>
    </div>
  );
};

export default ChannelCard;
