export interface Gist {
  url?: string
  forks_url?: string
  commits_url?: string
  id?: string
  node_id?: string
  git_pull_url?: string
  git_push_url?: string
  html_url?: string
  files?: { [key: string]: File }
  public?: boolean
  created_at?: Date
  updated_at?: Date
  description?: null | string
  comments?: number
  user?: null
  comments_url?: string
  owner?: Owner
  truncated?: boolean
}

export interface File {
  filename?: string
  type?: FileType
  language?: null | string
  raw_url?: string
  size?: number
}

export type FileType =
  | "text/plain"
  | "text/markdown"
  | "application/x-ruby"
  | "application/xml"
  | "application/x-sh"

export interface Owner {
  login?: string
  id?: number
  node_id?: string
  avatar_url?: string
  gravatar_id?: string
  url?: string
  html_url?: string
  followers_url?: string
  following_url?: string
  gists_url?: string
  starred_url?: string
  subscriptions_url?: string
  organizations_url?: string
  repos_url?: string
  events_url?: string
  received_events_url?: string
  type?: string
  site_admin?: boolean
}

export type Order = "asc" | "desc"

export interface HeadCellType {
  id: string
  label: string
}

export interface Fork {
  url?: string
  forks_url?: string
  commits_url?: string
  id?: string
  node_id?: string
  git_pull_url?: string
  git_push_url?: string
  html_url?: string
  files?: Files
  public?: boolean
  created_at?: Date
  updated_at?: Date
  description?: null | string
  comments?: number
  user?: null
  comments_url?: string
  owner?: Owner
}

export interface Files {}

export interface Owner {
  login?: string
  id?: number
  node_id?: string
  avatar_url?: string
  gravatar_id?: string
  url?: string
  html_url?: string
  followers_url?: string
  following_url?: string
  gists_url?: string
  starred_url?: string
  subscriptions_url?: string
  organizations_url?: string
  repos_url?: string
  events_url?: string
  received_events_url?: string
  type?: string
  site_admin?: boolean
}
