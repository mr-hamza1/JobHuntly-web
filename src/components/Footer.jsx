import React from "react";
import { Box, Stack, Typography, TextField, Button, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2C3E50", // Dark blue-gray background
        color: "white",
        py: 6,
        px: 4,
        pl: {md:14},
        pr: {md:6},
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ width:{xs:"600px",md:"100%"}, mx: "auto" }}>
        {/* Left Section - Logo and Description */}
        <Box sx={{width:"350px"}} >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                backgroundColor: "#4F46E5", // Purple circle for logo
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" sx={{ color: "white", fontWeight: "bold", fontSize: "12px" }}>
                J
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              JobHuntly
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: "#B0BEC5", lineHeight: 1.6, maxWidth: "280px" }}>
            Great platform for the job seeker that passionate about startups. Find your dream job easier.
          </Typography>
        </Box>

        {/* Middle Sections - Links */}
        <Stack direction={{ xs: "row", sm: "row" }} spacing={4} sx={{ flex: 2 }}>
          {/* About Column */}
          <Box sx={{ minWidth: "190px" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              About
            </Typography>
            <Stack spacing={1}>
              {["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: "#B0BEC5",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Resources Column */}
          <Box sx={{ minWidth: "120px" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              Resources
            </Typography>
            <Stack spacing={1}>
              {["Help Docs", "Guide", "Updates", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: "#B0BEC5",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Box>
        </Stack>

        {/* Right Section - Newsletter Signup */}
        <Box sx={{ flex: 1, minWidth: "340px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Get job notifications
          </Typography>
          <Typography variant="body2" sx={{ color: "#B0BEC5", mb: 2, fontSize: "14px" }}>
            The latest job news, articles, sent to your inbox weekly.
          </Typography>
          <Stack direction="row" spacing={1}>
            <TextField
              placeholder="Email Address"
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                width:400,

                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#FFFFFF",
                  color: "white",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#4F46E5",
                  },
                },
                "& .MuiOutlinedInput-input::placeholder": {
                  color: "#B0BEC5",
                  opacity: 1,
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(70, 64, 222, 1)",
                color: "white",
                px: 2,
                "&:hover": {
                  backgroundColor: "#4338CA",
                },
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Stack>

      {/* Bottom Section - Copyright and Social */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          mt: 4,
          pt: 3,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="body2" sx={{ color: "#B0BEC5", fontSize: "14px" }}>
            2021 © JobHuntly. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1}>
            {[
              { icon: Facebook, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: LinkedIn, href: "#" },
              { icon: YouTube, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((social, index) => (
              <IconButton
                key={index}
                href={social.href}
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#363a45",
                  "&:hover": {
                    color: "white",
                  },
                }}
                size="small"
                
              >
                <social.icon fontSize="small" />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
