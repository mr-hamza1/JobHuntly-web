 "use client"
import React, { useRef } from "react";
import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import { ArrowForward, } from "@mui/icons-material";

const jobPostings = [
  {
    id: "1",
    title: "Email Marketing",
    company: "Revolut",
    location: "Medical, Spain",
    description: "Revolut is looking for Email Marketing to help team ma...",
    logo: "R",
    logoColor: "#000",
    category: "Marketing",
    categoryColor: "#FF6B35",
  },
  {
    id: "2",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t...",
    logo: "📦",
    logoColor: "#0061FF",
    category: "Design",
    categoryColor: "#00D4AA",
  },
  {
    id: "3",
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t...",
    logo: "●",
    logoColor: "#000",
    category: "Marketing",
    categoryColor: "#FF6B35",
  },
  {
    id: "4",
    title: "Visual Designer",
    company: "Blinklist",
    location: "Ormonds, Spain",
    description: "Blinklist is looking for Visual Designer to help team des...",
    logo: "●",
    logoColor: "#00C896",
    category: "Design",
    categoryColor: "#00D4AA",
  },
  {
    id: "5",
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    logo: "🔵",
    logoColor: "#1976D2",
    category: "Design",
    categoryColor: "#00D4AA",
  },
  {
    id: "6",
    title: "Lead Designer",
    company: "Canva",
    location: "Winter, Ormonds",
    description: "Canva is looking for Lead Engineer to help develop n...",
    logo: "🎨",
    logoColor: "#00C4CC",
    category: "Design",
    categoryColor: "#00D4AA",
  },
  {
    id: "7",
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    logo: "🌐",
    logoColor: "#000",
    category: "Marketing",
    categoryColor: "#FF6B35",
  },
  {
    id: "8",
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team deci...",
    logo: "🐦",
    logoColor: "#1DA1F2",
    category: "Technology",
    categoryColor: "#6366F1",
  },
];

export default function MobileFourth() {
  const sliderRef = useRef(null);

  return (
    <Stack direction={"column"} width={"100%"}>
    <Box sx={{ pt: 8, pr: { xs: 0, md: "6.5rem" }, pl: { xs: 3, md: "6.5rem" }, display:{xs:"block",md:"none"} }}>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          Featured{" "}
          <Box component="span" sx={{ color: "#6366F1" }}>
            jobs
          </Box>
        </Typography>
      </Stack>

   

      {/* Horizontal Slider */}
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Chrome
        }}
      >
        {jobPostings.map((job) => (
          <Card
            key={job.id}
            sx={{
              width: "290px",
              flex: "0 0 auto",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "none",
              borderRadius: 0,
              scrollSnapAlign: "start",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <CardContent sx={{ p: 3, height: "100%" }}>
              <Stack spacing={2} sx={{ height: "100%" }}>
                {/* Header */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: job.logoColor,
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    {job.logo}
                  </Avatar>

                  <Chip
                    label="Full Time"
                    size="small"
                    sx={{
                      bgcolor: "#FFFFFF",
                      color: "rgba(70, 64, 222, 1)",
                      fontSize: "0.75rem",
                      border: "1px solid rgba(70, 64, 222, 1)",
                      height: 35,
                      borderRadius: 0,
                      "& .MuiChip-label": {
                        px: 2,
                      },
                    }}
                  />
                </Stack>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    color: "text.primary",
                  }}
                >
                  {job.title}
                </Typography>

                {/* Company & Location */}
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", fontSize: "0.875rem" }}
                >
                  {job.company} • {job.location}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", fontSize: "0.875rem" }}
                >
                  {job.description}
                </Typography>

                {/* Category */}
                <Box>
                  <Chip
                    label={job.category}
                    size="small"
                    sx={{
                      bgcolor: `${job.categoryColor}15`,
                      color: job.categoryColor,
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      height: 28,
                      "& .MuiChip-label": {
                        px: 1.5,
                      },
                    }}
                  />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
   <MuiLink pl={3} pt={3}
          href="#"
          sx={{
            display: {xs:"flex", md:"none"},
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: "rgba(70, 64, 222, 1)",
            fontWeight: 600,
            fontSize: "16px",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Show all jobs
          <ArrowForward sx={{ fontSize: 16 }} />
        </MuiLink>
     </Stack>
  );
}
