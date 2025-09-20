import React from "react";
import { Box, Stack, Typography, Grid, Card, CardContent, Chip, Avatar, Link, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const jobsData = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: "🏢",
    logoColor: "#10B981",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 2,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    logo: "💎",
    logoColor: "#06B6D4",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 3,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    logo: "📦",
    logoColor: "#3B82F6",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 4,
    title: "Brand Designer",
    company: "Maze",
    location: "San Francisco, USA",
    logo: "🔵",
    logoColor: "#1E40AF",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 5,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: "🔧",
    logoColor: "#06B6D4",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 6,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    logo: "🎓",
    logoColor: "#06B6D4",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 7,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    logo: "📊",
    logoColor: "#EF4444",
    tags: ["Full Time", "Marketing", "Design"],
  },
  {
    id: 8,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    logo: "W",
    logoColor: "#8B5CF6",
    tags: ["Full Time", "Marketing", "Design"],
  },
];

const getTagColor = (tag) => {
  switch (tag) {
    case "Full Time":
      return { backgroundColor: "rgba(86, 205, 173, 0.1)", color: "rgba(86, 205, 173, 1)",                            border: "none",
 };
    case "Marketing":
      return { backgroundColor: "white", color: "rgba(255, 184, 54, 1)", border:"1px solid rgba(255, 184, 54, 1)" };
    case "Design":
      return { backgroundColor: "white", color: "rgba(70, 64, 222, 1)", border:"1px solid rgba(70, 64, 222, 1)" };
    default:
      return { backgroundColor: "#F3F4F6", color: "#374151" };
  }
};

const Fifth = () => {
  return (
    <Box width={"100%"} height={"867px"} bgcolor={"rgba(248, 248, 253, 1)"} mt={"4rem"}  >
          <Box
              sx={{
                width: "120px",
                height: "120px",
                position:"relative",
                top: -32,
                left: 0,
                background: "linear-gradient(-25deg, rgba(248, 248, 253, 1)50%, #FFFFFF 50%)",
              }}
            />
             <Box            
               display={{xs:"none", md:"flex"}}
               component="svg"
               width="190"
               height="190"
               sx={{
                 position: "relative",
                 right: -900,
                 top: -120,
               }}
             >
               {/* Triangle fill only, no border */}
               <polygon
                 points="0,0 160,0 0,120"
                 fill="rgba(248, 248, 253, 1)"   // gray fill
                 stroke="none"
               />
             
               {/* Perpendicular line (left side) */}
               <line
                 x1="0" y1="0"
                 x2="0" y2="120"
                 stroke="rgba(204, 204, 245, 1)"
                 strokeWidth="5"
               />
             
               {/* Hypotenuse line */}
               <line
                 x1="0" y1="120"
                 x2="190" y2="0"
                 stroke="rgba(204, 204, 245, 1)"
                 strokeWidth="3"
               />
             </Box>
             
             <Box
               display={{xs:"none", md:"flex"}}
               component="svg"
               width="160"
               height="120"
               sx={{
                 position: "relative",
                 right: -550,
                 top: 626,
               }}
             >
               {/* Triangle body (fill only, no border) */}
               <polygon
                 points="160,0 160,120 0,120"
                 fill="rgba(248, 248, 253, 1)"
                 stroke="none"
               />
             
               {/* Perpendicular (right edge) */}
               <line
                 x1="160" y1="0"
                 x2="160" y2="120"
                 stroke="rgba(204, 204, 245, 1)"
                 strokeWidth="3"
               />
             
               {/* Hypotenuse */}
               <line
                 x1="160" y1="0"
                 x2="0" y2="120"
                 stroke="rgba(204, 204, 245, 1)"
                 strokeWidth="3"
               />
             </Box>

   {/* the main content */}

  <Box  position={"relative"} top={{xs:-30, md:-350}} >
     <Container maxWidth="lg" >
      <Stack spacing={4}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold" color="text.primary">
            Latest{" "}
            <Typography component="span" variant="h4" fontWeight="bold" color="rgba(38, 164, 255, 1)">
              jobs open
            </Typography>
          </Typography>
          <Link         
            display={{xs:"none", md:"flex"}}
            href="#"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "primary.main",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Show all jobs
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </Box>

        {/* Jobs Grid */}
        <Grid container spacing={3}>
          {jobsData.map((job) => (
            <Grid item xs={12} md={3} lg={3} key={job.id} ml={1} >
              <Card
                sx={{
                  p: 3,
                  pb:0,
                  borderRadius:0,
                  height: {xs:"190px", md:"120px"},
                  width: {xs:"315px", md:"500px"},
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  <Stack spacing={2}>
                    {/* Company Logo and Job Title */}
                    <Box display="flex" alignItems="flex-start" gap={2}>
                      <Avatar
                        sx={{
                          width: 48,
                          height: 48,
                          backgroundColor: job.logoColor,
                          fontSize: "1.25rem",
                        }}
                      >
                        {job.logo}
                      </Avatar>

                      
                    <Box flex={1} display={{xs: "none", md:"block"}}>
                        <Typography variant="h6" fontWeight="600" color="text.primary" mb={0.5}>
                          {job.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {job.company} • {job.location}
                        </Typography>
                      </Box>
                      
                    </Box>

                    <Box flex={1} display={{xs: "block", md:"none"}} pt={1}>
                        <Typography variant="h6" fontWeight="600" color="text.primary" mb={0.5}>
                          {job.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {job.company} • {job.location}
                        </Typography>
                      </Box>

                    {/* Tags */}
                    <Box display="flex" gap={1} flexWrap="wrap" pl={{xs:0,md:8}}>
                      {job.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          sx={{
                            ...getTagColor(tag),
                            fontWeight: 500,
                            fontSize: "0.75rem",
                            height: 24,
                          }}
                        />
                      ))}
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>

    </Box>
  );
};

export default Fifth;


