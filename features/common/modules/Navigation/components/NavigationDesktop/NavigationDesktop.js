import { Box, Flex, Highlight, Text } from "@chakra-ui/react";
import Link from "next/link";
import { HiHomeModern } from 'react-icons/hi2';


const NavigationDesktop = () => {
    return (<Box 
        color='blue.600' 
        paddingY='2rem' 
        backgroundColor='white' 
        display={{base:"none", md:'block'}}
        > 
            <Box maxWidth='1280px' margin='0 auto'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Link href='/'>
                        <Box display="flex" gap='2' alignItems='center'>
                            <HiHomeModern size='30' />
                            <Text fontSize='2xl' fontWeight='black'>Wheretolive</Text>
                        </Box>
                    </Link>
                </Flex>
            </Box>
        </Box>);
}
 
export default NavigationDesktop;