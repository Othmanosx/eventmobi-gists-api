import { styled, TableRow } from "@mui/material"

export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F9FAFB",
  },
}))
