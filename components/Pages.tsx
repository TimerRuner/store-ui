import {useTypeSelector} from "../hooks/useSelector";
import {Pagination} from "@mui/material";
import {useActions} from "../hooks/actionCreator";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {extendTheme} from "@chakra-ui/react";

const Pages = () => {
    const chakraUiTheme = extendTheme();
    const muiTheme = createTheme(chakraUiTheme);
    const {count, page} = useTypeSelector(store => store.device)
    const {setPage} = useActions()

    const paginationHandler = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }
    return (
        <ThemeProvider theme={muiTheme}>
            <Pagination count={Math.ceil(count/5)} page={page} onChange={paginationHandler}/>
        </ThemeProvider>
    );
};

export default Pages;