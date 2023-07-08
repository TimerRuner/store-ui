import {useEffect, useState} from "react";
import {Box, Button, Card, Container, Heading} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react"
import DeviceService from "../../services/DeviceService";
import {IDevice} from "../../models/models/DeviceResponse";
import {useRouter} from "next/router";
import MainLayout from "../../layout/MainLayout";

const DevicePage = () => {
    const [device, setDevice] = useState<IDevice>()
    const {query} = useRouter()
    useEffect(() => {
        if(query?.id){
            DeviceService.fetchOneDevice(query.id).then(res => setDevice(res?.data))
        }
    }, [query?.id])

    return (
       <MainLayout>
           <Container>
               <Box>
                   <Box>
                       <Image width={300} height={300} src={device?.picture}/>
                   </Box>
                   <Box>
                       <Box className="d-flex flex-column align-items-center">
                           <Heading as="h2">{device?.name}</Heading>
                           <Box>
                               {Math.floor(device?.ratings.reduce((acc, item) => acc += item.rate, 0) / device?.ratings.length) || 0}
                           </Box>
                       </Box>
                   </Box>
                   <Box>
                       <Card
                           style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                       >
                           <Heading as="h3">From: {device?.price}$</Heading>
                           <Button variant={"outline-dark"}>Add to busket</Button>
                       </Card>
                   </Box>
               </Box>
               <Box>
                   <Heading as="h1">Characteristic</Heading>
                   {device ? device?.characteristics.map((info, index) =>
                       <Box key={info?.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                           {info.title}: {info.description}
                       </Box>
                   ): <Box>No characteristics</Box>}
               </Box>
           </Container>
       </MainLayout>
    );
};

export default DevicePage;
