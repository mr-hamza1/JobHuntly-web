import { Grid, Card, CardContent, Typography, Box, Link, Avatar } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const LastJobs = () => {
  const companies = [
    {
      name: "Pentagram",
      jobs: 3,
      logo: "🔴", // Red circle placeholder
      bgColor: "#fff",
      logoColor: "#e53e3e",
    },
    {
      name: "Wolff Olins",
      jobs: 4,
      logo: "⚫", // Black circle placeholder
      bgColor: "#fff",
      logoColor: "#000",
    },
    {
      name: "Clay",
      jobs: 3,
      logo: "⚫", // Black circle placeholder
      bgColor: "#fff",
      logoColor: "#000",
    },
    {
      name: "MediaMonks",
      jobs: 4,
      logo: "⚫", // Black circle placeholder
      bgColor: "#fff",
      logoColor: "#000",
    },
    {
      name: "Packer",
      jobs: 3,
      logo: "📦", // Package icon placeholder
      bgColor: "#fff",
      logoColor: "#ff6b35",
    },
    {
      name: "Square",
      jobs: 5,
      logo: "⬛", // Black square placeholder
      bgColor: "#fff",
      logoColor: "#000",
    },
    {
      name: "Divy",
      jobs: 5,
      logo: "V", // V letter
      bgColor: "#fff",
      logoColor: "#000",
    },
    {
      name: "WebFlow",
      jobs: 3,
      logo: "W", // W letter
      bgColor: "#4285f4",
      logoColor: "#fff",
    },
  ]

  return (
    <Box sx={{ padding: 3, pl:{xs:2, md:"6.8rem"}, backgroundColor: "#f8f9fa", width: {xs:"100%", md:"93%"} }}>
      <Grid container spacing={2} sx={{ margin: "0 auto" }}>
        {companies.map((company, index) => (
          <Grid item xs={6} sm={3} md={6} lg={6} key={index}>
            <Card
              sx={{
                height:{xs:195, md: 140},
                width: {xs:"373px", md:"270px"},
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                border: "1px solid #e0e0e0",
                borderRadius: 0,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent sx={{ padding: 2, "&:last-child": { paddingBottom: 2 } }}>
                <Avatar
                  sx={{
                    width: {xs:75, md: 45},
                    height: {xs:75, md:45},
                    backgroundColor: company.bgColor,
                    color: company.logoColor,
                    border: company.name === "WebFlow" ? "none" : "1px solid #e0e0e0",
                    fontSize:  {xs:75, md:"38px"},
                    fontWeight: "bold",
                    marginBottom: 1,
                    margin: "0 auto 8px auto",
                  }}
                >
                  {company.logo}
                </Avatar>

                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    fontSize:  {xs:"25px", md:"20px"},
                    color: "#333",
                    marginBottom: 0.5,
                  }}
                >
                  {company.name}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: "#4285f4",
                    fontSize:  {xs:"15px", md:"12px"},
                    fontWeight: 500,
                    backgroundColor:"rgba(248, 248, 253, 1)",
                    px: 1,
                    py:1
                  }}
                >
                  {company.jobs} Jobs
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "left", marginTop: 3, maxWidth: "90%",  mb: 5 }}>
        <Link
          href="#"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: "rgba(70, 64, 222, 1)",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: 600,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          View more Design companies
          <ArrowForwardIcon sx={{ marginLeft: 0.5, fontSize: 16 }} />
        </Link>
      </Box>
    </Box>
  )
}

export default LastJobs
