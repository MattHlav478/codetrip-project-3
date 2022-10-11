import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Select from "react-select";

export default function AdditionalInfo({
    colors,
    additionalInfoData,
    setAdditionalInfoData,
}) {
    const [color, setColor] = useState("#fff");
    // choose a color that is default ASK MARLOWE WHAT IS BEST

    const handleCheckbox = (event) => {
        const key = event.target.name;
        const check = event.target.checked;
        console.log(check);
        setAdditionalInfoData({ ...additionalInfoData, [key]: check });
        console.log(additionalInfoData);
    };

    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setAdditionalInfoData({ ...additionalInfoData, [key]: value });
        console.log(additionalInfoData);
    };

    return (
        <div>
            <h1>Last minute business!</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>
                        Do you want to include an About Us page? This can be a
                        good place for a paragraph or two to let people know all
                        about you!
                    </Form.Label>
                    <input
                        id="isAboutCheck"
                        type="checkbox"
                        name="isAbout"
                        onChange={handleCheckbox}
                    />
                </Form.Group>

                {additionalInfoData.isAbout && (
                    <textarea
                        placeholder="Tell us your story."
                        className="form-input col-12 col-md-9"
                        name="about"
                        onChange={handleChange}
                        value={additionalInfoData.about}
                    ></textarea>
                )}

                <Form.Group className="mb-3">
                    <Form.Label>
                        Want to link to any other websites? Grubhub, Instagram,
                        etc.
                    </Form.Label>
                    <Form.Control
                        name="linkOne"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter link"
                    />
                    <Form.Control
                        name="linkTwo"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter link"
                    />
                    <Form.Control
                        name="linkThree"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter link"
                    />
                </Form.Group>

                <div className="container">
                    <br></br>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Select
                                name="color"
                                options={colors}
                                onChange={
                                    (choice) =>
                                        setAdditionalInfoData({
                                            ...additionalInfoData,
                                            [`color`]: choice.value,
                                        })
                                    // get color value instead? # or decimal? ask Marlowe
                                }
                            />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </Form>
        </div>
    );
}
