import React, {useState, useEffect} from 'react';
import {useTypeSelector} from "../../hooks/useSelector";
import {
    Box,
    Button,
    Input,
    Modal,
    ModalBody, ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select
} from "@chakra-ui/react";
import DeviceService from "../../services/DeviceService";
import {useActions} from "../../hooks/actionCreator";
import * as uuid from "uuid"

const CreateDevice = ({show, onHide}) => {
    const {types, brands, selectedType, selectedBrand} = useTypeSelector(store => store.device)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(null)
    const [picture, setPicture] = useState(null)
    const [info, setInfo] = useState([])
    const {fetchTypes, fetchBrands, setType, setBrand} = useActions()

    useEffect(() => {
        fetchTypes()
        fetchBrands()
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: uuid.v4()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setPicture(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('picture', picture)
        formData.append('brandId',  String(selectedBrand?.id))
        formData.append('typeId',  String(selectedType?.id))
        DeviceService.createDevice(formData).then(async res => {
            onHide()
            info.map(
                inf => DeviceService.addDeviceCharacteristic({title: inf.title, description: inf.description, deviceId: res.data.id})
            )
        }).catch(e => console.log(e))
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
                    Add device
                </ModalHeader>
                <ModalBody>
                    <Select mb={3} placeholder="Chose type" onChange={(e) => setType(JSON.parse(e.target.value))}>
                        {types.map(type =>
                            <option
                                key={type.id}
                                value={JSON.stringify(type)}
                            >
                                {type.name}
                            </option>
                        )}
                    </Select>
                    <Select mb={3} placeholder="Chose brand" onChange={(e) => setBrand(JSON.parse(e.target.value))}>
                        {brands.map(brand =>
                            <option
                                key={brand.id}
                                value={JSON.stringify(brand)}
                            >
                                {brand.name}
                            </option>
                        )}
                    </Select>
                    <Input
                        mb={3}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter device name"
                    />
                    <Input
                        mb={3}
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        placeholder="Enter device price"
                        type="number"
                    />
                    <Input
                        mb={3}
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Add new property
                    </Button>
                    {info.map(i =>
                        <Box key={i.number} mb={3}>
                            <Input
                                mb={3}
                                value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                placeholder="Enter device characteristic title"
                            />
                            <Input
                                mb={3}
                                value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                placeholder="Enter device characteristic value"
                            />
                            <Button
                                onClick={() => removeInfo(i.number)}
                                variant={"outline-danger"}
                            >
                                Remove
                            </Button>
                        </Box>
                    )}
                </ModalBody>

                <ModalFooter>
                    <Button variant="outline-danger" onClick={onHide}>Close</Button>
                    <Button variant="outline-success" onClick={addDevice}>Add</Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    );
};

export default CreateDevice;
