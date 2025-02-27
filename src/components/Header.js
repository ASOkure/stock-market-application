import React, { useEffect } from "react";
import axios from "axios";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import "../styles/Header.css";
import { Data } from "../Data";
export default function Header(props) {
  return (
    <React.Fragment>
      <div id="header-wrapper">
        <div id="heading">Stock Market Application</div>
        <div id="search-wrapper">
          <input
            type="text"
            id="search-bar"
            placeholder="Enter Stock Name"
            value={props.name}
          />
          <button id="search-button">Search</button>
        </div>
      </div>
    </React.Fragment>
  );
}
