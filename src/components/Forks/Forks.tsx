import { Skeleton, Avatar, AvatarGroup, Link } from "@mui/material"
import useFetchForks from "Queries/useFetchForks"

const Forks = ({ gistId }: { gistId?: string }) => {
  const { isLoading, isError, data: forks } = useFetchForks({ gistId })

  if (isLoading)
    return (
      <Skeleton variant="circular">
        <Avatar />
      </Skeleton>
    )
  if (isError) return <div>Error loading forks</div>

  return (
    <div>
      <AvatarGroup>
        {forks?.length > 0
          ? forks?.map((fork) => (
              <Avatar
                component={Link}
                href={fork?.html_url}
                key={fork.id}
                src={fork?.owner?.avatar_url}
                alt={fork?.owner?.login}
                title={fork?.owner?.login}
                target="_blank"
              />
            ))
          : "No Forks"}
      </AvatarGroup>
    </div>
  )
}

export default Forks
