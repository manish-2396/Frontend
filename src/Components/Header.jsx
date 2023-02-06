import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const Header = ({Type}) => {
  return (
    <Box>
      <Box backgroundColor="#5657eb" color="#fff">
        <Navbar Type={Type} />
        <Box>
          <Flex justifyContent="center" pt="10rem" pb="10rem" gap="2rem">
          <Box width="25rem">
            <Heading>Get access to your favorite channels anywhere</Heading>
            <br/>
            <Text fontSize="15px">
              Nlxstreamer offer you the best alternatif to watch your local
              channels anywhere in the world
            </Text>
            <br/>
            <Button backgroundColor="#01dba7" borderRadius="2rem">Get Started Now</Button>
            <br/>
            <br/>
            <Text>30-days money-back guanrantee</Text>
          </Box>
          <Box>
            <Image src="https://i.ibb.co/9bTy44L/61f58639adc78f5f42c06007-Zoom-Trancription-1-removebg-preview.png" />
          </Box>
        </Flex>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Header;
