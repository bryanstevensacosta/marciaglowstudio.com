# GitHub Repository Terraform Configuration

This Terraform configuration manages the GitHub repository branch protection rules for marciaglowstudio.com.

## How It Works

**Terraform** configures the branch protection rules (what checks are required)
**GitHub Actions** executes the actual checks (build, lint, type-check)

Together they ensure:

1. All PRs must pass CI checks before merging
2. Only you can approve and merge PRs
3. Code quality is maintained automatically

## Prerequisites

1. **Terraform** installed (>= 1.0)

   ```bash
   # Already installed ✓
   terraform --version
   ```

2. **GitHub Personal Access Token** with the following scopes:
   - `repo` (Full control of private repositories)
   - `admin:repo_hook` (Full control of repository hooks)

   Create one at: https://github.com/settings/tokens/new

3. **GitHub Secret** for Actions:
   - Go to: https://github.com/bryanstevensacosta/marciaglowstudio.com/settings/secrets/actions
   - Create a new secret named `GH_PAT` with your GitHub token
   - This allows Terraform workflow to run in GitHub Actions

## Setup

1. Copy the example variables file:

   ```bash
   cd terraform
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Edit `terraform.tfvars` with your values:

   ```hcl
   github_owner = "bryanstevensacosta"
   github_token = "ghp_your_actual_token_here"
   github_email = "bryanstevensacosta@gmail.com"
   ```

3. Initialize Terraform:
   ```bash
   terraform init
   ```

## Usage

### Plan Changes

Preview what Terraform will do:

```bash
terraform plan
```

### Apply Changes

Apply the configuration to GitHub:

```bash
terraform apply
```

Type `yes` when prompted to confirm.

### Destroy Resources

Remove branch protection rules (use with caution):

```bash
terraform destroy
```

## Branch Protection Rules

The configuration applies the following rules to the `master` branch:

### ✅ Enabled Protections

- **Require pull request reviews** (1 approval required)
- **Dismiss stale reviews** when new commits are pushed
- **Require status checks** (build, lint, type-check must pass)
- **Require signed commits** (GPG/SSH signatures)
- **Require linear history** (no merge commits)
- **Require conversation resolution** before merging
- **Restrict push access** to repository owner only
- **Block force pushes**
- **Block branch deletion**

### 🔒 Access Control

- Only `@bryanstevensacosta` can:
  - Push directly to master
  - Dismiss pull request reviews
  - Approve and merge pull requests

### 📋 CODEOWNERS

The `.github/CODEOWNERS` file ensures all changes require your approval.

## GitHub Actions Workflows

### CI Workflow (`.github/workflows/ci.yml`)

Runs on every push and PR:

- **build** - Verifies the project builds successfully
- **lint** - Checks code style with ESLint
- **type-check** - Validates TypeScript types
- **format-check** - Ensures code is formatted with Prettier

### Terraform Workflow (`.github/workflows/terraform.yml`)

Runs when terraform files change:

- Validates Terraform configuration
- Shows plan on PRs
- Prevents invalid Terraform changes

## Important Notes

⚠️ **Never commit `terraform.tfvars`** - it contains your GitHub token (already in .gitignore)
⚠️ **Keep your GitHub token secure** - treat it like a password
⚠️ **Test with `terraform plan`** before applying changes
✅ **GitHub Actions are required** - Terraform only sets the rules, Actions run the checks

## Workflow

1. Create a feature branch
2. Make your changes
3. Push to GitHub
4. GitHub Actions runs CI checks automatically
5. Create a PR
6. If checks pass, you can approve and merge
7. Branch protection ensures quality

## Troubleshooting

### Authentication Error

If you get authentication errors, verify:

1. Your token has the correct scopes
2. The token hasn't expired
3. The `github_owner` matches your GitHub username

### Resource Already Exists

The repository already exists, so we use `data` source instead of creating it:

```hcl
data "github_repository" "repo" {
  full_name = "${var.github_owner}/marciaglowstudio.com"
}
```

### Status Checks Not Found

If you get errors about missing status checks:

1. Push code to trigger GitHub Actions first
2. Then apply Terraform (it needs the checks to exist)
3. Or remove the `required_status_checks` block temporarily

## Files

- `main.tf` - Main configuration with branch protection
- `variables.tf` - Variable definitions
- `outputs.tf` - Output values after apply
- `terraform.tfvars` - Your secret values (not in git)
- `terraform.tfvars.example` - Example template
- `.gitignore` - Prevents committing sensitive files
- `README.md` - This file
