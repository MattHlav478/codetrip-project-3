import React from "react";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import Button from "react-bootstrap/Button";

export default function AdditionalInfo({
    colors,
    additionalInfoData,
    setAdditionalInfoData,
    setFormPage,
}) {
    const handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setAdditionalInfoData({ ...additionalInfoData, [key]: value });
    };

    const handleBack = () => {
        setFormPage("menu");
    };

    return (
        <div>
            <h1>Last minute business!</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>
                        Let's write an About Us page! This is a good place for a
                        paragraph or two to let people know all about you!
                    </Form.Label>
                </Form.Group>
                <textarea
                    placeholder="Tell us your story."
                    className="form-input col-12 col-md-9"
                    name="about"
                    onChange={handleChange}
                    value={additionalInfoData.about}
                ></textarea>

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
                                onChange={(choice) =>
                                    setAdditionalInfoData({
                                        ...additionalInfoData,
                                        [`color`]: choice.value,
                                    })
                                }
                            />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </Form>
            <br></br>
            <div className="d-grid gap-2">
                <Button
                    variant="dark"
                    type="submit"
                    size="lg"
                    onClick={handleBack}
                >
                    Back
                </Button>
            </div>
            <br></br>
        </div>
    );
}
