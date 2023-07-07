import {List, ListItem} from "@chakra-ui/react";
import {useTypeSelector} from "../hooks/useSelector";
import {useActions} from "../hooks/actionCreator";

const TypeBar = () => {
    const {types, selectedType} = useTypeSelector(store => store.device)
    const {setType} = useActions()
    return (
        <List>
            {types.map(type =>
                <ListItem
                    style={{cursor: 'pointer', textDecoration: type.id === selectedType.id ? "underline" : "none"}}
                    onClick={() => setType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListItem>
            )}
        </List>
    );
};

export default TypeBar;