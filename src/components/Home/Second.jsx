"use client"

import React from "react"
import { Box, Typography, Grid, Card, CardContent, Link, IconButton, useTheme, Stack } from "@mui/material"
import {
  Palette as DesignIcon,
  TrendingUp as SalesIcon,
  Campaign as MarketingIcon,
  AccountBalance as FinanceIcon,
  Computer as TechnologyIcon,
  Engineering as EngineeringIcon,
  Business as BusinessIcon,
  People as HRIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material"

const categories = [
  { id: "design", name: "Design", jobCount: 235, icon: <DesignIcon /> },
  { id: "sales", name: "Sales", jobCount: 756, icon: <SalesIcon /> },
  { id: "marketing", name: "Marketing", jobCount: 160, icon: <MarketingIcon />, highlighted: true },
  { id: "finance", name: "Finance", jobCount: 325, icon: <FinanceIcon /> },
  { id: "technology", name: "Technology", jobCount: 436, icon: <TechnologyIcon /> },
  { id: "engineering", name: "Engineering", jobCount: 542, icon: <EngineeringIcon /> },
  { id: "business", name: "Business", jobCount: 211, icon: <BusinessIcon /> },
  { id: "hr", name: "Human Resource", jobCount: 345, icon: <HRIcon /> },
]

export default function Second() {
  const theme = useTheme()

  return (
    <Box sx={{ pt: {xs:0, md:"72px"}, pl:{xs:4, md:"6rem"}, pr:{xs:0, md:"6rem"}, maxWidth: 1200, mx: "auto" }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Explore by{" "}
          <Typography component="span" variant="h4" sx={{ color: "rgba(38, 164, 255, 1)", fontWeight: 600 }}>
            category
          </Typography>
        </Typography>

        <Link
          href="#"
          sx={{
            display: {xs:"none", md:"flex"},
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: "rgba(70, 64, 222, 1)",
            fontWeight: 500,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Show all jobs
          <ArrowIcon sx={{ fontSize: 16 }} />
        </Link>
      </Box>

      {/* Category Grid */}
      <Grid container spacing={{xs:2.5, md:4}} >
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={category.id}>
            <Card
              sx={{
                height: {xs:"90%", md:"100%"},
                width: {xs:"320px", md: "260px"},
                cursor: "pointer",
                borderRadius: 0,
                boxShadow: "none",
                border: "1px solid rgba(214, 221, 235, 1)",
                backgroundColor: "white",
                color: theme.palette.text.primary,
                "&:hover": { transform: "translateY(-2px)", boxShadow: theme.shadows[4],
                  backgroundColor:"rgba(70, 64, 222, 1)",
                  border: "1px solid rgba(70, 64, 222, 1)",

                 },
              }}
            >
              <CardContent sx={{ p: 3 }} >
                <Stack direction={{xs:"row", md: "column"}} gap={{xs:2, md:0}}>
                                  <Box sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      p: 1,
                      backgroundColor: "white",
                      color:"rgba(70, 64, 222, 1)",
                      ":hover":{
                        color:  "white",
                        backgroundColor:"rgba(70, 64, 222, 1)",
                      }
                    }}
                  >
                    {category.icon}
                  </Box>
                </Box>

                   <Box>
                    
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1, color: "inherit",":hover":{
                        color: "white"
                      } }}>
                  {category.name}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      ":hover":{
                        color: "white"
                      }
                    }}
                  >
                    {category.jobCount} jobs available
                  </Typography>

                  <IconButton
                    size="small"
                    sx={{
                      color: theme.palette.text.secondary,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                          color: "white"
                      },
                    }}
                  >
                    <ArrowIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                </Box>
                   </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Link
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
          <ArrowIcon sx={{ fontSize: 16 }} />
        </Link>
      </Grid>
    </Box>
  )
}
