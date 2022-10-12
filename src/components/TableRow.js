import React, { useState } from "react";
// import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
// import Select from "react-select";

export default function TableRow({ day, hours, setHours }) {
    // const [isClosed, setIsClosed] = useState(false); //because default is that the store is open
    // const [openTime, setOpenTime] = useState("");
    // const [closeTime, setCloseTime] = useState("");
    // const [hour, setHour] = useState({
    //     day: `${day}`,
    //     isClosed: false,
    //     open: openTime,
    //     close: closeTime,
    // });

    // OG
    // const handleCheckbox = (event) => {
    //     console.log("check", event.target.checked);
    //     setIsClosed(event.target.checked);
    //     console.log(isClosed);
    //     setHour({ ...hour, [event.target.name]: isClosed });
    // };

    // const handleCheckbox = (event) => {
    //     console.log("check", event.target.checked);
    //     setIsClosed(event.target.checked);
    //     console.log(isClosed);
    //     setHour({ ...hour, [event.target.name]: isClosed });
    // };

    // hour, and hours. hour is for this mini state, and hours is to collect all the states of hour

    // OG
    // const handleChange = () => {
    //     const updateHours = { ...hours };
    //     updateHours[day] = { isClosed, open: openTime, close: closeTime };
    //     setHours(updateHours);
    // };

    const handleChangeOpen = (value) => {
        const updateHours = { ...hours };
        console.log(updateHours);
        updateHours[day] = { ...updateHours[day], open: value };
        setHours(updateHours);
    };
    const handleChangeClose = (value) => {
        const updateHours = { ...hours };
        // updateHours[day] = {isClosed, close: value , open};
        updateHours[day] = { ...updateHours[day], close: value };
        setHours(updateHours);
    };
    const handleChangeCheckbox = (value) => {
        const updateHours = { ...hours };
        updateHours[day] = { ...updateHours[day], isClosed: value };
        setHours(updateHours);
    };

    return (
        <>
            <tr>
                <td>{day}</td>
                <td>
                    {/* <TimePicker
                        className={`${day}-opening`}
                        placeholder="Select Time"
                        use12Hours
                        minuteStep={15}
                        showSecond={false}
                        focusOnOpen={true}
                        format="hh:mm"
                        disabled={isClosed}
                        name="open"
                        onChange={(e) => {
                            setOpenTime(e.format("LT"));
                            setHour({ ...hour, [`open`]: openTime });
                            handleChange(e);
                        }}
                    />

                    <Select
                        name="type"
                        options={allHours}
                        // onChange={(choice) =>
                        //     setMenuItem({
                        //         ...menuItem,
                        //         [`type`]: choice.label,
                        //     })
                        // } */}
                    {/* /> */}

                    <input
                        type="time"
                        className="start-time"
                        name="open"
                        // value="Message"
                        // onChange={(e) => {
                        //     setOpenTime(e.target.value);
                        //     console.log(e.target.value);
                        //     setHour({ ...hour, [`open`]: openTime });
                        //     handleChange(e);
                        // }}
                        onChange={(e) => handleChangeOpen(e.target.value)}
                    />
                </td>
                <td>
                    <input
                        type="time"
                        className="close-time"
                        name="close"
                        // value="Message"
                        // onChange={(e) => {
                        //     setCloseTime(e.target.value);
                        //     console.log(e.target.value);
                        //     setHour({ ...hour, [`close`]: closeTime });
                        //     handleChange(e);
                        // }}

                        onChange={(e) => handleChangeClose(e.target.value)}
                    />
                    {/* <TimePicker
                        className={`${day}-closing`}
                        placeholder="Select Time"
                        use12Hours
                        minuteStep={15}
                        showSecond={false}
                        focusOnOpen={true}
                        disabled={isClosed}
                        format="hh:mm A"
                        name="close"
                        onChange={(e) => {
                            setCloseTime(e.format("LT"));
                            setHour({ ...hour, [`close`]: closeTime });
                            handleChange(e);
                        }}
                    /> */}
                </td>
                <td>
                    <input
                        id="isClosedCheck"
                        type="checkbox"
                        name="isClosed"
                        // onChange={(e) => {
                        //     handleCheckbox(e);
                        //     handleChange(e);
                        // }}
                        onChange={(e) => handleChangeCheckbox(e.target.checked)}
                    />
                    Closed All Day
                </td>
            </tr>
        </>
    );
}
