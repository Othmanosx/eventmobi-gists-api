import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import { LinearProgress, TablePagination, Typography } from "@mui/material"
import { HeadCellType, Order } from "types"
import EnhancedTableHead from "./TableHead"
import { getComparator, stableSort } from "utils/tableUtils"
import { useState, ChangeEvent, MouseEvent, ReactNode, RefObject } from "react"
import LoadingSkeleton from "./LoadingSkeleton"
import { StyledTableRow } from "./StyledTableRow"

interface Props<T> {
  renderRow: (row: T) => ReactNode
  data?: T[]
  headCells: HeadCellType[]
  disabledSorting: string[]
  initialOrderBy?: string
  isLoading: boolean
}
export default function EnhancedTable<T>({
  renderRow,
  data = [],
  headCells,
  disabledSorting,
  initialOrderBy,
  isLoading,
}: Props<T>) {
  const [order, setOrder] = useState<Order>("asc")
  const [orderBy, setOrderBy] = useState<string>(
    initialOrderBy ? initialOrderBy : "index"
  )
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const rows = Array.isArray(data) ? data : []
  const handleRequestSort = (event: MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const itemsArray = stableSort(rows, getComparator(order, orderBy)).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  )

  return (
    <Paper elevation={2} sx={{ borderRadius: 2, border: "1px solid #D0D5DD" }}>
      <TableContainer>
        <Table>
          <EnhancedTableHead
            headCells={headCells}
            order={order}
            disabledSorting={disabledSorting}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows?.length}
          />
          <TableBody>
            {isLoading ? (
              <LoadingSkeleton headCells={headCells} />
            ) : rows?.length === 0 ? (
              <StyledTableRow tabIndex={-1}>
                <TableCell colSpan={headCells.length}>
                  <Typography p={2} textAlign="center" color="error">
                    No results Found!
                  </Typography>
                </TableCell>
              </StyledTableRow>
            ) : (
              itemsArray.map((row: T) => renderRow(row))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
