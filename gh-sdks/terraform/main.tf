terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
  }
}

provider "github" {
  
}

resource "github_branch" "development" {
  repository = "Github-Foundation-Learn"
  branch     = "sdks"
}