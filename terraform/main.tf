terraform {
  required_version = ">= 1.0"

  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 6.0"
    }
  }
}

provider "github" {
  owner = var.github_owner
  token = var.github_token
}

# Branch protection for master/main
resource "github_branch_protection" "master" {
  repository_id = data.github_repository.repo.node_id
  pattern       = "master"

  # Require pull request reviews before merging
  required_pull_request_reviews {
    dismiss_stale_reviews           = true
    require_code_owner_reviews      = false
    required_approving_review_count = 0
    dismiss_stale_reviews_on_push   = true
  }

  # Require status checks to pass
  required_status_checks {
    strict   = true
    contexts = ["build", "lint", "type-check"]
  }

  # Enforce all commits are made to a non-protected branch and submitted via a pull request
  enforce_admins = false

  # Require signed commits (optional for solo dev)
  require_signed_commits = false

  # Require linear history (no merge commits)
  required_linear_history = true

  # Do not allow force pushes
  allows_force_pushes = false

  # Do not allow deletions
  allows_deletions = false

  # Require conversation resolution before merging
  require_conversation_resolution = true

  # Lock branch (only you can push)
  lock_branch = false
}

# Import existing repository
data "github_repository" "repo" {
  full_name = "${var.github_owner}/marciaglowstudio.com"
}
