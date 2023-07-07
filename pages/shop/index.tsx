import {Box, Container} from "@chakra-ui/react";
import {useEffect} from "react";
import DeviceService from "../../services/DeviceService";
import {useTypeSelector} from "../../hooks/useSelector";
import TypeService from "../../services/TypeService";
import BrandService from "../../services/BrandService";
import TypeBar from "../../components/TypeBar";
import BrandBar from "../../components/BrandBar";
import DeviceList from "../../components/DeviceList";
import Pages from "../../components/Pages";

const Shop = () => {
    const {selectedBrand, selectedType, page} = useTypeSelector(store => store.device)
    useEffect(() => {
        TypeService.fetchTypes()
        BrandService.fetchBrands()
        DeviceService.fetchDevices(null, null, 0, 5)
    }, [])

    useEffect(() => {
        DeviceService.fetchDevices(selectedType.id, selectedBrand.id, page, 5)
    }, [page, selectedType, selectedBrand])

    return (
        <Container>
            <Box>
                <Box>
                    <TypeBar/>
                </Box>
                <Box>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Box>
            </Box>
        </Container>
    );
};

export default Shop;
