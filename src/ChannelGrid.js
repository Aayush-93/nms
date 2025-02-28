import React from "react";
import { STUDENT } from "./data";
import ChannelCard from "./ChannelCard";
import "./App.css";

const ChannelGrid = () => {
  return (
    <div className="grid">
      {STUDENT.map((channel) => (
        <ChannelCard key={channel.id} channel={channel} />
      ))}
    </div>
  );
};

export default ChannelGrid;
