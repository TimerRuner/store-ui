import {useTypeSelector} from "../hooks/useSelector";
import {useActions} from "../hooks/actionCreator";
import {Box, Card, Flex} from "@chakra-ui/react";

const BrandBar = () => {
    const {brands, selectedBrand} = useTypeSelector(store => store.device)
    const {setBrand} = useActions()
    return (
        <Flex p={4} gap={4} justifyContent="space-around" alignItems="center" overflow="auto">
            {brands.map(brand =>
                <Box
                    p={4}
                    style={{cursor: 'pointer', textDecoration: brand.id === selectedBrand?.id ? "underline" : "none"}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => setBrand(brand)}
                    border={brand.id === selectedBrand?.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Box>
            )}
        </Flex>
    );
};

export default BrandBar;