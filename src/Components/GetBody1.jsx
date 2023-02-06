import {
  Box,
  Heading,
  Image,
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const GetBody1 = ({ Type }) => {
  const [get1, setget1] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getBody1 = () => {
    fetch("https://my-json-server-k79c.onrender.com/div1")
      .then((res) => res.json())
      .then((res) => setget1(res));
  };
  useEffect(() => {
    getBody1();
  }, []);

  return (
    <Box>
      <Flex columns={2} mt="10rem" gap="10rem">
        <Box>
          <Image width="30rem" src="https://i.ibb.co/163qy0G/Email840.png" />
        </Box>
        <Box width="30rem">
          <Heading color="#4e5461">{get1 && get1.title}</Heading>
          <br />
          <br />
          <Text color="#888d93" fontSize="13px">
            {get1 && get1.description}
          </Text>
          <Button style={{display : Type === "Admin" ? "block" : "none"}} onClick={onOpen}>Edit</Button>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input />
            <br/>
            <br/>
            <Textarea placeholder="Here is a sample placeholder" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GetBody1;
