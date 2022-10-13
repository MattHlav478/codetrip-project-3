import React from "react";
import "rc-time-picker/assets/index.css";

// handles user input of hours, using functions onChange and state that is set in Create.js and passed down as a prop.
export default function TableRow({ day, hours, setHours }) {
    const handleChangeOpen = (value) => {
        const updateHours = { ...hours };
        updateHours[day] = { ...updateHours[day], open: value };
        setHours(updateHours);
    };
    const handleChangeClose = (value) => {
        const updateHours = { ...hours };
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
                    <input
                        type="time"
                        className="start-time"
                        name="open"
                        onChange={(e) => handleChangeOpen(e.target.value)}
                    />
                </td>
                <td>
                    <input
                        type="time"
                        className="close-time"
                        name="close"
                        onChange={(e) => handleChangeClose(e.target.value)}
                    />
                </td>
                <td>
                    <input
                        id="isClosedCheck"
                        type="checkbox"
                        name="isClosed"
                        onChange={(e) => handleChangeCheckbox(e.target.checked)}
                    />
                    Closed All Day
                </td>
            </tr>
        </>
    );
}
