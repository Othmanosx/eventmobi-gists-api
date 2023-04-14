import { MouseEventHandler, useState } from "react"
import "./App.css"
import useFetchGists from "Queries/useFetchGists"
import { Table } from "components"
import { TableCell } from "@mui/material"
import { StyledTableRow } from "components/Table/StyledTableRow"

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
  const [username, setUsername] = useState("mojombo")
  const [search, setSearch] = useState("")

  const { isLoading, data: gists, mutate } = useFetchGists({ search })

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setSearch(username)
    mutate()
  }

  return (
    <div style={{ width: "100%" }}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>search</button>
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
                  <div key={file.filename}>{file.filename}</div>
                ))}
              </TableCell>
              <TableCell>forks</TableCell>
            </StyledTableRow>
          )
        }}
      />
    </div>
  )
}

export default App
