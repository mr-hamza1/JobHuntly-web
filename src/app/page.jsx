import Fifth from '@/components/Home/Fifth'
import First from '@/components/Home/First'
import Fourth from '@/components/Home/Fourth'
import MobileFourth from '@/components/Home/MobileFourth'
import Second from '@/components/Home/Second'
import Third from '@/components/Home/Third'
import { Box } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box width={{xs:"350px",md:"100%"}} height={"100%"} overflow={"hidden"} >
        <First />
        <Second />
        <Third />
        <MobileFourth />
        <Fourth />
        <Fifth /> 
    </Box>
  )
}

export default Home