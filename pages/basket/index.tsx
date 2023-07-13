import MainLayout from "../../layout/MainLayout";
import {Box, Card, Flex, Image} from "@chakra-ui/react";
import DeviceItem from "../../components/DeviceItem";
import {useTypeSelector} from "../../hooks/useSelector";
import {DEVICE_ROUTE} from "../../utils/consts";
import {useRouter} from "next/router";

const Basket = () => {
    const {basketDevices} = useTypeSelector(state => state.device)
    const router = useRouter()
    console.log(basketDevices)
    return (
        <MainLayout>
            <Flex p={4} gap={4} alignItems="center" flexWrap="wrap">
                {basketDevices?.map((basket) => (
                    <Box key={basket.device.name} p={4} onClick={() => router.push(DEVICE_ROUTE + '/' + basket.device.id)}>
                        <Image width={150} height={150} src={basket.device.picture}/>
                        <Box>{basket.device.name}</Box>
                        <Box>{basket.device.price}$</Box>
                    </Box>
                ))}
            </Flex>
        </MainLayout>
    );
};

export default Basket;