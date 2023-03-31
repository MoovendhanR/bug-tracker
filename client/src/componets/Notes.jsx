import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Grid, Input, Spacer, Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Notes = () => {
const [notes,setNotes]=useState("")
const [data,AllData]=useState([])

const [notes1,setNotes1]=useState("")
const [data1,AllData1]=useState([])

const [notes2,setNotes2]=useState("")
const [data2,AllData2]=useState([])

const [notes3,setNotes3]=useState("")
const [data3,AllData3]=useState([])

const [toggle, setToggle] = useState(false)
const [toggle1, setToggle1] = useState(false)
const [toggle2, setToggle2] = useState(false)
const [toggle3, setToggle3] = useState(false)




//1
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




//2

function fetchData1() {
  fetch("http://localhost:5000/notes1",{
  headers:{
    "Authorization":localStorage.getItem("token")
   }
})
  .then((res)=>res.json())
  .then((res)=>AllData1(res.notes))

}

const handleSubmit1=(e)=>{
  e.preventDefault()
  const payload1 = {
    notes1
    }

  fetch("http://localhost:5000/notes1",{
    method:"POST",
    body:JSON.stringify(payload1),
    headers:{
      "Content-type": "application/json",
      "Authorization":localStorage.getItem("token")   
    }
  }).then((res)=>res.json())
  .then((res)=> fetchData1())
  .catch((err)=>console.log(err.message))
  setToggle1(false)
}

const deleteNotes1=(userId)=>{
  fetch(`http://localhost:5000/notes1/${userId}`,{
    method: 'DELETE',
    headers: {
      "Authorization":localStorage.getItem("token")
    }
  }).then(()=>fetchData1())
}

useEffect(()=>{
    fetchData1()
},[])


//3

function fetchData2() {
  fetch("http://localhost:5000/notes2",{
  headers:{
    "Authorization":localStorage.getItem("token")
   }
})
  .then((res)=>res.json())
  .then((res)=>AllData2(res.notes))

}

const handleSubmit2=(e)=>{
  e.preventDefault()
  const payload = {
    notes2
    }

  fetch("http://localhost:5000/notes2",{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
      "Content-type": "application/json",
      "Authorization":localStorage.getItem("token")
      
    }
  }).then((res)=>res.json())
  .then((res)=> fetchData2())
  .catch((err)=>console.log(err))
  setToggle2(false)
}

const deleteNotes2=(userId)=>{
  fetch(`http://localhost:5000/notes2/${userId}`,{
    method: 'DELETE',
    headers: {
      "Authorization":localStorage.getItem("token")
    }
  }).then(()=>fetchData2())
}

useEffect(()=>{
    fetchData2()
},[])


function fetchData3() {
  fetch("http://localhost:5000/notes3",{
  headers:{
    "Authorization":localStorage.getItem("token")
   }
})
  .then((res)=>res.json())
  .then((res)=>AllData3(res.notes))

}

const handleSubmit3=(e)=>{
  e.preventDefault()
  const payload = {
    notes3
    }

  fetch("http://localhost:5000/notes3",{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
      "Content-type": "application/json",
      "Authorization":localStorage.getItem("token")
      
    }
  }).then((res)=>res.json())
  .then((res)=> fetchData3())
  .catch((err)=>console.log(err))
  setToggle3(false)
}

const deleteNotes3=(userId)=>{
  fetch(`http://localhost:5000/notes3/${userId}`,{
    method: 'DELETE',
    headers: {
      "Authorization":localStorage.getItem("token")
    }
  }).then(()=>fetchData3())
}

useEffect(()=>{
    fetchData3()
},[])





  return (
    <>
    <Center>

    <Grid templateColumns='repeat(4, 1fr)' gap={10}>
    <Box w='200px' h='10' >
    
      <Flex>

        {/* 11 */}
        {/* {toggle && (<Button>report bug</Button>)} */}
        {toggle ? (<Flex> <Input type="text" value={notes} onChange={(e)=>setNotes(e.target.value)} />
    <Button onClick={handleSubmit} ml="5px">add</Button></Flex>):(<Button colorScheme='teal' onClick={()=>setToggle(true)}>report bug</Button>)}
      </Flex>
      <Box>
      <Flex bg={"red"} color="white" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
          <Text fontSize='xl' h={"40px"} mt={"10px"} mb={"20px"}  p='4' textAlign="center"  >Critical Severity</Text>
          <Spacer />
          </Flex>
        {data.map((value)=><Box key={value.id}>
          <Flex bg={"red"}  mt="1.3rem" color="white" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
          <Text fontSize='xl' h={"40px"} mt={"10px"} mb={"20px"}  p='4' textAlign="center" >{value.notes}</Text>
          <Spacer />
            <Button color={"black"}  p='4'mt={"20px"} onClick={()=>deleteNotes(value._id)}><DeleteIcon/></Button>
          </Flex>
        </Box>)}</Box>
    </Box>
    <Box w='200px' h='10' >
    <Flex>
      {/* 22 */}
        {/* {toggle && (<Button>report bug</Button>)} */}
        {toggle1 ? (<Flex> <Input type="text" value={notes1} onChange={(e)=>setNotes1(e.target.value)} />
    <Button onClick={handleSubmit1} ml="5px">add</Button></Flex>):(<Button colorScheme='teal' onClick={()=>setToggle1(true)}>report bug</Button>)}
      </Flex>
      <Box>
      <Flex bg={"yellow"} color="grey" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
          <Text fontSize='xl' h={"40px"} mt={"10px"} mb={"20px"}  p='4' textAlign="center" >Major severity</Text>
          <Spacer />
          </Flex>
        {data1.map((value)=><Box key={value.id}>
          <Flex bg={"yellow"}  mt="1.3rem" color="grey" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
          <Text fontSize='xl' h={"40px"} mt={"10px"} mb={"20px"}  p='4' textAlign="center" >{value.notes1}</Text>
          <Spacer />
            <Button color={"black"} p='4'mt={"20px"} onClick={()=>deleteNotes1(value._id)}><DeleteIcon/></Button>
          </Flex>
        </Box>)}</Box>
    </Box>
    <Box w='200px' h='10' >
    <Flex>
      {/* 33 */}
        {/* {toggle && (<Button>report bug</Button>)} */}
        {toggle2 ? (<Flex> <Input type="text" value={notes2} onChange={(e)=>setNotes2(e.target.value)} />
    <Button onClick={handleSubmit2} ml="5px">add</Button></Flex>):( <Flex flexDirection="row-reverse"><Button colorScheme='teal'  onClick={()=>setToggle2(true)}>report bug</Button></Flex>)}
      </Flex>
      <Box>
      <Flex bg={"blue"} color="white" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
          <Text fontSize='xl' h={"40px"} mt={"10px"} mb={"20px"}  p='4' textAlign="center"  >Medium Severity</Text>
          <Spacer />
          </Flex>
        {data2.map((value)=><Box key={value.id}>
          <Flex bg={"blue"} color="white" mt="1.3rem" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
          <Text fontSize='xl' h={"40px"} mt={"10px"} mb={"20px"}  p='4' textAlign="center" >{value.notes2}</Text>
          <Spacer />
            <Button color={"black"} p='4'mt={"20px"} onClick={()=>deleteNotes2(value._id)}><DeleteIcon/></Button>
          </Flex>
        </Box>)}</Box>
    </Box>
    <Box w='200px' h='10' >
    <Flex>
      {/* 44 */}
        {/* {toggle && (<Button>report bug</Button>)} */}
        {toggle3 ? (<Flex> <Input type="text" value={notes3} onChange={(e)=>setNotes3(e.target.value)} />
    <Button onClick={handleSubmit3} ml="5px">add</Button></Flex>):(<Button colorScheme='teal' onClick={()=>setToggle3(true)}>report bug</Button>)}
      </Flex>
      <Box>
      <Flex bg={"green"} color="white" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
          <Text fontSize='xl' h={"40px"} mt={"10px"} mb={"20px"}  p='4' textAlign="center" >Low Severity</Text>
          <Spacer />
          </Flex>
        {data3.map((value)=><Box key={value.id}>
          <Flex bg={"green"}  mt="1.3rem" color="white" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
          <Text  fontSize='xl' h={"40px"} mt={"10px"} mb={"20px"}  p='4' textAlign="center" >{value.notes3}</Text>
          <Spacer />
            <Button color={"black"} p='4'mt={"20px"} onClick={()=>deleteNotes3(value._id)}><DeleteIcon/></Button>
          </Flex>
        </Box>)}</Box>
    </Box>
  </Grid>
    </Center>
    </>
  )
}

export default Notes
