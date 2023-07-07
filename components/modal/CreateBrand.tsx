import {useState} from "react";
import {
    Button, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import BrandService from "../../services/BrandService";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addBrand = () => {
        BrandService.createBrand(value).then(() => {
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
            <ModalContent>
                <ModalCloseButton />
                <ModalHeader>
                    Add type
                </ModalHeader>
                <ModalBody>
                    <Input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Enter type name"}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button variant="outline-danger" onClick={onHide}>Close</Button>
                    <Button variant="outline-success" onClick={addBrand}>Add</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CreateBrand