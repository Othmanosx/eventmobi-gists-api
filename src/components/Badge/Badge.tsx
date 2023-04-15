import { Chip } from "@mui/material"
import { File } from "types"
import { languageColors } from "./colors"

type Color = keyof typeof languageColors

const Forks = ({ file }: { file: File }) => {
  return (
    <Chip
      sx={{ m: 1, pr: 1.3 }}
      dir="rtl"
      variant="outlined"
      color="info"
      key={file.filename}
      label={file.filename}
      icon={
        <Chip
          label={file.language || "Unknown"}
          size="small"
          color="info"
          sx={{
            color: "white !important",
            bgcolor: languageColors[file?.language?.toLowerCase() as Color],
          }}
        />
      }
    />
  )
}

export default Forks
