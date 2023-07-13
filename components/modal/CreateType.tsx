import React, {useState} from 'react';
import TypeService from "../../services/TypeService";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton, ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        TypeService.createType(value).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            isOpen={show}
            onClose={() => onHide()}
        >
            <ModalOverlay />
            <ModalCloseButton/>
            <ModalContent>
                <ModalHeader>
                    Add type
                </ModalHeader>

                <ModalBody>
                    <Input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Enter type name"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button variant="outline-success" onClick={addType}>Добавить</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CreateType;
