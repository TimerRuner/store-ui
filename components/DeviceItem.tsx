import {Box, Card, Image} from "@chakra-ui/react";
import {DEVICE_ROUTE} from "../utils/consts";
import {useRouter} from "next/router";

const DeviceItem = ({device}) => {
    const router = useRouter()
    return (
        <Box onClick={() => router.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={device.picture}/>
                <Box>
                    <Box>
                        <Box>{device.rating}</Box>
                    </Box>
                </Box>
                <Box>{device.name}</Box>
                <Box>{device.price}$</Box>
            </Card>
        </Box>
    );
};

export default DeviceItem;