import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
/**
 * title - Title of the Modal
 * @returns
 */
export default function ModalForm(props) {
  const { title, isOpen, onOpenChange, state } = props;
  // STATES OF THE FORM
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");

  useEffect(() => {
    if (isOpen === true && state?.id !== undefined) {
      setState1(state?.state1);
      setState2(state?.state2);
      setState3(state?.state3);
    }
  }, [isOpen, state]);
  const handleSubmit = () => {
    //TODO: do action
  };
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="state1"
                  placeholder="Enter your state1"
                  value={state1}
                  onValueChange={setState1}
                  variant="bordered"
                />
                <Input
                  autoFocus
                  label="state2"
                  placeholder="Enter your state2"
                  value={state2}
                  onValueChange={setState2}
                  variant="bordered"
                />
                <Input
                  autoFocus
                  label="state3"
                  placeholder="Enter your state3"
                  value={state3}
                  onValueChange={setState3}
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    handleSubmit();
                    onClose();
                  }}
                >
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
