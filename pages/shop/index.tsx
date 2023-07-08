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
import {useActions} from "../../hooks/actionCreator";
import MainLayout from "../../layout/MainLayout";

const Shop = () => {
    const {selectedBrand, selectedType, page} = useTypeSelector(store => store.device)
    const {fetchDevices, fetchTypes, fetchBrands} = useActions()
    useEffect(() => {
        fetchTypes()
        fetchBrands()
        fetchDevices(null, null, 0, 5)
    }, [])
    useEffect(() => {
        fetchDevices(selectedType?.id, selectedBrand?.id, page * 5 - 5, 5)
    }, [page, selectedType, selectedBrand])
    return (
        <MainLayout>
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
        </MainLayout>
    );
};

export default Shop;
