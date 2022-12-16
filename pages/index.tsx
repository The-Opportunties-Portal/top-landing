import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import { Box, Button, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box h="982px" pt={"93px"} color="white" bg="radial-gradient(78.27% 114.34% at 60.01% 112.56%, rgba(11, 11, 11, 0.7) 0%, rgba(89, 89, 89, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(96.28% 96.28% at 115.6% 50%, rgba(222, 233, 50, 0.7) 0%, rgba(59, 89, 202, 0.126) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(105.87% 105.87% at 4.16% 5.34%, rgba(237, 59, 40, 0.7) 0%, rgba(154, 84, 224, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #0038E5;">
      <Flex direction={"column"} h="100%" justify={"center"}>
        <Image src={"/images/New employee-amico 1.svg"} w="408" h="408" alt="employees discussing" mb={16}/>
        <Box>
          <VStack textAlign={"center"} spacing={4}>
            <Heading fontSize={"69px"}>Where talent meets opportunity</Heading>
            <Text fontSize={"24px"} color={"rgba(242, 246, 249, 0.6)"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </Text>
            <Flex w={"100%"} justify={"center"} color={"rgba(34, 24, 72, 1)"}>
              <Button fontSize={"22px"} w="200px" h="50px" mr={"40px"} bg="radial-gradient(100% 359.18% at 0% 0%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)">
                Sign up
              </Button>
              <Button fontSize={"22px"} w="200px" h="50px" bg="radial-gradient(100% 359.18% at 0% 0%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)">
                Early access
              </Button>
            </Flex>
          </VStack> 
        </Box>
      </Flex>
    </Box>
  )
}
