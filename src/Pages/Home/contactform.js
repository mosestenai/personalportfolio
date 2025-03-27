import React, { useState } from "react";
import { Box, Stack, Button, IconButton } from "@mui/material";
import { Customsectiontextinput, Customselectinput } from "../../Components/textinputs.";
import { secondaryColor } from "../../Utils/colors";
import { gottowhatsapp, initiateEmail } from "../../Utils/functions";

const ContactmeForm = ({ width }) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [interest, setinterest] = useState('');
    const [budget, setbudget] = useState('');
    const [country, setcountry] = useState('');
    const [message, setmessage] = useState('');

    const interest_options = [
        "Mobile Development",
        "Website Development",
        "Payment Integration",
        "UI/UX Design",
        "Other"
    ];

    const budget_options = [
        "Below $500",
        "$500 - $1000",
        "$1000 - $5000",
        "$5000+"
    ];

    const country_options = [
        "Kenya",
        "United States",
        "United Kingdom",
        "India",
        "Germany",
        "Other"
    ];

    const handleSubmit = () => {
        const message_content = `
        Client Name: ${name}
        Email: ${email}
        Phone NUmber: ${phone}
        Interested in: ${interest}
        Budget: ${budget}
        Country: ${country}
        Message: ${message}
        `
        gottowhatsapp()
    };

    return (
        <Box width={width} >
            <Stack component={'form'} flexWrap={"wrap"} flexDirection={"row"} justifyContent={"space-between"}>
                <Customsectiontextinput
                    width={"48%"}
                    fieldname={"Name"}
                    autoComplete={"name"}
                    bgColor={"#f5f5f5"}
                    value={name}
                    onChange={setname}
                    placeholder={"Ex John Doe"}
                />
                <Customsectiontextinput
                    width={"48%"}
                    fieldname={"Email"}
                    autoComplete={"email"}
                    bgColor={"#f5f5f5"}
                    type={"email"}
                    value={email}
                    onChange={setemail}
                    placeholder={"example@gmail.com"}
                />
                <Customsectiontextinput
                    width={"48%"}
                    fieldname={"Phone"}
                    autoComplete={"tel"}
                    bgColor={"#f5f5f5"}
                    value={phone}
                    onChange={setphone}
                    placeholder={"Enter Phone Number"}
                />
                <Customselectinput
                    options={interest_options}
                    width={"48%"}
                    bgColor={"#f5f5f5"}
                    fieldname={"Interest"}
                    value={interest}
                    onChange={setinterest}
                />
                <Customselectinput
                    bgColor={"#f5f5f5"}
                    options={budget_options}
                    width={"48%"}
                    fieldname={"Budget"}
                    value={budget}
                    onChange={setbudget}
                />
                <Customselectinput
                    bgColor={"#f5f5f5"}
                    options={country_options}
                    width={"48%"}
                    fieldname={"Country"}
                    value={country}
                    onChange={setcountry}
                />
            </Stack><br />
            <Customsectiontextinput
                bgColor={"#f5f5f5"}
                width={"100%"}
                fieldname={"Message"}
                multiline
                placeholder={"Enter here.."}
                rows={4}
                value={message}
                onChange={setmessage}
            />

            <Stack onClick={() => handleSubmit()} flexDirection={"row"} sx={{ width: "fit-content" }} bgcolor={secondaryColor} padding={1} borderRadius={8}>
                <Button variant="contained" color="primary" sx={{ borderRadius: 5, mr: 2 }}>Submit</Button>
                <IconButton disableRipple sx={{ backgroundColor: "white" }}>
                    <img src={require("./../../assets/images/arrow.png")} />
                </IconButton>
            </Stack>
        </Box>
    );
};

export default ContactmeForm;
