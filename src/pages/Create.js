import React, { useState, useEffect } from "react";
import storageAPI from "../services/storageAPI";
import { db, auth } from "../services/firebaseConnection";
import {
    doc,
    updateDoc,
    arrayUnion,
    Timestamp,
    FieldValue,
} from "firebase/firestore";
import { Link } from "react-router-dom";

import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { BasicInfo, MenuInfo, AdditionalInfo } from "./index";
import { FirebaseError } from "firebase/app";

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
    const colors = [
        { label: "Yellow", value: 1 },
        { label: "Blue", value: 2 },
        { label: "Green", value: 3 },
        { label: "Red", value: 4 },
        { label: "Pink", value: 5 },
        { label: "Purple", value: 6 },
    ];

    const [basicInfoData, setBasicInfoData] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        imageURL: "",
    });

    const [formPage, setFormPage] = useState("basic");
    const [menuItem, setMenuItem] = useState({
        name: "",
        price: null,
        description: "",
        type: null,
        imageURL: "",
    });
    const [allMenuItems, setAllMenuItems] = useState([]);
    const [userChoice, setUserChoice] = useState("");
    const [file, setFile] = useState("");

    async function handleCreateBtn() {
        auth.onAuthStateChanged(async (authUser) => {
            if (authUser) {
                const user = auth.currentUser.email;
                const docRef = doc(db, "users", user);
                await updateDoc(docRef, {
                    // arrayUnion updates the array value for 'restaurant'
                    restaurant: arrayUnion({
                        name: basicInfoData.name,
                        address: basicInfoData.address,
                        phoneNumber: basicInfoData.phoneNumber,
                        hours: [
                            {
                                day: "Monday",
                                isOpen: true,
                                open: "12PM",
                                close: "9PM",
                            },
                            {
                                day: "Tuesday",
                                isOpen: true,
                                open: "12PM",
                                close: "9PM",
                            },
                            {
                                day: "Wednesday",
                                isOpen: true,
                                open: "12PM",
                                close: "9PM",
                            },
                            {
                                day: "Thursday",
                                isOpen: true,
                                open: "12PM",
                                close: "9PM",
                            },
                            {
                                day: "Friday",
                                isOpen: true,
                                open: "12PM",
                                close: "9PM",
                            },
                            { day: "Saturday", isOpen: false },
                            { day: "Sunday", isOpen: false },
                        ],
                        menu: allMenuItems,
                        createdAt: Timestamp.now().toDate().toDateString(),
                    }),
                });
                // ISSUE: when trying to redirect, project doesn't save
                //   (window.location.assign("/dashboard"));
            }
        });
    }

    const [additionalInfoData, setAdditionalInfoData] = useState({
        isAbout: false,
        about: "",
        linkOne: "",
        linkeTwo: "",
        linkThree: "",
        color: "",
    });

    const returnPage = (formPage) => {
        if (formPage === "basic") {
            console.log("basic info");
            return (
                <BasicInfo
                    days={days}
                    setFormPage={setFormPage}
                    basicInfoData={basicInfoData}
                    setBasicInfoData={setBasicInfoData}
                    file={file}
                    setFile={setFile}
                ></BasicInfo>
            );
        } else if (formPage === "menu") {
            console.log("menu info");
            return (
                <MenuInfo
                    categories={categories}
                    menuItem={menuItem}
                    setMenuItem={setMenuItem}
                    allMenuItems={allMenuItems}
                    setAllMenuItems={setAllMenuItems}
                    userChoice={userChoice}
                    setUserChoice={setUserChoice}
                    file={file}
                    setFile={setFile}
                    setFormPage={setFormPage}
                />
            );
        } else if (formPage === "additional") {
            console.log("additional info");
            return <AdditionalInfo colors={colors} additionalInfoData={additionalInfoData}
            setAdditionalInfoData={setAdditionalInfoData}/>;
        }
    };

    return (
        <div>
            {returnPage(formPage)}

            <Button variant="dark" type="submit" onClick={handleCreateBtn}>
                <Link to="/dashboard">Create Restaurant </Link>
            </Button>

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
