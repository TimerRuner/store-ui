import * as React from 'react';
import {useRouter} from "next/router";
import {
    Box,
    Button,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Heading,
    IconButton,
    List,
    ListItem,
    MenuButton,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {Menu} from "@chakra-ui/menu";
import {BurgerIcon} from "../icons/BurgerIcon";
import {useActions} from "../hooks/actionCreator";
import {ERoutes} from "../models/constants/routes";
import {EColor} from "../models/colors/colors";
import Cookies from "js-cookie";
import {useTypeSelector} from "../hooks/useSelector";
import {useEffect} from "react";


const menuItems = [
    {text: 'Main page', href: ERoutes.MAIN},
    {text: "Admin", href: ERoutes.ADMIN},
    {text: "Shop", href: ERoutes.SHOP_ROUTE},
    {text: "Basket", href: ERoutes.BASKET_ROUTE},
]

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {basketDevices} = useTypeSelector(state => state.device)
    const {fetchBasketDevices} = useActions()
    const router = useRouter()
    const {logout} = useActions()

    useEffect(() => {
        fetchBasketDevices()
    }, [])
    const logoutHandler = () => {
        logout()
        const accessToken = localStorage.getItem("token")
        if(!accessToken) return Cookies.remove("user")
    }
    console.log(basketDevices)
    return (
        <Box bg={EColor.green}>
            <Menu>
                <Flex gap={4} p={4} justifyContent="space-between" alignItems="center">
                    <MenuButton
                        onClick={onOpen}
                        as={IconButton}
                        aria-label='Options'
                        icon={
                            <Box width="34px" height="34px">
                                <BurgerIcon width="34px" height="34px"/>
                            </Box>
                        }
                        variant='outline'
                    />
                    <Button onClick={() => router.push(ERoutes.BASKET_ROUTE)}>{`Basket ${basketDevices?.length}`}</Button>
                    <Button bg={EColor.greenLight}  onClick={logoutHandler}>Logout</Button>
                </Flex>
            </Menu>
            <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent p={4}>
                    <Heading color="black" mb={4} as="h2">Menu</Heading>
                    <List>
                        {menuItems.map(({text, href}, index) => (
                            <ListItem
                                key={index}
                                cursor="pointer"
                                pt={3}
                                pb={3}
                                onClick={() => router.push(href)}
                            >
                                <Text color="black" _hover={{textDecoration: "underline"}}>{text}</Text>
                            </ListItem>
                        ))}
                    </List>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}
