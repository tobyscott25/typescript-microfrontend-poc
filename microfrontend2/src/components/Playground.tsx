// This is only used for independent development of the microfrontend.

import { FunctionComponent } from 'react';
import AppRoot from './AppRoot';
import { Box, Text, Code } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const PlaygroundContainer: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Box textAlign={'center'}>
        <Text fontSize={'2xl'} my={5}>PLAYGROUND CONTAINER (DUMMY HOST)</Text>
        <Text>The JS bundle is being served from this host at <Code>/remoteEntry.js</Code></Text>
      
        <Box border={'1px solid black'} shadow={'lg'} rounded={'lg'} mx={'300px'} my={5}>
          <AppRoot />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default PlaygroundContainer;
