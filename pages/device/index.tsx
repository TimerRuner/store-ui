import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {Box, Button, Card, Container, Heading} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react"
import DeviceService from "../../services/DeviceService";
import {IDevice} from "../../models/models/DeviceResponse";

const DevicePage = () => {
    const [device, setDevice] = useState<IDevice>()
    const {id} = useParams()
    useEffect(() => {
        DeviceService.fetchOneDevice(id).then(res => setDevice(res?.data))
    }, [])

    return (
        <Container>
            <Box>
                <Box>
                    <Image width={300} height={300} src={device?.picture}/>
                </Box>
                <Box>
                    <Box className="d-flex flex-column align-items-center">
                        <Heading as="h2">{device.name}</Heading>
                        <Box>
                            {Math.floor(device?.ratings.reduce((acc, item) => acc += item.rate, 0) / device.ratings.length)}
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Card
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <Heading as="h3">От: {device?.price} руб.</Heading>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Box>
            </Box>
            <Box>
                <Heading as="h1">Характеристики</Heading>
                {device ? device?.characteristics.map((info, index) =>
                    <Box key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.name}: {info.description}
                    </Box>
                ): <Box>No characteristics</Box>}
            </Box>
        </Container>
    );
};

export default DevicePage;
