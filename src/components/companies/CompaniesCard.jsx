import { Box, Card, CardContent, Typography, Grid, Chip, Avatar, Container, Stack } from "@mui/material"

const CompaniesCard = () => {
  const companies = [
    {
      id: 1,
      name: "Nomad",
      logo: "🏠",
      backgroundColor: "#4ECDC4",
      jobs: 3,
      description: "Nomad is located in Paris, France. Nomad has generated $78,000 in sales (USD).",
      tags: ["Business Service"],
    },
    {
      id: 2,
      name: "Discord",
      logo: "💬",
      backgroundColor: "#5865F2",
      jobs: 3,
      description: "We'd love to work with someone like you. We care about creating a delightful experience.",
      tags: ["Business Service"],
    },
    {
      id: 3,
      name: "Maze",
      logo: "🔵",
      backgroundColor: "#1976D2",
      jobs: 3,
      description:
        "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
      tags: ["Business Service"],
    },
    {
      id: 4,
      name: "Udacity",
      logo: "🎓",
      backgroundColor: "#00BCD4",
      jobs: 3,
      description: "Udacity is a new type of online university that teaches the actual programming skills.",
      tags: ["Business Service"],
    },
    {
      id: 5,
      name: "Webflow",
      logo: "W",
      backgroundColor: "#4353FF",
      jobs: 3,
      description: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
      tags: ["Business Service", "Technology"],
    },
    {
      id: 6,
      name: "Foundation",
      logo: "▲",
      backgroundColor: "#000000",
      jobs: 3,
      description:
        "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
      tags: ["Business Service", "Crypto"],
    },
  ]

  const getChipColor = (tag) => {
    switch (tag) {
      case "Technology":
        return "rgba(255, 101, 80, 0.1)"
      case "Crypto":
        return "rgba(70, 64, 222, 0.1)"
      case "Business Service":
      default:
        return "white"
    }
  }

  const getChipTextColor = (tag) => {
    switch (tag) {
      case "Technology":
        return "rgba(255, 101, 80, 1)"
      case "Crypto":
        return "rgba(70, 64, 222, 1)"
      case "Business Service":
      default:
        return "rgba(255, 184, 54, 1)"
    }
  }

  return (
    <Box width={"100%"} pl={"0.6rem"}>
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography   sx={{ fontWeight: 600, mb: 0.5, fontSize:"32px" }}>
          Recommended Companies
        </Typography>
        <Typography variant="body2" color="rgba(124, 132, 147, 1)" fontSize={"16px"} fontWeight={400}>
          Based on your profile, company preferences, and recent activity
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
            <Card
              sx={{
                height: "100%",
                width: "355px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #E0E0E0",
                borderRadius: 0,
                boxShadow: "none",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
             <Stack
  direction="row"
  justifyContent="space-between"
  sx={{ mb: 2 }}
>
  {/* Left side */}
  <Box >
    <Avatar
      sx={{
        bgcolor: company.backgroundColor,
        width: 48,
        height: 48,
        mr: 2,
        mb: 2,
        fontSize: "20px",
        fontWeight: "bold",
        color: "white",
      }}
    >
      {company.logo}
    </Avatar>
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="h6"
        component="h3"
        sx={{ fontWeight: 600, fontSize: "24px" }}
      >
        {company.name}
      </Typography>
    </Box>
  </Box>

  {/* Right side */}
  <Chip
    label={`${company.jobs} Jobs`}
    size="small"
    sx={{
      bgcolor: "rgba(248, 248, 253, 1)",
      color: "rgba(70, 64, 222, 1)",
      fontSize: "16px",
      fontWeight: "400",
      border: "none",
      height: 33,
      borderRadius: 0,
      "& .MuiChip-label": {
        px: 1.8,
      },
    }}
  />
</Stack>


                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    lineHeight: 1.5,
                    minHeight: "60px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {company.description}
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {company.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: getChipColor(tag),
                        color: getChipTextColor(tag),
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        height: "24px",
                        border: tag === "Business Service" ? `1px solid ${getChipTextColor(tag)}` : "none",
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  )
}

export default CompaniesCard
