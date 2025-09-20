"use client"

import React from "react"
import { Pagination, PaginationItem } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "#666",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgba(70, 64, 222, 1)",
    },
    "&.Mui-selected": {
      backgroundColor: "#1976d2",
      color: "white",
      "&:hover": {
        backgroundColor: "#1565c0",
      },
    },
  },
}))

export default function PaginationPage({ count, page, onChange, className }) {
  return (
    <div className={className}>
      <StyledPagination
        count={count}
        page={page}
        onChange={onChange}
        shape="rounded"        
      />
    </div>
  )
}
