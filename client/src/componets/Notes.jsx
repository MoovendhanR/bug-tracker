import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Grid, Input, Spacer, Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Notes = () => {
const [notes,setNotes]=useState("")
const [data,AllData]=useState([])
const [toggle, setToggle] = useState(true)





function fetchData() {
    fetch("http://localhost:5000/notes",{
    headers:{
      "Authorization":localStorage.getItem("token")
     }
  })
    .then((res)=>res.json())
    .then((res)=>AllData(res.notes))

}

const handleSubmit=(e)=>{
    e.preventDefault()
    const payload = {
      notes
      }

    fetch("http://localhost:5000/notes",{
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
        "Content-type": "application/json",
        "Authorization":localStorage.getItem("token")
        
      }
    }).then((res)=>res.json())
    .then((res)=> fetchData())
    .catch((err)=>console.log(err))
    setToggle(false)
  }
  
  const deleteNotes=(userId)=>{
    fetch(`http://localhost:5000/notes/${userId}`,{
      method: 'DELETE',
      headers: {
        "Authorization":localStorage.getItem("token")
      }
    }).then(()=>fetchData())
  }
  
  useEffect(()=>{
      fetchData()
  },[])
  return (
    <>
    <Center>

    <Grid templateColumns='repeat(4, 1fr)' gap={10}>
    <Box w='200px' h='10' >
      <Flex>
        {/* {toggle && (<Button>report bug</Button>)} */}
        {toggle ? (<Flex> <Input type="text" value={notes} onChange={(e)=>setNotes(e.target.value)} />
    <Button onClick={handleSubmit} ml="5px">add</Button></Flex>):(<Button onClick={()=>setToggle(true)}>report bug</Button>)}
      </Flex>
      <Box>
        {data.map((value)=><Box key={value.id}>
          <Flex boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
          <Text fontSize='xl' h={"40px"} mt={"10px"} mb={"20px"}  p='4' textAlign="center" >{value.notes}</Text>
          <Spacer />
            <Button  p='4'mt={"20px"} onClick={()=>deleteNotes(value._id)}><DeleteIcon/></Button>
          </Flex>
        </Box>)}</Box>
    </Box>
    <Box w='200px' h='10' >
    <Flex>
    <Input type="text" value={notes} onChange={(e)=>setNotes(e.target.value)} />
    <Button onClick={handleSubmit} ml="5px">add</Button>
      </Flex>
    </Box>
    <Box w='200px' h='10' >
    <Flex>
    <Input type="text" value={notes} onChange={(e)=>setNotes(e.target.value)} />
    <Button onClick={handleSubmit} ml="5px">add</Button>
      </Flex>
    </Box>
    <Box w='200px' h='10' >
    <Flex>
    <Input type="text" value={notes} onChange={(e)=>setNotes(e.target.value)} />
    <Button onClick={handleSubmit} ml="5px">add</Button>
      </Flex>
    </Box>
  </Grid>
    </Center>
    </>
  )
}

export default Notes
