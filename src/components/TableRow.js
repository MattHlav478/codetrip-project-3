import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

export default function TableRow({ day, hours, setHours }) {
    const [isOpen, setIsOpen] = useState(true); //because default is that the store is open
    const [openTime, setOpenTime] = useState("");
    const [closeTime, setCloseTime] = useState("");
    const [hour, setHour] = useState({
        day: `${day}`,
        isOpen: isOpen,
        open: openTime,
        close: closeTime,
    });

    const handleCheckbox = (event) => {
        setIsOpen(!event.target.checked);
        setHour({ ...hour, [event.target.name]: isOpen });
    };

    const handleChange = () => {
        const updateHours = { ...hours };
        updateHours[day] = { isOpen, open: openTime, close: closeTime };
        setHours(updateHours);

        console.log(hour);
        console.log(hours);
    };

    return (
        <>
            <tr>
                <td>{day}</td>
                <td>
                    <TimePicker
                        className={`${day}-opening`}
                        placeholder="Select Time"
                        use12Hours
                        minuteStep={15}
                        showSecond={false}
                        focusOnOpen={true}
                        format="hh:mm"
                        disabled={!isOpen}
                        name="open"
                        onChange={(e) => {
                            setOpenTime(e.format("LT"));
                            setHour({ ...hour, [`open`]: openTime });
                            handleChange(e);
                        }}
                    />
                </td>
                <td>
                    <TimePicker
                        className={`${day}-closing`}
                        placeholder="Select Time"
                        use12Hours
                        minuteStep={15}
                        showSecond={false}
                        focusOnOpen={true}
                        disabled={!isOpen}
                        format="hh:mm A"
                        name="close"
                        onChange={(e) => {
                            setCloseTime(e.format("LT"));
                            setHour({ ...hour, [`close`]: closeTime });
                            handleChange(e);
                        }}
                    />
                </td>
                <td>
                    <input
                        id="isOpenCheck"
                        type="checkbox"
                        name="isOpen"
                        onChange={(e) => {
                            handleCheckbox(e);
                            handleChange(e);
                        }}
                    />
                    Closed All Day
                </td>
            </tr>
        </>
    );
}
