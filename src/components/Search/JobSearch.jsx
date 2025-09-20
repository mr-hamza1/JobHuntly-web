"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Select,
  MenuItem,
  IconButton,
  Stack,
  LinearProgress,
  Pagination,
  Menu,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {
  ExpandMore as ExpandMoreIcon,
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
  Close as CloseIcon
} from "@mui/icons-material"
import PaginationPage from "@/features/PaginationPage"

const JobSearch = () => {
  const [sortBy, setSortBy] = useState("Most relevant")
  const [viewMode, setViewMode] = useState("list")

  // Filter states
  const [employmentTypes, setEmploymentTypes] = useState({
    fullTime: false,
    partTime: false,
    remote: false,
    internship: false,
    contract: false,
  })

  const [categories, setCategories] = useState({
    design: false,
    sales: false,
    marketing: false,
    business: true, 
    humanResources: false,
    finance: false,
    engineering: false,
    technology: true, 
  })

  const [jobLevels, setJobLevels] = useState({
    entryLevel: false,
    midLevel: false,
    seniorLevel: false,
    director: true, 
    vpOrAbove: false,
  })

  const [salaryRanges, setSalaryRanges] = useState({
    range1: false,
    range2: false,
    range3: false,
  })

  const jobData = [
    {
      id: 1,
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      logo: "🌟",
      tags: ["Full-time", "Marketing", "Design"],
      applied: 5,
      capacity: 10,
      bgColor: "#4CAF50",
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, USA",
      logo: "📦",
      tags: ["Full-time", "Marketing", "Design"],
      applied: 2,
      capacity: 10,
      bgColor: "#2196F3",
    },
    {
      id: 3,
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      logo: "🔧",
      tags: ["Full-time", "Marketing", "Design"],
      applied: 8,
      capacity: 12,
      bgColor: "#00BCD4",
    },
    {
      id: 4,
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      logo: "💳",
      tags: ["Full-time", "Marketing", "Design"],
      applied: 0,
      capacity: 10,
      bgColor: "#9C27B0",
    },
    {
      id: 5,
      title: "Lead Engineer",
      company: "Canva",
      location: "Ankara, Turkey",
      logo: "🎨",
      tags: ["Full-time", "Marketing", "Design"],
      applied: 5,
      capacity: 8,
      bgColor: "#FF9800",
    },
    {
      id: 6,
      title: "Product Designer",
      company: "ClassPass",
      location: "Berlin, Germany",
      logo: "🏃",
      tags: ["Full-time", "Marketing", "Design"],
      applied: 2,
      capacity: 6,
      bgColor: "#3F51B5",
    },
    {
      id: 7,
      title: "Product Designer",
      company: "ClassPass",
      location: "Berlin, Germany",
      logo: "🏃",
      tags: ["Full-time", "Marketing", "Design"],
      applied: 2,
      capacity: 6,
      bgColor: "#3F51B5",
    },
  ]

  const handleEmploymentTypeChange = (event) => {
    setEmploymentTypes({
      ...employmentTypes,
      [event.target.name]: event.target.checked,
    })
  }

  const handleCategoryChange = (event) => {
    setCategories({
      ...categories,
      [event.target.name]: event.target.checked,
    })
  }

  const handleJobLevelChange = (event) => {
    setJobLevels({
      ...jobLevels,
      [event.target.name]: event.target.checked,
    })
  }

  const handleSalaryRangeChange = (event) => {
    setSalaryRanges({
      ...salaryRanges,
      [event.target.name]: event.target.checked,
    })
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Stack width={{xs: "100%", md:"90%", lg:"100%"}}   pl={{xs:0, md:"7rem"}} pt={{xs: 0,md:"4rem"}} direction={{xs:":column", md:"row"}}>
     <Box display={{ md: "none" }} width="100%" height="100px">
  <Button
    variant="outlined"
    startIcon={<MenuIcon />}
    onClick={handleClick}
    sx={{
      color: "black",
      borderColor: "#ddd",
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 500,
      padding: "10px 16px",
      width: "100%",
      borderRadius: 0,
      "&:hover": {
        borderColor: "#bbb",
        backgroundColor: "#f5f5f5",
      },
    }}
  >
    More Filters
  </Button>

  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    sx={{ ml: 2 }}
  >
    {/* Header */}
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography fontSize="20px" fontWeight={600} py={2} ml={2}>
        More Filters
      </Typography>
      <IconButton onClick={handleClose} sx={{ pr: 3 }}>
        <CloseIcon />
      </IconButton>
    </Stack>

    {/* Filters */}
    <Grid container spacing={2} direction="row" pr={4}>
      <Grid item xs={12} md={3} display={{ xs: "block", md: "none" }}>
        <Box>

          {/* Type of Employment */}
          <Accordion
            defaultExpanded
            sx={{
              border: "none",
              boxShadow: "none",
              "&:before": { display: "none" },
              transition: "none !important",
              mb: 0,
            }}
          >
            <AccordionSummary>
              <Typography variant="h6" fontWeight="700" fontSize="16px">
                Type of Employment
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={employmentTypes.fullTime}
                      onChange={handleEmploymentTypeChange}
                      name="fullTime"
                    />
                  }
                  label={<Typography variant="body2">Full-time (3)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={employmentTypes.partTime}
                      onChange={handleEmploymentTypeChange}
                      name="partTime"
                    />
                  }
                  label={<Typography variant="body2">Part-Time (5)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={employmentTypes.remote}
                      onChange={handleEmploymentTypeChange}
                      name="remote"
                    />
                  }
                  label={<Typography variant="body2">Remote (2)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={employmentTypes.internship}
                      onChange={handleEmploymentTypeChange}
                      name="internship"
                    />
                  }
                  label={<Typography variant="body2">Internship (24)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={employmentTypes.contract}
                      onChange={handleEmploymentTypeChange}
                      name="contract"
                    />
                  }
                  label={<Typography variant="body2">Contract (3)</Typography>}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          {/* Categories */}
          <Accordion
            defaultExpanded
            sx={{
              border: "none",
              boxShadow: "none",
              "&:before": { display: "none" },
              transition: "none !important",
              mb: 0,
            }}
          >
            <AccordionSummary>
              <Typography variant="h6" fontWeight="700" fontSize="16px">
                Categories
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
              <FormGroup sx={{ p: 0 }}>
                <FormControlLabel
                  sx={{ p: 0 }}
                  control={
                    <Checkbox
                      checked={categories.design}
                      onChange={handleCategoryChange}
                      name="design"
                    />
                  }
                  label={<Typography variant="body2">Design (24)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={categories.sales}
                      onChange={handleCategoryChange}
                      name="sales"
                    />
                  }
                  label={<Typography variant="body2">Sales (3)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={categories.marketing}
                      onChange={handleCategoryChange}
                      name="marketing"
                    />
                  }
                  label={<Typography variant="body2">Marketing (3)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={categories.business}
                      onChange={handleCategoryChange}
                      name="business"
                      color="primary"
                    />
                  }
                  label={<Typography variant="body2">Business (3)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={categories.humanResources}
                      onChange={handleCategoryChange}
                      name="humanResources"
                    />
                  }
                  label={<Typography variant="body2">
                    Human Resources (6)
                  </Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={categories.finance}
                      onChange={handleCategoryChange}
                      name="finance"
                    />
                  }
                  label={<Typography variant="body2">Finance (4)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={categories.engineering}
                      onChange={handleCategoryChange}
                      name="engineering"
                    />
                  }
                  label={<Typography variant="body2">Engineering (4)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={categories.technology}
                      onChange={handleCategoryChange}
                      name="technology"
                      color="primary"
                    />
                  }
                  label={<Typography variant="body2">Technology (5)</Typography>}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          {/* Job Level */}
          <Accordion
            defaultExpanded
            sx={{
              border: "none",
              boxShadow: "none",
              "&:before": { display: "none" },
              transition: "none !important",
              mb: 0,
            }}
          >
            <AccordionSummary>
              <Typography variant="h6" fontWeight="700" fontSize="16px">
                Job Level
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jobLevels.entryLevel}
                      onChange={handleJobLevelChange}
                      name="entryLevel"
                    />
                  }
                  label={<Typography variant="body2">Entry Level (57)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jobLevels.midLevel}
                      onChange={handleJobLevelChange}
                      name="midLevel"
                    />
                  }
                  label={<Typography variant="body2">Mid Level (3)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jobLevels.seniorLevel}
                      onChange={handleJobLevelChange}
                      name="seniorLevel"
                    />
                  }
                  label={<Typography variant="body2">Senior Level (5)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jobLevels.director}
                      onChange={handleJobLevelChange}
                      name="director"
                      color="primary"
                    />
                  }
                  label={<Typography variant="body2">Director (12)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jobLevels.vpOrAbove}
                      onChange={handleJobLevelChange}
                      name="vpOrAbove"
                    />
                  }
                  label={<Typography variant="body2">VP or Above (8)</Typography>}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          {/* Salary Range */}
          <Accordion
            defaultExpanded
            sx={{
              border: "none",
              boxShadow: "none",
              "&:before": { display: "none" },
              transition: "none !important",
              mb: 2,
            }}
          >
            <AccordionSummary>
              <Typography variant="h6" fontWeight="700" fontSize="16px">
                Salary Range
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={salaryRanges.range1}
                      onChange={handleSalaryRangeChange}
                      name="range1"
                    />
                  }
                  label={<Typography variant="body2">$700 - $1000 (4)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={salaryRanges.range2}
                      onChange={handleSalaryRangeChange}
                      name="range2"
                    />
                  }
                  label={<Typography variant="body2">$100 - $1500 (6)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={salaryRanges.range3}
                      onChange={handleSalaryRangeChange}
                      name="range3"
                    />
                  }
                  label={<Typography variant="body2">$1500 - $2000 (10)</Typography>}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>

        </Box>
      </Grid>
    </Grid>

    {/* Apply Button */}
    <Box p={2} textAlign="center">
      <Button
        variant="contained"
        sx={{
          bgcolor: "rgba(70, 64, 222, 1)",
          "&:hover": { bgcolor: "#5856eb" },
          textTransform: "none",
          fontWeight: 600,
          width: "333px",
          borderRadius: 0,
          boxShadow: "none",
        }}
        onClick={handleClose}
      >
        Apply
      </Button>
    </Box>
  </Menu>
</Box>

      <Grid container spacing={3} direction={"row"}>
        {/* Left Sidebar - Filters */}
        <Grid item xs={12} md={3} display={{xs:"none", md: "block"}}>
          <Box sx={{ position: "sticky", top: 20 }}>
            {/* Type of Employment */}
        <Accordion
          defaultExpanded
          sx={{
            border: "none",
            boxShadow: "none", 
            "&:before": {
              display: "none", 
            },
            transition: "none !important", 
            position: "relative", top: -15,
          }}
        >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" fontWeight="700" fontSize={"16px"} pr={5} >
                  Type of Employment
                </Typography>
              </AccordionSummary>
              <AccordionDetails  sx={{position: "relative", top: -22}} >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={employmentTypes.fullTime}
                        onChange={handleEmploymentTypeChange}
                        name="fullTime"
                      />
                    }
                    label={<Typography variant="body2">Full-time (3)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={employmentTypes.partTime}
                        onChange={handleEmploymentTypeChange}
                        name="partTime"
                      />
                    }
                    label={<Typography variant="body2">Part-Time (5)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={employmentTypes.remote} onChange={handleEmploymentTypeChange} name="remote" />
                    }
                    label={<Typography variant="body2">Remote (2)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={employmentTypes.internship}
                        onChange={handleEmploymentTypeChange}
                        name="internship"
                      />
                    }
                    label={<Typography variant="body2">Internship (24)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={employmentTypes.contract}
                        onChange={handleEmploymentTypeChange}
                        name="contract"
                      />
                    }
                    label={<Typography variant="body2">Contract (3)</Typography>}
                  />
                </FormGroup>
              </AccordionDetails >
            </Accordion>

            {/* Categories */}
            <Accordion defaultExpanded sx={{ 
            border: "none",
            boxShadow: "none", 
            "&:before": {
              display: "none", 
            },
            transition: "none !important",
             position: "relative", top: -100, 
          }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" fontWeight="700" fontSize={"16px"}>
                  Categories
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{position: "relative", top: -22}}>
                <FormGroup sx={{p:0}}>
                  <FormControlLabel sx={{p:0}}
                    control={<Checkbox checked={categories.design} onChange={handleCategoryChange} name="design" />}
                    label={<Typography variant="body2">Design (24)</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox checked={categories.sales} onChange={handleCategoryChange} name="sales" />}
                    label={<Typography variant="body2">Sales (3)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={categories.marketing} onChange={handleCategoryChange} name="marketing" />
                    }
                    label={<Typography variant="body2">Marketing (3)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={categories.business}
                        onChange={handleCategoryChange}
                        name="business"
                        color="primary"
                      />
                    }
                    label={<Typography variant="body2">Business (3)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={categories.humanResources}
                        onChange={handleCategoryChange}
                        name="humanResources"
                      />
                    }
                    label={<Typography variant="body2">Human Resources (6)</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox checked={categories.finance} onChange={handleCategoryChange} name="finance" />}
                    label={<Typography variant="body2">Finance (4)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={categories.engineering} onChange={handleCategoryChange} name="engineering" />
                    }
                    label={<Typography variant="body2">Engineering (4)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={categories.technology}
                        onChange={handleCategoryChange}
                        name="technology"
                        color="primary"
                      />
                    }
                    label={<Typography variant="body2">Technology (5)</Typography>}
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            {/* Job Level */}
            <Accordion defaultExpanded  sx={{
            border: "none",
            boxShadow: "none", 
            "&:before": {
              display: "none", 
            },
            transition: "none !important",
             position: "relative", top: -130,
          }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" fontWeight="700" fontSize={"16px"}>
                  Job Level
                </Typography>
              </AccordionSummary>
              <AccordionDetails  sx={{position: "relative", top: -22}}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={jobLevels.entryLevel} onChange={handleJobLevelChange} name="entryLevel" />
                    }
                    label={<Typography variant="body2">Entry Level (57)</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox checked={jobLevels.midLevel} onChange={handleJobLevelChange} name="midLevel" />}
                    label={<Typography variant="body2">Mid Level (3)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={jobLevels.seniorLevel} onChange={handleJobLevelChange} name="seniorLevel" />
                    }
                    label={<Typography variant="body2">Senior Level (5)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={jobLevels.director}
                        onChange={handleJobLevelChange}
                        name="director"
                        color="primary"
                      />
                    }
                    label={<Typography variant="body2">Director (12)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={jobLevels.vpOrAbove} onChange={handleJobLevelChange} name="vpOrAbove" />
                    }
                    label={<Typography variant="body2">VP or Above (8)</Typography>}
                  />
                </FormGroup>
              </AccordionDetails >
            </Accordion>

            {/* Salary Range */}
            <Accordion defaultExpanded  sx={{
            border: "none",
            boxShadow: "none", 
            "&:before": {
              display: "none",
            },
            transition: "none !important",
             position: "relative", top: -155, 
          }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" fontWeight="700" fontSize={"16px"}>
                  Salary Range
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{position: "relative", top: -22}}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={salaryRanges.range1} onChange={handleSalaryRangeChange} name="range1" />
                    }
                    label={<Typography variant="body2">$700 - $1000 (4)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={salaryRanges.range2} onChange={handleSalaryRangeChange} name="range2" />
                    }
                    label={<Typography variant="body2">$100 - $1500 (6)</Typography>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={salaryRanges.range3} onChange={handleSalaryRangeChange} name="range3" />
                    }
                    label={<Typography variant="body2">$1500 - $2000 (10)</Typography>}
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>


        {/* Main Content */}
        <Box width={{xs:"88%",md:"63%"}} ml={3} >
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, width: "100%" }}>
            <Box>
              <Typography  fontWeight="600" sx={{ mb: 0, fontSize: "38px" }}>
                All Jobs
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                Showing 72 results
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography display={{xs:"none", md:"block"}} variant="body2" color="rgba(124, 132, 147, 1)">Sort by:</Typography>
                <FormControl size="small" sx={{ minWidth: 120, 
                "& .MuiOutlinedInput-notchedOutline": {
                 border: {
                   xs: "none",        // remove on xs
                    md: "1px solid #ccc", // show from md+
                     }}}} >
                  <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)} displayEmpty>
                    <MenuItem value="Most relevant">Most relevant</MenuItem>
                    <MenuItem value="Newest">Newest</MenuItem>
                    <MenuItem value="Salary">Salary</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            <Box sx={{ display: {xs:"none",md:"flex"}, border: "1px solid #e0e0e0", borderRadius: 1 }}  >
                <IconButton
                  size="small"
                  onClick={() => setViewMode("grid")}
                  sx={{
                    bgcolor: viewMode === "grid" ? "primary.main" : "transparent",
                    color: viewMode === "grid" ? "white" : "text.secondary",
                    borderRadius: 0,
                  }}
                >
                  <ViewModuleIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => setViewMode("list")}
                  sx={{
                    bgcolor: viewMode === "list" ? "primary.main" : "transparent",
                    color: viewMode === "list" ? "white" : "text.secondary",
                    borderRadius: 0,
                  }}
                >
                  <ViewListIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Job Cards */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {jobData.map((job) => (
              <Card key={job.id} sx={{ "&:hover": { boxShadow: 3 },borderRadius: 0, boxShadow:"none", border: "1px solid rgba(214, 221, 235, 1)" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: {xs:"block", md:"flex"}, justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Box sx={{ display: {xs:"block", md:"flex"}, gap: 2, flex: 1 }}>
                      <Avatar
                        sx={{
                          width: 48,
                          height: 48,
                          bgcolor: job.bgColor,
                          fontSize: "1.5rem",
                        }}
                      >
                        {job.logo}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight="600" sx={{ mb: 0.5 }}>
                          {job.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {job.company} • {job.location}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                          {job.tags.map((tag, index) => {
  let chipStyles = {};

  if (tag === "Design") {
    chipStyles = {
      color: "rgba(70, 64, 222, 1)",
      borderColor: "rgba(70, 64, 222, 1)",
    };
  } else if (tag === "Full-time") {
    chipStyles = {
      bgcolor: "rgba(86, 205, 173, 0.1)", 
      color: "rgba(86, 205, 173, 1)",     
       border: "none"      
    };
  } else if (tag === "Marketing") {
    chipStyles = {
      color: "rgba(255, 184, 54, 1)",     
      borderColor: "rgba(255, 184, 54, 1)",
    };
  } else {
    chipStyles = {
      bgcolor: "transparent",
      color: "rgba(70, 64, 222, 1)",
      borderColor: "rgba(70, 64, 222, 1)",
    };
  }

  return (
    <Chip
      key={index}
      label={tag}
      size="small"
      variant="outlined"
      sx={{
        fontSize: "0.75rem",
        ...chipStyles,
      }}
    />
  );
})}

                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: {md:"flex-end"}, gap: 1,
                       pt:{xs: 2.5, md:0}
                   }}>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "rgba(70, 64, 222, 1)",
                          "&:hover": { bgcolor: "#5856eb" },
                          textTransform: "none",
                          fontWeight: 600,
                          px: 5.1,
                          borderRadius: 0,
                          boxShadow: "none",
                        }}
                      >
                        Apply
                      </Button>

                   <Box sx={{ width:{ xs:"100%", md:120}, mt: 0.5 }}>
                        <LinearProgress
                          variant="determinate"
                          value={(job.applied / job.capacity) * 100}
                          sx={{
                            height: 5,
                            borderRadius: 2,
                            backgroundColor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor:" rgba(86, 205, 173, 1)",
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Box>



                      <Typography variant="caption" color="rgba(0, 0, 0, 1)">
                        {job.applied} applied of {job.capacity} capacity 
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>      
    </Stack>
  )
}

export default JobSearch
