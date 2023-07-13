import {Button, Container} from "@chakra-ui/react";
import {useState} from "react";
import CreateBrand from "../../components/modal/CreateBrand";
import CreateDevice from "../../components/modal/CreateDevice";
import CreateType from "../../components/modal/CreateType";
import MainLayout from "../../layout/MainLayout";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <MainLayout>
            <Container>
                <Button
                    variant={"outline-dark"}
                    onClick={() => setTypeVisible(true)}
                >
                    Add type
                </Button>
                <Button
                    variant={"outline-dark"}
                    onClick={() => setBrandVisible(true)}
                >
                    Add brand
                </Button>
                <Button
                    variant={"outline-dark"}
                    onClick={() => setDeviceVisible(true)}
                >
                    Add device
                </Button>
                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            </Container>
        </MainLayout>
    );
};

export default Admin;