import Header from '@/components/Header'
import JobSearch from '@/components/Search/JobSearch'
import Main from '@/components/Search/Main'
import PaginationPage from '@/features/PaginationPage'
import { Box} from '@mui/material'
import React from 'react'

const page = () => {
  return (
        <Box width={{xs:"400px",md:"100%"}}  height={"100%"} overflow={"hidden"} >
            <Header bg={"white"} />
            <Main />
            <JobSearch />
            <Box position={"relative"} top={-80} left={600} display={{xs:"none", md:"flex"}}>
             <PaginationPage count={33} page={1} />
             </Box>
            <Box position={"relative"} pt={4} pl={3.5} pb={5} display={{xs:"flex", md:"none"}}>
             <PaginationPage count={33} page={1} />
             </Box>
        </Box>
  )
}

export default page