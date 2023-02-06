import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";

const Navbar = ({Type}) => {
  return (
    <Flex pl="4rem" pr="4rem" pt="1rem" pb="1rem" color="#fff">
      <Box>
        <Heading fontSize="1.2rem" >NLX.TV</Heading>
        </Box>
      <Spacer/>
      <Flex gap="4rem">
        <Box fontSize="12px" >Feature</Box>
        <Box fontSize="12px" >Pricing</Box>
        <Box fontSize="12px" >Contact</Box>
        <Box>
            <Button backgroundColor="#fff" color="#7290d3" pl="3rem" pr="3rem" borderRadius="2rem">login</Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
