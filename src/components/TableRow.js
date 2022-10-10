import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import Form from "react-bootstrap/Form";

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

    console.log(hour);

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
                        }}
                    />
                </td>
                <td>
                    <Form>
                        <div key={"default-checkbox"} className="mb-3">
                            <Form.Check
                                name="isOpen"
                                type="checkbox"
                                id={"default-checkbox"}
                                label={"Closed all day"}
                                onChange={handleCheckbox}
                            />
                        </div>
                    </Form>
                </td>
            </tr>
        </>
    );
}
