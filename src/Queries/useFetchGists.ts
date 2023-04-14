import { useMutation } from "@tanstack/react-query"
import { Gist } from "types"

type Props = {
  search: string
}

const API_KEY = import.meta.env.VITE_API_KEY

const useFetchGists = ({ search }: Props) => {
  return useMutation<Gist[]>(["gists", search], () =>
    fetch(`https://api.github.com/users/${search}/gists`, {
      headers: { Authorization: `token ${API_KEY}` },
    }).then((res) => res.json())
  )
}

export default useFetchGists
