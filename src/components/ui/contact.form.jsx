import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useMemo, useState } from "react";
// import { onContactFormSubmit } from "../../lib/contact-form";
/**
 *
 * packages required --> googleapis, @nextui-org/react, buffer [only for pure react project]
 * @returns
 */

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
  return (
    <div className="w-full">
      <form
        // onSubmit={(e) =>
        //   onContactFormSubmit(e, email, name, message, isInvalidEmail)
        // }
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
