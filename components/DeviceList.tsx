import {useTypeSelector} from "../hooks/useSelector";
import {Box} from "@chakra-ui/react";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
    const {devices} = useTypeSelector(store => store.device)

    return (
        <Box>
            {devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Box>
    );
};

export default DeviceList;