import React, { useState, useEffect } from "react";
// import storageAPI from "../services/storageAPI";
import { db, auth } from "../services/firebaseConnection";
import {
    doc,
    updateDoc,
    addDoc,
    setDoc,
    collection,
    arrayUnion,
    Timestamp,
    FieldValue,
} from "firebase/firestore";
import { Link } from "react-router-dom";

// import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { BasicInfo, MenuInfo, AdditionalInfo } from "./index";
// import { FirebaseError } from "firebase/app";

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
        { label: "Yellow", value: "#bea925" },
        { label: "Blue", value: "#145369" },
        { label: "Green", value: "#3bc553" },
        { label: "Red", value: "#be4025" },
        { label: "Pink", value: "#ffccf2" },
        { label: "Purple", value: "#580099" },
    ];

    const [basicInfoData, setBasicInfoData] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        imageUrl: "",
    });

    const [hours, setHours] = useState({});
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
                await addDoc(collection(db, "restaurants"), {
                    user: user,
                    name: basicInfoData.name,
                    address: basicInfoData.address,
                    phoneNumber: basicInfoData.phoneNumber,
                    hours: hours,
                    banner:basicInfoData.imageUrl,
                    menu: allMenuItems,
                    createdAt: Timestamp.now().toDate().toDateString(),
                    about: additionalInfoData.about,
                    link: [
                        additionalInfoData.linkOne,
                        additionalInfoData.linkTwo,
                        additionalInfoData.linkThree,
                    ],
                    color: additionalInfoData.color,
                });
            }
        });
    }

    const [additionalInfoData, setAdditionalInfoData] = useState({
        about: "",
        linkOne: "",
        linkTwo: "",
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
                    hours={hours}
                    setHours={setHours}
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
            return (
                <>
                    <AdditionalInfo
                        colors={colors}
                        additionalInfoData={additionalInfoData}
                        setAdditionalInfoData={setAdditionalInfoData}
                        setFormPage={setFormPage}
                    />
                    {/* // needs to be rendered here IN PRODUCTION but leaving it
                    below for ease of creating projects. //{" "}
                    <Link to={"/dashboard"}>
                        //{" "}
                        <Button
                            variant="dark"
                            type="submit"
                            onClick={handleCreateBtn}
                        >
                            // Create Restaurant //{" "}
                        </Button>
                        //{" "}
                    </Link> */}
                </>
            );
        }
    };

    return (
        <div className="page-height">
            {returnPage(formPage)}

            <Link to={"/dashboard"}>
            <Button variant="dark" type="submit" onClick={handleCreateBtn}>
                Create Restaurant
            </Button>
            </Link>
        </div>
    );
}
