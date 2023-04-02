import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const BugCard = ({_id,notes3,deleteNotes3}) => {
  return (
    <>
      <Box key={_id}>
          <Flex bg={"green"}  mt="1.3rem" color="white" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
          <Text  fontSize='xl' h={"40px"} mt={"10px"} mb={"20px"}  p='4' textAlign="center" >{notes3}</Text>
          <Spacer />
            <Button color={"black"} p='4'mt={"20px"} onClick={()=>deleteNotes3(_id)}><DeleteIcon/></Button>
          </Flex>
        </Box>
    </>
  )
}

export default BugCard
