import { TableHead, TableRow, TableCell, TableSortLabel, Box } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import { HeadCellType, Order } from "types"

export interface TableProps {
  headCells: HeadCellType[]
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void
  order: Order
  disabledSorting: string[]
  orderBy: string
  rowCount: number
}

export default function EnhancedTableHead(props: TableProps) {
  const { headCells, order, orderBy, onRequestSort, disabledSorting = [] } = props
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              disabled={disabledSorting.includes(headCell.id)}
              active={!disabledSorting.includes(headCell.id)}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
