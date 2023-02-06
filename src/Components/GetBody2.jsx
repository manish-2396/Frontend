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

const GetBody2 = ({ Type }) => {
  const [get2, setget2] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getBody2 = () => {
    fetch("https://my-json-server-k79c.onrender.com/div2")
      .then((res) => res.json())
      .then((res) => setget2(res));
  };
  useEffect(() => {
    getBody2();
  }, []);
  return (
    <Box>
      <Flex columns={2} mt="5rem" gap="10rem" justifyContent="end">
        <Box width="30rem">
          <Heading color="#4e5461">{get2 && get2.title}</Heading>
          <br />
          <br />
          <Text color="#888d93" fontSize="13px">
            {get2 && get2.description}
          </Text>
          <Button style={{display : Type === "Admin" ? "block" : "none"}} onClick={onOpen}>Edit</Button>
        </Box>
        <Box>
          <Image
            width="30rem"
            src="https://i.ibb.co/KDFGbRn/messages-animate.png"
          />
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

export default GetBody2;
