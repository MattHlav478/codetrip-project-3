import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BasicInfo, MenuInfo, AdditionalInfo } from "./index";

// import TimePicker from "rc-time-picker";
// import "rc-time-picker/assets/index.css";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";
// import Select from "react-select";
// import TableRow from "../components/TableRow";

export default function Create() {
    // implement onBlur functionality here, so if someone skips the * required bits, we let them know it's BAD
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const categories = [
        { label: "Appetizer", value: 1 },
        { label: "Main", value: 2 },
        { label: "Dessert", value: 3 },
        { label: "Salad", value: 4 },
        { label: "Drinks", value: 5 },
        { label: "A la Carte", value: 6 },
    ];

    const [formPage, setFormPage] = useState("basic");
    const [time, setTime] = useState("");
    const [menuItem, setMenuItem] = useState({});
    const [allMenuItems, setAllMenuItems] = useState([]);
    const [userChoice, setUserChoice] = useState("");

    const nextPage = (nextFormPage) => {
        // check to see if there are any errors--if not, then go to the next page: basic, menu, additional
    };

    const returnPage = (formPage) => {
        if (formPage === "basic") {
            return (
                <BasicInfo days={days} setFormPage={setFormPage}></BasicInfo>
            );
        } else if (formPage === "menu") {
            return (
                <MenuInfo
                    categories={categories}
                    menuItem={menuItem}
                    setMenuItem={setMenuItem}
                    allMenuItems={allMenuItems}
                    setAllMenuItems={setAllMenuItems}
                    userChoice={userChoice}
                    setUserChoice={setUserChoice}
                />
            );
        } else if (formPage === "additional") {
            return <AdditionalInfo />;
        }
    };

    return (
        <div>
            {returnPage(formPage)}
            {/* <MenuInfo
                categories={categories}
                menuItem={menuItem}
                setMenuItem={setMenuItem}
                allMenuItems={allMenuItems}
                setAllMenuItems={setAllMenuItems}
            />
            <AdditionalInfo /> */}
        </div>
    );
}
