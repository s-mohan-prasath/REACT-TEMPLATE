import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useMemo, useState } from "react";
import { google } from "googleapis";
/**
 *
 * packages required --> googleapis, @nextui-org/react
 * functions --> initGoogleAPI function,
 * @returns
 */

// GOOGLE SHEETS OPTIONS

let gSheetId = "187U52Hd6SIuetSR7Sla_7BYB8tJL3saB5bouTvmgDMQ";
let sheetOptions = {
  spreadsheetId: gSheetId,
  insertDataOption: "INSERT_ROWS",
  valueInputOption: "RAW",
};
// GETTING GOOGLE SHEETS API

let getSheetsAPI = async () => {
  const auth = new google.auth.JWT(
    process.env.NEXT_PUBLIC_GCLOUD_CLIENT_EMAIL,
    null,
    process.env.NEXT_PUBLIC_GCLOUD_PRIVATE_KEY,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  const sheetsAPI = google.sheets({ version: "v4", auth: auth });
  return sheetsAPI;
};

function ContactForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };
  const isInvalidEmail = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);
  const submitForm = async (event) => {
    try {
      await getSheetsAPI().spreadsheets.values.append({
        ...sheetOptions,
        range: `contact-form!B2:D`,
        requestBody: {
          values: [[name, email, message]],
        },
      });
      alert("Thank you\nWe will get in touch with you soon...");
    } catch (e) {
      alert("Could not submit the contact form");
    }
  };
  return (
    <div className="w-full">
      <form
        onSubmitCapture={(e) => {
          if (email === "" && name === "" && message === "" && isInvalidEmail) {
            alert("Fill in the fields properly..");
          } else {
            e.preventDefault();
          }
        }}
        onSubmit={(event) => submitForm(event)}
        action=""
        className="flex flex-col items-center max-w-sm gap-2"
      >
        <Input
          value={email}
          type="email"
          label="Email"
          variant="bordered"
          isInvalid={isInvalidEmail}
          color={isInvalidEmail ? "danger" : "default"}
          errorMessage={isInvalidEmail && "Please enter a valid email"}
          onValueChange={setEmail}
          isRequired
        />
        <Input
          value={name}
          type="text"
          onValueChange={setName}
          label="Name"
          variant="bordered"
          isRequired
        />
        <Textarea
          label="Message"
          value={message}
          onValueChange={setMessage}
          variant="bordered"
          isRequired
        />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
