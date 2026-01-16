output "repository_url" {
  description = "URL of the GitHub repository"
  value       = data.github_repository.repo.html_url
}

output "repository_ssh_url" {
  description = "SSH URL of the GitHub repository"
  value       = data.github_repository.repo.ssh_clone_url
}

output "branch_protection_status" {
  description = "Branch protection rules applied"
  value = {
    pattern                         = github_branch_protection.master.pattern
    require_signed_commits          = github_branch_protection.master.require_signed_commits
    required_linear_history         = github_branch_protection.master.required_linear_history
    allows_force_pushes             = github_branch_protection.master.allows_force_pushes
    allows_deletions                = github_branch_protection.master.allows_deletions
    require_conversation_resolution = github_branch_protection.master.require_conversation_resolution
  }
}
