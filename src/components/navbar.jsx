import React, { useState, useEffect } from "react";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MyTimer from "./counterTimer.jsx";



const MainLogo_Style = {
  width: '250px',
  height: 'auto',
  paddingLeft: '20px'
};

const telegramIcon_Style = {
  height: '15px',
  marginRight: '10px'
};

const mycirclebar_style = {
  height: '50px',
  width: '50px',

}




const element = (
  <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-0 border-bottom">
    <div class="col-md-3 mb-2 mb-md-0">
      <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">

        <img src="/images/HODLINFO.png" width="150px" height="auto" style={MainLogo_Style} />
      </a>
    </div>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">


      <div class="dropdown me-2">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          INR
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">INR</a></li>
        </ul>
      </div>

      <div class="dropdown me-2">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          BTC
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">BTC</a></li>
          <li><a class="dropdown-item" href="#">ETH</a></li>
          <li><a class="dropdown-item" href="#">USDT</a></li>
          <li><a class="dropdown-item" href="#">XRP</a></li>
          <li><a class="dropdown-item" href="#">TRX</a></li>
          <li><a class="dropdown-item" href="#">DASH</a></li>
          <li><a class="dropdown-item" href="#">ZEC</a></li>
          <li><a class="dropdown-item" href="#">IOST</a></li>
          <li><a class="dropdown-item" href="#">WIN</a></li>
          <li><a class="dropdown-item" href="#">BTT</a></li>
          <li><a class="dropdown-item" href="#">WRX</a></li>
        </ul>
      </div>
      <button type="button" class="btn btn-light">Buy Btx</button>
    </ul>

    <div class="col-md-3 d-flex align-items-center justify-content-between">
      <MyTimer />

      <button type="button" class="btn btn-primary ms-1" style={{ backgroundColor: '#3dc6c1' }}>
        <img src="/images/telegramIcon.png" style={telegramIcon_Style} />
        Connect to Telegram
      </button>
      <div class="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
      </div>
    </div>

  </header>

);

function NavBarComponent() {
  return element;
}

export default NavBarComponent;