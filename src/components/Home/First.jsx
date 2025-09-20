import { Box, Stack, Typography, TextField, Button, InputAdornment, MenuItem, Select, FormControl } from "@mui/material";
import { Search, LocationOn } from "@mui/icons-material";
import React from 'react';

const First = () => {
  return (
    <Stack mt={{xs:5,md:8}} width={"100%"} sx={{backgroundColor: "rgba(248, 248, 253, 1)"}} overflow={"hidden"}>
      <Stack pb={{xs:"1.5rem",md:"5rem"}}
        width={{ xs: "100%", md: "629px" }}
        pl={{ xs: 3, md: "6rem" }}
        pt="70px"
        pr={{xs:"1rem",md:0}}
        spacing={3}
      >
        {/* Headings */}
        <Stack spacing={-1}>
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "72px" },
              fontWeight: 600,
              lineHeight: 1.1, 
            }}
          >
            Discover
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "72px" },
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            more than
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "48px", md: "72px" },
              fontWeight: 600,
              lineHeight: 1.1,
              color: "rgba(38, 164, 255, 1)",
            }}
          >
            5000+ Jobs
          </Typography>
        </Stack>
          
          <Box
                sx={{
                  width: "75%",          
                  height: "38px",
                  position: "relative",
                  left:-30,    
                  top: -20,   
                  backgroundImage: `url(/line.png)`,
                  backgroundSize: "contain",      
                  backgroundPosition: "center", 
                  backgroundRepeat: "no-repeat",
                }}
                display={{xs:"none", md:"flex"}}
             />


        {/* Subtitle */}
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            opacity: 0.7,
          }}
        >
          Great platform for the job seeker that is searching for new career heights and passionate about startups.
        </Typography>

        {/* Search Section */}
        <Stack direction={{xs:"column", md:"row"}}  
          sx={{
            gap: "10px",
            flexWrap: {  md: "nowrap" },
            width: {xs:"343px", md:"800px",lg:"852px"},
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
              minWidth: {xs:"none",  md:"285px",lg:"305px"},
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

          {/* Location Select */}
          <FormControl sx={{  
              minWidth: {xs:"none", md:"285px",lg:"305px"},
              width: {xs:"280px", md:"none"}, pt:{xs: "0", md:"16px" }, pl:{xs: "10px", md:"0" }}} >
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
                  <LocationOn sx={{ color: "#9CA3AF", marginLeft: "8px" }} />
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
              padding: "16px 32px",
              mt:{xs: 0, md:"16px"},
              ml:{xs: 6 , md:0},
              mr: "10px",
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              minWidth: {xs: "none",md:"160px"},
              width: {xs: "252px",md:"none"},
              height: "51px",
              borderRadius: 0,
              "&:hover": { backgroundColor: "#4338CA" },
            }}
          >
            Search my job
          </Button>
        </Stack>
        <Typography sx={{fontSize:"16px", fontWeight: 500 , display:{xs:"none", md:"flex"}}}>
            Popular : UI Designer, UX Researcher, Android, Admin
        </Typography>
        <Typography sx={{fontSize:"16px", fontWeight: 500 ,display:{xs:"flex", md:"none",} ,color: "rgba(32, 36, 48, 1)"}}>
            Popular : 
        </Typography>
        <Typography sx={{fontSize:"16px", fontWeight: 500 , position:"relative", top:-15 ,display:{xs:"flex", md:"none"}, color:"rgba(32, 36, 48, 1)"}}>
            UI Designer, UX Researcher, Android, Admin
        </Typography>
        <Box display={{xs:"none", md:"flex"}}
        sx={{
          width: { md:"200px", lg:"300px"},
          height: { md:"261px", lg:"200px"},
          position:"absolute",
          top: 523,
          right: 0,
          background: "linear-gradient(-30deg, #FFFFFF 50%, rgba(248, 248, 253, 1) 50%)",
        }}
      />

      </Stack>

     <Stack width={"100%"} sx={{backgroundColor: "rgba(255, 255, 255, 1)"}}   
         pl={{ xs: 2, md: "6rem" }}
         pt={"50px"}
         display={{xs:"none", md:"flex"}}
        >
              <Typography sx={{fontSize: "18px", fontWeight: "400", color:"#757575"}}>
                  Companies we helped grow
              </Typography>
             <Box
                sx={{
                  width: "90%",          
                  height: "100px",
                  position: "relative",
                  left:-30,       
                  backgroundImage: `url(/companies.png)`,
                  backgroundSize: "contain",      
                  backgroundPosition: "center", 
                  backgroundRepeat: "no-repeat",
                }}
             />
         </Stack>
     <Stack width={"100%"} sx={{backgroundColor: "rgba(255, 255, 255, 1)"}}   
         pl={{ xs: 4, md: "6rem" }}
         pt={"50px"}
         display={{xs:"flex", md:"none"}}
        >
              <Typography sx={{fontSize: "18px", fontWeight: "400", color:"#757575"}}>
                  Companies we helped grow
              </Typography>
             <Box
                sx={{
                  width: "90%",          
                  height: "330px",
                  position: "relative",
                  left:{xs: -8, md:-30}, 
                  postion: "relative",
                  top: -35,      
                  backgroundImage: `url(/mobileCom.png)`,
                  backgroundSize: "contain",      
                  backgroundPosition: "center", 
                  backgroundRepeat: "no-repeat",
                }}
             />
         </Stack>
    </Stack>
  );
};

export default First;
