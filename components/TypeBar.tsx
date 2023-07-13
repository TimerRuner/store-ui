import {Box, Flex} from "@chakra-ui/react";
import {useTypeSelector} from "../hooks/useSelector";
import {useActions} from "../hooks/actionCreator";

const TypeBar = () => {
    const {types, selectedType} = useTypeSelector(store => store.device)
    const {setType} = useActions()
    return (
        <Flex p={4} gap={4} justifyContent="space-around" alignItems="center" overflow="auto">
            {types.map(type =>
                <Box
                    p={4}
                    background="white"
                    border="1px solid grey"
                    borderRadius="4px"
                    color="black"
                    style={{cursor: 'pointer', textDecoration: type.id === selectedType?.id ? "underline" : "none"}}
                    onClick={() => setType(type)}
                    key={type.id}
                >
                    {type.name}
                </Box>
            )}
        </Flex>
    );
};

export default TypeBar;