"use client";
import { AppBar, Toolbar, Typography, Button, Box, Stack, Divider, IconButton} from "@mui/material"
import { styled } from "@mui/material/styles"
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";

// Custom styled components to match the design
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(248, 248, 253, 1)",
  boxShadow: "none",
  borderBottom: "none",
  width: {xs:"100%",md: "none"},
}))

const Logo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "14px",
}))

const LogoIcon = styled(Box)(({ theme }) => ({
  width: "32px",
  height: "32px",
  backgroundColor: "#4f46e5",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
}))

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width:"244px",
 
}))

const NavButton = styled(Button)(({ theme }) => ({
  color: "#374151",
  textTransform: "none",
  fontSize: "15px",
  fontWeight: "500",
  height: 66,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#4f46e5",
    borderBottom: "2px solid #4f46e5"

  },
}))

const LoginButton = styled(Button)(({ theme }) => ({
  color: "rgba(70, 64, 222, 1)",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "700",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#4f46e5",
  },
}))

const SignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(70, 64, 222, 1)",
  color: "white",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "700",
  padding: "8px 24px",
  borderRadius: 0,
  "&:hover": {
    backgroundColor: "#4338ca",
  },
}))

const Header = ({bg}) => {
    const router = useRouter();

  return (
    <StyledAppBar  sx={{backgroundColor: bg? bg : "rgba(248, 248, 253, 1)"}}  >
      <Box width={{  md:"100%vw", lg: "100%vw"}}  pl={{xs:1, md:"5rem"}} pr={{xs:"none", md:"5rem"}} >
        <Toolbar sx={{ justifyContent: "space-between",}}>
          {/* Logo Section */}
         <Stack direction={"row"} width={"452px"} >
          <Logo width={"200px"} onClick={() => router.push("/")} sx={{cursor:"pointer"}}>
            <LogoIcon>J</LogoIcon>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                color: "#111827",
                fontSize: "24px",
              }}
            >
              JobHuntly
            </Typography>
          </Logo>

          {/* Navigation Links */}
          <NavLinks  display={{xs:"none", md:"flex"}} >
            <NavButton href="/search" >Find Jobs</NavButton>
            <NavButton href="/companies"  >Browse Companies</NavButton>
          </NavLinks>
          </Stack>

          {/* Auth Buttons */}
          <Box sx={{ display: {xs:"none", md:"flex"}, gap: "16px", alignItems: "center" }}>
            <LoginButton>Login</LoginButton>
            <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(214, 221, 235, 1)" }}  />
            <SignUpButton variant="contained" >Sign Up</SignUpButton>
          </Box>

    <Box   display={{xs:"flex", md:"none"}}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        sx={{
          border: "2px solid #d1d9e6", // light grey border
          borderRadius: "50%",         // makes it circular
          width: 40,
          height: 40,
        }}
      >
        <MenuIcon sx={{ fontSize: 26, color: "#1e2a3a" }} />
      </IconButton>
    </Box>
        </Toolbar>
      </Box>
    </StyledAppBar>
  )
}

export default Header
