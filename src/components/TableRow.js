import React, { useState } from "react";
import "rc-time-picker/assets/index.css";

export default function TableRow({ day, hours, setHours }) {
    const [isClosed, setIsClosed] = useState(false);

    const handleChangeOpen = (value) => {
        const updateHours = { ...hours };
        updateHours[day] = { ...updateHours[day], open: value };
        setHours(updateHours);
        console.log(hours[day]);
    };
    const handleChangeClose = (value) => {
        const updateHours = { ...hours };
        updateHours[day] = { ...updateHours[day], close: value };
        setHours(updateHours);
        console.log(hours[day]);
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
                    {!isClosed && (
                        <input
                            type="time"
                            className="start-time"
                            name="open"
                            required
                            onChange={(e) => handleChangeOpen(e.target.value)}
                        />
                    )}
                </td>
                <td>
                    {!isClosed && (
                        <input
                            type="time"
                            className="close-time"
                            name="close"
                            required
                            onChange={(e) => handleChangeClose(e.target.value)}
                        />
                    )}
                </td>
                <td>
                    <input
                        id="isClosedCheck"
                        type="checkbox"
                        name="isClosed"
                        onChange={(e) => {
                            handleChangeCheckbox(e.target.checked);
                            setIsClosed(e.target.checked);
                        }}
                    />
                    Closed All Day
                </td>
            </tr>
        </>
    );
}
