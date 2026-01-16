variable "github_owner" {
  description = "GitHub username or organization"
  type        = string
  default     = "bryanstevensacosta"
}

variable "github_token" {
  description = "GitHub personal access token with repo and admin:repo_hook permissions"
  type        = string
  sensitive   = true
}

variable "github_email" {
  description = "GitHub email for commits"
  type        = string
  default     = "bryanstevensacosta@gmail.com"
}
