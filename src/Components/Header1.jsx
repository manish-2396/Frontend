import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const Header1 = ({ Type }) => {
  const ref1 = useRef();
  const ref2 = useRef();

  const handleSubmit = (onClose) => {
    console.log(onClose)
  }

  const [features, setFeature] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getFeature = () => {
    fetch("https://my-json-server-k79c.onrender.com/features")
      .then((res) => res.json())
      .then((res) => setFeature(res));
  };

  useEffect(() => {
    getFeature();
  }, []);

  return (
    <Box>
      <Box
        m="auto"
        height="5rem"
        maxW="100%"
        style={{
          width: "100%",
          height: "30vh",
          background:
            "linear-gradient(to top left, #fff 50%, #fef3ed 0%, #5657eb 50%, #5657eb 100%)",
        }}
      >
        <Box>
          <Flex justifyContent="center" gap="4rem" textAlign="center">
            {features &&
              features.map((feature) => {
                return (
                  <Box
                    bgColor="#fff"
                    padding="1rem"
                    width="15rem"
                    key={feature.id}
                  >
                    <Image
                      w="7rem"
                      m="auto"
                      p="2rem"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXa1WY2Lgj3DleA8fKZLAarU0BFiv0AMqUPg&usqp=CAU"
                    />
                    <Heading fontSize="1rem" color="#484e59">
                      {feature.title}
                    </Heading>
                    <Text color="#9ea2a6">{feature.description}</Text>
                    <Button
                      style={{ display: Type === "Admin" ? "block" : "none" }}
                      onClick={onOpen}
                    >
                      Edit
                    </Button>
                  </Box>
                );
              })}
          </Flex>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input ref={ref1} placeholder="Title..."/>
            <br />
            <br />
            <Textarea ref={ref2} placeholder="Description..." />
          </ModalBody>

          <ModalFooter>
            <Button   colorScheme="blue" mr={3} onClick={() => handleSubmit(onClose)}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header1;
