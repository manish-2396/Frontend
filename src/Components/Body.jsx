import { Box } from "@chakra-ui/react";
import GetBody1 from "./GetBody1";
import GetBody2 from "./GetBody2";
import GetBody3 from "./GetBody3";

const Body = ({ Type }) => {


  return (
    <Box>
      <GetBody1 Type={Type}/>
      <GetBody2 Type={Type}/>
      <GetBody3 Type={Type}/>
    </Box>
  );
};

export default Body;
