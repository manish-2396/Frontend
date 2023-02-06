import { Box } from '@chakra-ui/react'
import React from 'react'
import Body from '../Components/Body'
import Body1 from '../Components/Body1'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Header1 from '../Components/Header1'


const Type = ({Type}) => {

  

  return (
    <Box backgroundColor="#f8fbfe">
        <Header Type={Type} />
        <Header1 Type={Type} />
        <Body Type={Type} />
        <Body1 Type={Type} />
        <Footer Type={Type} />
    </Box>
  )
}

export default Type