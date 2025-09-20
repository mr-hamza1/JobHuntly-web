import CompaniesCard from '@/components/companies/CompaniesCard'
import CompaniesMain from '@/components/companies/CompaniesMain'
import LastJobs from '@/components/companies/LastJobs'
import Header from '@/components/Header'
import Third from '@/components/Home/Third'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
        <Box width={"100%"} height={"100%"} overflow={"hidden"} >
            <Header bg={"white"} />
            <CompaniesMain />
            <CompaniesCard />
            <Third />
            <LastJobs />
        </Box>
  )
}

export default page