import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from '@chakra-ui/react'
import Head from "next/head";
import {EColor} from "../models/colors/colors";

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps>
    = ({
           children,
           title,
            description,
            keywords
       }) => {

    return (
        <>
            <Head>
                <title>{title || 'E-store'}</title>
                <meta name="description" content={`E-store` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "Devices different category"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            <Container overflow="hidden" overflowY="auto" bg={EColor.green} maxW="100vw" minHeight="calc(100vh - 72px)" style={{padding: '90px 0'}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;
