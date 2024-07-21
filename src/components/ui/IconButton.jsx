import { Box, Button } from '@chakra-ui/react';
import React from 'react';

const IconButton = ({Icon, clickHandler}) => {
  return ( 
    <Box
      as='button'
      onClick={clickHandler} 
    >
      {Icon}
    </Box>
  );
}

export default IconButton;