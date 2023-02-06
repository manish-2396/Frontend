import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex justifyContent="space-evenly">
      <Box>
        <Link to="/Admin">Admin</Link>
      </Box>
      <Box>
        <Link to="/User">User</Link>
      </Box>
    </Flex>
  );
};

export default Home;
