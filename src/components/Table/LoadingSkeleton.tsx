import { Skeleton, TableCell } from "@mui/material"
import { HeadCellType } from "types"
import { StyledTableRow } from "./StyledTableRow"

type Props = {
  headCells: HeadCellType[]
}

function LoadingSkeleton({ headCells }: Props) {
  return (
    <>
      {[...new Array(5).keys()].map((item) => (
        <StyledTableRow key={item} tabIndex={-1}>
          {headCells.map((item) => (
            <TableCell key={item.id}>
              <Skeleton variant="rectangular" height={30} />
            </TableCell>
          ))}
        </StyledTableRow>
      ))}
    </>
  )
}

export default LoadingSkeleton
