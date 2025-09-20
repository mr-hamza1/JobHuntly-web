"use client"

import { useState } from "react"
import { Box, Stack, Typography, TextField, Button, Chip, InputAdornment, FormControl, Select, MenuItem, Divider } from "@mui/material"
import { Search, LocationOn } from "@mui/icons-material"

const Main = () => {
  const [jobTitle, setJobTitle] = useState("")
  const [location, setLocation] = useState("Florence, Italy")

  const popularTags = ["UI Designer", "UX Researcher", "Android", "Admin"]

  return (
    <Stack  alignItems={"center"}
      sx={{
        width:{xs:"100%", md: "100%" ,lg:"100%"},
        margin: "0 auto",
        padding:{  md:"35px 20px"},
        textAlign: "center",
        pt: {xs:"2.5rem", md:"8rem"},
        pb: {xs:"3.5rem", md:0},
        mt: {xs:"4rem", md:0},
        border:{xs:"1px solid rgba(214, 221, 235, 1)", md:"none"},
        backgroundColor: "rgba(248, 248, 253, 1)",
      }}
    >
      <Stack spacing={4}>
        {/* Header Section */}
        <Stack spacing={2}>
          <Typography  display={{xs:"none", md:"block"}}
            variant="h3"
            sx={{
              fontWeight: 600,
              color: "#333",
              fontSize: { xs: "2rem", md: "48px" },
            }}
          >
            Find your{" "}
            <Box
              component="span"
              sx={{
                color: "rgba(38, 164, 255, 1)",
              }}
            >
              dream job
            </Box>
          </Typography>

          <Typography  display={{xs:"block", md:"none"}}
            variant="h3"
            sx={{
              fontWeight: 600,
              color: "#333",
              fontSize: { xs: "48px", md: "48px" },
            }}
          >
            Find your{" "}
          </Typography>
            <Typography  display={{xs:"block", md:"none"}}
            variant="h3"
            sx={{
              fontWeight: 600,
              color: "rgba(38, 164, 255, 1)",
              fontSize: { xs: "48px", md: "48px" },
            }}
            >
              dream job
            </Typography>

             <Box
                            sx={{
                              width: "75%",          
                              height: "20px",
                              position: "relative",
                              left:{md:230, lg:254},    
                              top: -15,   
                              backgroundImage: `url(/line.png)`,
                              backgroundSize: "contain",      
                              backgroundPosition: "center", 
                              backgroundRepeat: "no-repeat",
                            }}
                            display={{xs:"none", md:"flex"}}
                         />
            

          <Typography
            variant="body1"
            sx={{
              color: "rgba(81, 91, 111, 1)",
              fontSize: "18px",
              fontWeight: 400,
              p: "0 20px",
            }}
          >
            Find your next career at companies like HubSpot, Nike, and Dropbox
          </Typography>
        </Stack>

        {/* Search Section */}
        <Stack   direction={{xs:"column", md:"row"}}  position={{xs:"relative"}} right={{xs:-30, md: 15}}
          sx={{
            gap: "10px",
            flexWrap: { md: "nowrap" },
            width: {xs:"343px", md: "850px",lg:"1120px"},
            height: {xs:"220px", md:"80px"},
            backgroundColor: "rgba(255, 255, 255, 1)"
          }}
        >
          {/* Job Search Input */}
          <TextField
            placeholder="Job title or keyword"
            variant="outlined"
                      sx={{
                        pt: "12px",
                        pl: "16px",
              flex: {md:1},
              minWidth: {xs:"none", md: "300px",lg:"400px"},
              width: {xs:"280px", md:"none"},              
              "& .MuiOutlinedInput-root": {
                height: "56px",
                border: "none",
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
                "& input": {
                  borderBottom: "2px solid #E2E8F0",
                  // paddingBottom: "8px",
                },
                "&.Mui-focused input": {
                  borderBottom: "2px solid #4F46E5",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#9CA3AF" }} />
                </InputAdornment>
              ),
            }}
          />

           <Divider   
             orientation="vertical"
             flexItem
             sx={{
                mt: 2,
                ml: 3,
               height: "50px", // set the length of the divider
               borderColor: "rgba(214, 221, 235, 1)",
               display:{xs:"none", md:"flex"},
             }}
           />
          

          {/* Location Select */}
          <FormControl sx={{ minWidth: {xs:"none",md: "300px",lg:"430px"}, 
            width: {xs:"280px", md:"none"}, pt:{xs: "0", md:"16px" }, pl:{xs: "10px", md:"0" }}} 
          >
            <Select
              defaultValue="florence"
                        sx={{
                height: "56px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiSelect-select": {
                  borderBottom: "2px solid #E2E8F0",
                  paddingBottom: "8px",
                },
                "&.Mui-focused .MuiSelect-select": {
                  borderBottom: "2px solid #4F46E5",
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <LocationOn sx={{ color: "#9CA3AF", marginLeft: "1px" }} />
                </InputAdornment>
              }
            >
              <MenuItem value="florence">Florence, Italy</MenuItem>
              <MenuItem value="rome">Rome, Italy</MenuItem>
              <MenuItem value="milan">Milan, Italy</MenuItem>
            </Select>
          </FormControl>

          {/* Search Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4F46E5",
              color: "white",
              padding: "16px 3px",
              mt:{xs: 0, md:"16px"},
              ml:{xs: 6 , md:0},
              mr: "10px",
              borderRadius: 0,
              fontSize: {md: "0.9rem",lg:"1rem"},
              fontWeight: 600,
              textTransform: "none",
              height: "50px",
              width: {xs: "252px",md: "90px",lg:"160px"},
              "&:hover": { backgroundColor: "#4338CA" },
            }}
          >
            Search
          </Button>
        </Stack>
        {/* Popular Tags */}
        <Box width={"100%"} position={"relative"} top={-15 } pb={6}>
          <Typography sx={{display:{xs: "none", md:"flex"}, fontSize:"16px", fontWeight: 400 , width: "100%", textAlign: "left", color:"rgba(81, 91, 111, 1)" }}>
                   Popular : UI Designer, UX Researcher, Android, Admin
               </Typography>
          <Typography sx={{display:{xs: "flex", md:"none"}, pl:4, fontSize:"16px", fontWeight: 500 ,display:{xs:"flex", md:"none",} ,color: "rgba(81, 91, 111, 1)"}}>
              Popular : 
          </Typography>
          <Typography sx={{display:{xs: "flex", md:"none"},pl:4, fontSize:"16px", fontWeight: 500 , position:"relative", top:8 ,display:{xs:"flex", md:"none"}, color:"rgba(81, 91, 111, 1)"}}>
              UI Designer, UX Researcher, Android, Admin
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )
}

export default Main
