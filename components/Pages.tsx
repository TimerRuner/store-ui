import {useTypeSelector} from "../hooks/useSelector";
import {Pagination} from "@mui/material";
import {useActions} from "../hooks/actionCreator";

const Pages = () => {
    const {amount, page} = useTypeSelector(store => store.device)
    const {setPage} = useActions()

    const paginationHandler = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    return (
        <Pagination count={Math.ceil(amount/5)} page={page} onChange={paginationHandler}/>
    );
};

export default Pages;