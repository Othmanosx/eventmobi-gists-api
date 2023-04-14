import { useQuery } from "@tanstack/react-query"
import { Fork } from "types"

type Props = {
  gistId?: string
}

const API_KEY = import.meta.env.VITE_API_KEY

const useFetchForks = ({ gistId }: Props) => {
  return useQuery<Fork[]>(["forks", gistId], () =>
    fetch(`https://api.github.com/gists/${gistId}/forks?per_page=3`, {
      headers: { Authorization: `token ${API_KEY}` },
    }).then((res) => res.json())
  )
}

export default useFetchForks
