import React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme, } from '@chakra-ui/react'
import { StepsTheme as Steps } from "chakra-ui-steps";
import Layouts from './Constants/Layouts';
const theme = extendTheme({
  components: {
    Steps,
  },
});


const App = () => {

  return (
    
    <ChakraProvider theme={theme}>
      <Layouts />
    </ChakraProvider>
  )
}

export default App