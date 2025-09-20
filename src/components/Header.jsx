"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";

// Custom styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(248, 248, 253, 1)",
  boxShadow: "none",
  borderBottom: "none",
}));

const Logo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "14px",
}));

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
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "244px",
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "#374151",
  textTransform: "none",
  fontSize: "15px",
  fontWeight: "500",
  height: 66,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#4f46e5",
    borderBottom: "2px solid #4f46e5",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "rgba(70, 64, 222, 1)",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "700",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#4f46e5",
  },
}));

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
}));

const Header = ({ bg }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <StyledAppBar sx={{ backgroundColor: bg ? bg : "rgba(248, 248, 253, 1)" }}>
      <Box pl={{ xs: 1, md: "5rem" }} pr={{ xs: 1, md: "5rem" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo + Nav Links */}
          <Stack direction="row" width={"452px"}>
            <Logo
              width={"200px"}
              onClick={() => router.push("/")}
              sx={{ cursor: "pointer" }}
            >
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

            {/* Desktop Navigation */}
            <NavLinks display={{ xs: "none", md: "flex" }}>
              <NavButton href="/search">Find Jobs</NavButton>
              <NavButton href="/companies">Browse Companies</NavButton>
            </NavLinks>
          </Stack>

          {/* Desktop Auth Buttons */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "16px",
              alignItems: "center",
            }}
          >
            <LoginButton>Login</LoginButton>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "rgba(214, 221, 235, 1)" }}
            />
            <SignUpButton variant="contained">Sign Up</SignUpButton>
          </Box>

          {/* Mobile Menu Button */}
          <Box display={{ xs: "flex", md: "none" }}>
            <IconButton
              onClick={handleMenuOpen}
              sx={{
                border: "2px solid #d1d9e6",
                borderRadius: "50%",
                width: 40,
                height: 40,
              }}
            >
              <MenuIcon sx={{ fontSize: 26, color: "#1e2a3a" }} />
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  minWidth: 180,
                  borderRadius: 2,
                  boxShadow: 3,
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  router.push("/search");
                  handleMenuClose();
                }}
              >
                Find Jobs
              </MenuItem>
              <MenuItem
                onClick={() => {
                  router.push("/companies");
                  handleMenuClose();
                }}
              >
                Browse Companies
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </StyledAppBar>
  );
};

export default Header;
