import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Third = () => {
  return (
        <Box sx={{ mt: "72px", pl:{xs:"4.3rem",md:"6rem"}, pr:"6rem", maxWidth: {xs:"80%",md:"70%"}, 
         mx: "auto", backgroundColor: "rgba(70, 64, 222, 1)" }} height={{xs:"740px",md:"418px"}}>
       <Stack
             width={"364px"}
             spacing={3}
             pt={"4rem"}
           >
             <Typography  display={{xs:"none", md:"flex"}}
               variant="h3"
               sx={{
                 color: 'white',
                 fontWeight: 600,
                 fontSize: { xs: '32px', md: '48px' }
               }}
             >
               Start posting jobs today
             </Typography>
             <Typography  display={{xs:"flex", md:"none"}}
               variant="h3"
               sx={{
                 color: 'white',
                 fontWeight: 600,
                 fontSize: { xs: '32px', md: '48px' }
               }}
             >
               Start posting jobs 
             </Typography>
             <Typography display={{xs:"flex", md:"none"}}
               variant="h3"
               sx={{
                 color: 'white',
                 fontWeight: 600,
                 fontSize: { xs: '32px', md: '48px' },
                 pl:10,
                 position:"relative",
                 top: -10,
               }}
             >
                today
             </Typography>
             
             <Typography
               variant="h6"
               sx={{
                 color: 'rgba(255, 255, 255, 0.9)',
                 fontSize: '16px',
                 fontWeight: 500,
               }}
               pl={{xs:3, md:0}}
             >
               Start posting jobs for only $10.
             </Typography>
             
             <Button
               variant="contained"
               sx={{
                 backgroundColor: 'white',
                 color: '#111827',
                 fontWeight: 500,
                 width: {xs:"354px", md: "200px"},
                 px: "16px",
                 py: "12px",
                 position: "relative",
                 left:{xs: -40,md:0},
                 borderRadius:0,
                  color: "rgba(70, 64, 222, 1)",
                 '&:hover': {
                   backgroundColor: '#f9fafb'
                 }
               }}
             >
               Sign Up for Free
             </Button>
              <Box  display={{xs:"flex", md:"none"}}
         sx={{
           width: "440px",         
           height: "300px",
          //  top: -450,
           left: -40,
           position: "relative",
           backgroundImage: `url(/dashborad.png)`,
           backgroundSize: "contain",      
           backgroundPosition: "center", 
           backgroundRepeat: "no-repeat",
         }}
      />
        </Stack>
       <Box
        sx={{
          width: "150px",
          height: "100px",
          position:"relative",
          top: {xs: -655 ,md:-320},
          left: {xs: -96 ,md: -96},
          background: "linear-gradient(-20deg, rgba(70, 64, 222, 1)  50%, #FFFFFF 50%)",
        }}
      />
             <Box
        sx={{
          width: "300px",
          height: "120px",
          position:"relative",
          border: "none",
          top:  {xs:-113, md:-100},
          right: {xs:-100, md:-787},
          background: "linear-gradient(-30deg, #FFFFFF   50%,  rgba(70, 64, 222, 1) 50%)",

        }}
      />
       <Box display={{xs:"none", md:"flex"}}
         sx={{
           width: "564px",         
           height: "354px",
           top: -450,
           right: -386,
           position: "relative",
           backgroundImage: `url(/dashborad.png)`,
           backgroundSize: "contain",      
           backgroundPosition: "center", 
           backgroundRepeat: "no-repeat",
         }}
      />
      
  </Box>

  )
}

export default Third