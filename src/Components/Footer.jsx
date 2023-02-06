import { Avatar, Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = ({Type}) => {
  return (
    <Box textAlign="center" height="auto">
      <Box height="5rem"></Box> 
      <Heading color="#484E59">Don't west your time, get starting today</Heading>
      <br/>
      <Text color="#888D93">Start watching your local tv channels today</Text>
      <br/>
      <Button backgroundColor="#00DAA7" color="#fff" borderRadius="20px">Get Started Now</Button>
      <br/>
      <br/>
      <br/>
      <Box>
        <Flex justifyContent="center" gap="6rem">
          <Box>
            <Heading fontSize="1.2rem" color="#484E59">NLX.TV</Heading>
          </Box>
          <Box>
            <Heading fontSize="0.7rem" color="#888D93">NAVIGATION</Heading>
            <br/>
            <Text fontSize="10px" color="#888D93" >Home</Text>
            <br/>
            <Text fontSize="10px" color="#888D93" >Feature</Text>
            <br/>
            <Text fontSize="10px" color="#888D93" >pricing</Text>
            <br/>
            <Text fontSize="10px" color="#888D93" >Contact Us</Text>
          </Box>
          <Box>
            <Heading fontSize="0.7rem" color="#888D93">LEGAL</Heading>
            <br/>
            <Text fontSize="10px" color="#888D93" >Terms</Text>
            <br/>
            <Text fontSize="10px" color="#888D93" >Privacy</Text>
            <br/>
            <Text fontSize="10px" color="#888D93" >Cookies</Text>
            <br/>
            <Text fontSize="10px" color="#888D93" >Copyright</Text>
          </Box>
          <Box>
            <Heading fontSize="0.7rem" color="#888D93">CONTACT US</Heading>
            <br/>
            <Text fontSize="10px" color="#888D93" >saepulgranz@gmail.com</Text>
            <br/>
            <Text fontSize="10px" color="#888D93" >Terms and Conditions</Text>
            <br/>
            <Text fontSize="10px" color="#888D93" >+15-3724-8765</Text>
            <Flex>
              <Box>
                <Avatar size='xs' ml="20px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"/>
              </Box>
              <Box>
                <Avatar size='xs' ml="20px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter2_colored_svg-256.png"/>
              </Box>
              <Box>
                <Avatar size='xs' ml="20px" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png" />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer