import {useEffect, useState} from "react";
import {Box, Button, Container, Flex, Heading} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react"
import DeviceService from "../../services/DeviceService";
import {IDevice} from "../../models/models/DeviceResponse";
import {useRouter} from "next/router";
import MainLayout from "../../layout/MainLayout";
import {useActions} from "../../hooks/actionCreator";
import {useTypeSelector} from "../../hooks/useSelector";

const DevicePage = () => {
    const [device, setDevice] = useState<IDevice>()
    const {query} = useRouter()
    const {addBasketDevice} = useActions()
    const {basketDevices} = useTypeSelector(state => state.device)

    useEffect(() => {
        if(query?.id){
            DeviceService.fetchOneDevice(query.id).then(res => setDevice(res?.data))
        }
    }, [query?.id])

    const rating = Math.floor(device?.ratings.reduce((acc, item) => acc += item.rate, 0) / device?.ratings.length) || 0

    return (
       <MainLayout>
           <Container>
               <Flex gap={6} flexWrap="wrap">
                   <Box>
                       <Heading pb={2} as="h2">{device?.name}</Heading>
                       <Image width={300} height={300} src={device?.picture}/>
                   </Box>
                   {rating ? <Heading as="h3">{`Rating: ${rating}`}</Heading> : null}
                   <Box>
                       <Heading as="h1" pb={2}>Characteristic</Heading>
                       {device ? device?.characteristics.map((info, index) =>
                           <Box borderRadius="5px" key={info?.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                               {info.title}: {info.description}
                           </Box>
                       ): <Box>No characteristics</Box>}
                   </Box>
                   <Box>
                       <Heading whiteSpace="nowrap" pb={2} as="h3">Price: {device?.price}$</Heading>
                       {basketDevices?.find(basket => basket?.device?.id === device?.id) ? null : <Button onClick={() => addBasketDevice(device.id)}>Add to basket</Button>}
                   </Box>
               </Flex>
           </Container>
       </MainLayout>
    );
};

export default DevicePage;
