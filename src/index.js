import React from "react";
import ReactDOM from "react-dom/client";
import NavBarComponent from "./components/navbar.jsx";
import SubHeading from "./components/subheading.jsx";
import MyContentTable from "./components/contentTable.jsx";


const navbar_root = ReactDOM.createRoot(document.getElementById("navbar"));
navbar_root.render(
    <React.StrictMode>
        <NavBarComponent/>
    </React.StrictMode>
);

const subHeading_root = ReactDOM.createRoot(document.getElementById("subheading"));
subHeading_root.render(
    <React.StrictMode>
    <SubHeading/>
    </React.StrictMode>
)

const contentTable_root = ReactDOM.createRoot(document.getElementById("contentTable"));
contentTable_root.render(
    <React.StrictMode>
    <MyContentTable/>
    </React.StrictMode>
)

