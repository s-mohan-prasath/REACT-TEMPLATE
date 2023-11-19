import React from "react";
// MODAL COMPONENT
import ModalForm from "../components/nextui/ModalForm";
import { Button, useDisclosure } from "@nextui-org/react";
// NAVBAR CUSTOM COMPONENT
import NavBarCustom from "../components/nextui/NavBarCustom";
import ContactForm from "../components/ui/contact.form";

function NextUIPage(props) {
  // FOR MODAL COMPOENENT
  const {
    isOpen: isCustomOpen,
    onOpen: onCustomOpen,
    onOpenChange: onCustomOpenChange,
  } = useDisclosure();
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      {/* MODAL COMPONENT */}
      <NavBarCustom />
      <div className="border-b-2 p-5">
        <h2>Modal component</h2>
        <Button onPress={onCustomOpen} color="primary" variant="solid">
          Open Modal
        </Button>
        <ModalForm
          title="Title of the Modal"
          isOpen={isCustomOpen}
          onOpenChange={onCustomOpenChange}
          state={{
            id: 1,
            state1: "kanmani",
            state2: "kannamma",
            state3: "kannappa",
          }}
        />
      </div>
      <div className="border-b-2 p-5">
        <h2>Contact Form</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default NextUIPage;
