import { Button, InputAdornment, OutlinedInput } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { ChangeEventHandler, FormEventHandler } from "react"

type Props = {
  value: string
  handleSubmit: FormEventHandler<HTMLFormElement>
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

const Search = ({ handleSubmit, value, onChange }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <OutlinedInput
        type="text"
        placeholder="Enter GitHub username"
        value={value}
        onChange={onChange}
        sx={{ minWidth: 350, mb: 3 }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <Button variant="contained" type="submit">
              Search
            </Button>
          </InputAdornment>
        }
      />
    </form>
  )
}

export default Search
