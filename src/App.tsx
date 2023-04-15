import { FormEventHandler, useState } from "react"
import "./App.css"
import useFetchGists from "Queries/useFetchGists"
import { Alert, TableCell } from "@mui/material"
import { StyledTableRow } from "components/Table/StyledTableRow"
import { Table, Search, Forks, Badge } from "components"

const headCells = [
  {
    id: "description",
    label: "Description",
  },
  {
    id: "files",
    label: "Files",
  },
  {
    id: "forks",
    label: "Forks",
  },
]

function App() {
  const [username, setUsername] = useState("")
  const [search, setSearch] = useState("")

  const { isLoading, data: gists, mutate, isError } = useFetchGists({ search })
  const error = isError || gists?.message
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setSearch(username)
    mutate()
  }

  return (
    <div style={{ width: "100%" }}>
      <Search
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        handleSubmit={handleSubmit}
      />
      {error && (
        <Alert severity="error" sx={{ m: 3 }}>
          {`Error: ${gists?.message || "Unable to fetch gists"}`}
        </Alert>
      )}
      <Table
        data={gists}
        isLoading={isLoading}
        headCells={headCells}
        disabledSorting={["files", "forks"]}
        renderRow={(row) => {
          const files = row?.files && Object.values(row?.files)

          return (
            <StyledTableRow hover tabIndex={-1} key={row.id}>
              <TableCell>{row.description || "Untitled"}</TableCell>

              <TableCell>
                {files?.map((file) => (
                  <Badge key={file.filename} file={file} />
                ))}
              </TableCell>
              <TableCell>
                <Forks gistId={row?.id} />
              </TableCell>
            </StyledTableRow>
          )
        }}
      />
    </div>
  )
}

export default App
