import { google } from "googleapis";

let gSheetId = "187U52Hd6SIuetSR7Sla_7BYB8tJL3saB5bouTvmgDMQ";
let sheetOptions = {
  spreadsheetId: gSheetId,
  insertDataOption: "INSERT_ROWS",
  valueInputOption: "RAW",
};
// GETTING GOOGLE SHEETS API
const getSheetsAPI = async () => {
  const auth = new google.auth.JWT(
    process.env.NEXT_PUBLIC_GCLOUD_CLIENT_EMAIL,
    null,
    process.env.NEXT_PUBLIC_GCLOUD_PRIVATE_KEY,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  const sheetsAPI = google.sheets({ version: "v4", auth: auth });
  return sheetsAPI;
};
export async function onContactFormSubmit(
  e,
  email,
  name,
  message,
  isInvalidEmail
) {
  if (email === "" && name === "" && message === "" && isInvalidEmail) {
    alert("Fill in the fields properly..");
  } else {
    e.preventDefault();
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
  }
}
