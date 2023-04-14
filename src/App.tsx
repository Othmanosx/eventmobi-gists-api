import { MouseEventHandler, useState } from "react"
import "./App.css"
import useFetchGists from "Queries/useFetchGists"

function App() {
  const [username, setUsername] = useState("mojombo")
  const [search, setSearch] = useState("")
  const { data: gists } = useFetchGists({ search })

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setSearch(username)
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>search</button>
      {JSON.stringify(gists)}
    </div>
  )
}

export default App
