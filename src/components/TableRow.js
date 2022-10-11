import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
// import Form from "react-bootstrap/Form";

export default function TableRow({
    day,
    openTime,
    setCloseTime,
    closeTime,
    setOpenTime,
    // isClosed,
    // setIsClosed,
    hours,
    setHours,
    // infoSubmit,
    // i,
    // arrayHours,
}) {
    const [isOpen, setIsOpen] = useState(true); //because default is that the store is open

    const handleCheckbox = (event) => {
        // event.preventDefault();
        setIsOpen(!event.target.checked);
        setHour({ ...hour, [event.target.name]: isOpen });

        // const key = e.target.name;
        // const value = e.target.value;
        // setMenuItem({ ...menuItem, [key]: value });
    };

    const [hour, setHour] = useState({
        day: `${day}`,
        isOpen: isOpen,
        open: openTime,
        close: closeTime,
    });
    // bundle all info - isClosed, open, close hours - into setStoreHours prop passed from Create
    // and that would, at the end of all of this, have 7 objects inside its array

    // const handleTime = async (event) => {
    //     console.log(time);
    //     await setTime(event.format("LT"));
    //     console.log(time);
    // };

    // if (infoSubmit) {
    //     setHours([...hours, hour]);
    // }

    // console.log(arrayHours);

    const handleChange = (event) => {
        const newHours = hours.map((obj) => {
            if (obj.day === day) {
                return {
                    ...obj,
                    day: day,
                    isOpen: isOpen,
                    open: openTime,
                    close: closeTime,
                };
            }
            return obj;
        });
        setHours(newHours);

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
                        format="hh:mm A"
                        disabled={!isOpen}
                        name="open"
                        onChange={(e) => {
                            setOpenTime(e.format("LT"));
                            setHour({ ...hour, [`open`]: openTime });
                            handleChange(e);
                            // setHours([...hours,{ hour}]);
                            // setHours([
                            //     ...hours[key],
                            //     {
                            //         [`day`]: day,
                            //         [`open`]: openTime,
                            //         [`close`]: closeTime,
                            //         [`isOpen`]: isOpen,
                            //     },
                            // ]);
                            // arrayHours[i] = {
                            //     [`day`]: day,
                            //     [`open`]: openTime,
                            //     [`close`]: closeTime,
                            //     [`isOpen`]: isOpen,
                            // };
                        }}
                        // { ...menuItem, [key]: value }
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
                        // disabled={} use this and check if checkbox is selected, if so, disable.
                        // onChange={(e) => setCloseTime(e.format("LT"))}
                        onChange={(e) => {
                            setCloseTime(e.format("LT"));
                            setHour({ ...hour, [`close`]: closeTime });
                            // setHours([...hours, hour]);
                            // setHours([
                            //     ...hours[key],

                            // ]);
                            // console.log("key", i);
                            // arrayHours[i] = {
                            //     [`day`]: day,
                            //     [`open`]: openTime,
                            //     [`close`]: closeTime,
                            //     [`isOpen`]: isOpen,
                            // };
                        }}
                    />
                </td>
                <td>
                    <input
                        id="isOpenCheck"
                        type="checkbox"
                        name="isOpen"
                        onChange={handleCheckbox}
                    />
                    Closed All Day
                </td>
            </tr>
        </>
    );
}
