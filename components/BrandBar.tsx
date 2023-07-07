import {useTypeSelector} from "../hooks/useSelector";
import {useActions} from "../hooks/actionCreator";
import {Box, Card} from "@chakra-ui/react";

const BrandBar = () => {
    const {brands, selectedBrand} = useTypeSelector(store => store.device)
    const {setBrand} = useActions()
    return (
        <Box>
            {brands.map(brand =>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => setBrand(brand)}
                    border={brand.id === selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Box>
    );
};

export default BrandBar;