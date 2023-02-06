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
  Textarea,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const GetBody3 = ({ Type }) => {
  const [get3, setget3] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getBody3 = () => {
    fetch("https://my-json-server-k79c.onrender.com/div3")
      .then((res) => res.json())
      .then((res) => setget3(res));
  };
  useEffect(() => {
    getBody3();
  }, []);
  return (
    <Box>
      <Flex columns={2} mt="5rem" gap="20rem">
        <Box>
          <Image
            width="30rem"
            src="https://i.ibb.co/hRGG8sR/SMS-broadcasting-header.png"
          />
        </Box>
        <Box width="30rem">
          <Heading color="#4e5461">{get3 && get3.title}</Heading>
          <br />
          <br />
          <Text color="#888d93" fontSize="13px">
            {get3 && get3.description}
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

export default GetBody3;
