# Contributing

We appreciate contributions! Please follow the instructions below:

## Trunk based development

This repository follows the guidelines of [Trunk based development](https://trunkbaseddevelopment.com/). We use the 'scalable' approach of branching off and merging into master using issues and pull requests. Since we use `pnpm` for script automation, here's a short list of common commands you should use instead of what you're used to. They enforce a common development style and mitigate problems.

-   `sync`: **Recommended workflow!** Commits your local changes, updates the wiki, pushes everything and pulls remote changes back automatically
-   `commit`: Guides you through committing your changes with a [conventional commit](https://github.com/commitizen/cz-cli) message using [commitizen](https://github.com/commitizen/cz-cli)
-   `test`: Run the same tests that will run during CI (check this before pushing!)
-   `pull`: Pull the newest changes from the repository into your local copy (you might have to resolve conflicts)
-   `push`: Push changes from your local copy back to the repository (remember, pushing directly to `trunk` is not possible, open a separate branch instead)
