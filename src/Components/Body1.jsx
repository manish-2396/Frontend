import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Body1 = ({Type}) => {
  return (
    <Box textAlign="center">
      <Heading color="#4e5461">Choose a plan that's right for you</Heading>
      <br />
      <Text color="#888d93" fontSize="12px">
        30-day money back guanrantee
      </Text>
      <Box position="relative" top="12rem">
        <Flex justifyContent="center" gap="5rem">
          <Box borderRadius="10px" padding="3rem" bgColor="#fff">
            <Heading fontSize="15px" color="#00daa7">
              Stander
            </Heading>
            <br />
            <Heading>
              $30{" "}
               <span style={{ fontWeight: "normal", fontSize: "15px" }}>
                1-month
              </span>
            </Heading>
            <br />
            <Box>
              <ul>
                <li>Lorem ipsum dolor</li>
              </ul>
              <Text>Aku ingin menjadi superhero gan</Text>
            </Box>
            <Box>
              <br />
              <ul>
                <li>Lorem ipsum dolor</li>
              </ul>
              <Text>Aku ingin menjadi superhero gan</Text>
            </Box>
            <Box>
              <br />
              <ul>
                <li>Lorem ipsum dolor</li>
              </ul>
              <Text>Aku ingin menjadi superhero gan</Text>
            </Box>
            <br/>
            <Button bgColor="#00daa7" color="#fff" pl="1.5rem"  pr="1.5rem"   borderRadius="20px">Choose Plan</Button>
          </Box>

          <Box borderRadius="10px" padding="3rem" bgColor="#fff">
            <Heading fontSize="15px" color="#f07f99">
              Premium
            </Heading>
            <br />
            <Heading>
              $30{" "}
              <span style={{ fontWeight: "normal", fontSize: "15px" }}>
                1-month
              </span>
            </Heading>
            <br />

            <Box>
              <ul>
                <li>Lorem ipsum dolor</li>
              </ul>
              <Text>Aku ingin menjadi superhero gan</Text>
            </Box>
            <br />
            <Box>
              <ul>
                <li>Lorem ipsum dolor</li>
              </ul>
              <Text>Aku ingin menjadi superhero gan</Text>
            </Box>
            <br />
            <Box>
              <ul>
                <li>Lorem ipsum dolor</li>
              </ul>
              <Text>Aku ingin menjadi superhero gan</Text>
            </Box>
            <br/>
            <Button bgColor="#00daa7" color="#fff" pl="1.5rem"  pr="1.5rem"   borderRadius="20px">Choose Plan</Button>
          </Box>

          <Box padding="3rem" bgColor="#fefffe" borderRadius="10px">
            <Heading fontSize="15px" color="#b6a5ea">
              Enterpise
            </Heading>
            <br />
            <Heading>
              $30{" "}
              <span style={{ fontWeight: "normal", fontSize: "15px" }}>
                1-month
              </span>
            </Heading>
            <br />

            <Box>
              <ul>
                <li>Lorem ipsum dolor</li>
              </ul>
              <Text>Aku ingin menjadi superhero gan</Text>
            </Box>
            <br />
            <Box>
              <ul>
                <li>Lorem ipsum dolor</li>
              </ul>
              <Text>Aku ingin menjadi superhero gan</Text>
            </Box>
            <br />
            <Box>
              <ul>
                <li>Lorem ipsum dolor</li>
              </ul>
              <Text>Aku ingin menjadi superhero gan</Text>
            </Box>
            <br/>
            <Button bgColor="#00daa7" color="#fff" pl="1.5rem"  pr="1.5rem"   borderRadius="20px" >Choose Plan</Button>
          </Box>
          
        </Flex>
      </Box>
      <Box
        style={{
          width: "100%",
          height: "30vh",
          background:
            "linear-gradient(to bottom right, #fff 50%, #fef3ed 0%, #5657eb 50%, #5657eb 100%)",
        }}
      ></Box>
      <Box height="30rem" backgroundColor="#5657eb"></Box>
    </Box>
  );
};

export default Body1;
