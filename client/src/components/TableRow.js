import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import Form from "react-bootstrap/Form";

export default function TableRow({ day }) {
    const [time, setTime] = useState("");

    const [isClosed, setIsClosed] = useState(false); //because default is that the store is open

    const handleCheckbox = (event) => {
        // event.preventDefault();
        setIsClosed(event.target.checked);
    };

    // bundle all info - isClosed, open, close hours - into setStoreHours prop passed from Create
    // and that would, at the end of all of this, have 7 objects inside its array

    return (
        <>
            <tr>
                <td>{day}</td>
                <td>
                    <TimePicker
                        placeholder="Select Time"
                        use12Hours
                        minuteStep={15}
                        showSecond={false}
                        focusOnOpen={true}
                        format="hh:mm A"
                        disabled={isClosed}
                        onChange={(e) => setTime(e.format("LT"))}
                    />
                </td>
                <td>
                    <TimePicker
                        placeholder="Select Time"
                        use12Hours
                        minuteStep={15}
                        showSecond={false}
                        focusOnOpen={true}
                        disabled={isClosed}
                        format="hh:mm A"
                        // disabled={} use this and check if checkbox is selected, if so, disable.

                        onChange={(e) => setTime(e.format("LT"))}
                    />
                </td>
                <td>
                    <Form>
                        <div key={"default-checkbox"} className="mb-3">
                            <Form.Check
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