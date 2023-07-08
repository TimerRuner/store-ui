import {useTypeSelector} from "../hooks/useSelector";
import {Flex} from "@chakra-ui/react";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
    const {devices} = useTypeSelector(store => store.device)
    return (
        <Flex p={4} gap={4} alignItems="center" flexWrap="wrap">
            {devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Flex>
    );
};

export default DeviceList;