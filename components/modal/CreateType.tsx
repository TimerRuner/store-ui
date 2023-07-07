import React, {useState} from 'react';
import TypeService from "../../services/TypeService";
import {Button, Input, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader} from "@chakra-ui/react";

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
            <ModalHeader>
                Add type
            </ModalHeader>
            <ModalCloseButton/>
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
        </Modal>
    );
};

export default CreateType;
