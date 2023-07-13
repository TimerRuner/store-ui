import type { NextPage } from 'next'
import MainLayout from "../layout/MainLayout";
import {useTypeSelector} from "../hooks/useSelector";
import {Flex, Heading} from "@chakra-ui/react";
import React from "react";

const Home: NextPage = () => {
  const {user} = useTypeSelector(store => store.auth)
  return (
      <MainLayout>
       <Flex justifyContent="center" alignItems="center" flexDirection="column">
           <Heading
               as="h1"
               size="4xl"
           >
               {`Hello ${user.fullName}`}
           </Heading>
           <Heading
               as="h4"
           >
               {user && !user.isActivated && `Please activate your account ${user.email}`}
           </Heading>
       </Flex>
      </MainLayout>
  )
}

export default Home
