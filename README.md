# Attendance Frontend

This project is a frontend for the Attendance system built using Vite and Shadcn components.

### Getting Started

To set up the project locally, follow these steps:

Clone the repository:

```
git clone <repository-url>
```

Switch to the stage branch:

```
git checkout stage
```

The stage branch is the most up-to-date branch and serves as the base for all work. All pull requests (PRs) should be created against this branch.

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

### Working on a Jira Ticket

When picking up a ticket from Jira, follow this workflow:

1. Ensure you are on the stage branch:

```
git checkout stage
```

2. Create a new feature branch based on your ticket:

Use the ticket code, such as SCRUM-1 or SCRUM-1-description.

```
git checkout -b SCRUM-1
```

Important: Never commit directly to the stage branch. Always create a new branch based on your ticket.

3. Make your changes.

Code as needed to complete the task.

4. Stage and commit your changes:

```
git add .
git commit -m "Description of your changes"
```

5. Sync with the latest changes from stage before pushing:

Always pull the latest changes from stage to avoid conflicts:

```
git pull origin stage
```

You can also rebase to keep a clean commit history:

```
git rebase origin/stage
```

_Explanation: Rebasing rewrites your branch’s commit history to apply your changes on top of the latest stage branch updates. This keeps the history linear and avoids merge commits._

6. Push your changes to your feature branch:

```
git push
```

### Creating a Pull Request (PR)

1. After pushing your changes, create a pull request (PR) on GitHub.
2. Ensure the PR is directed to the stage branch.
3. In the PR description, write a brief summary of the changes you made. This helps reviewers and collaborators understand the context of your work.

### Important Notes

- Do not commit directly to the stage branch. Always create a new branch for each ticket based on the stage branch.
- Always pull the latest stage changes before pushing to ensure your feature branch is up to date.
- Write clear and concise commit messages and PR descriptions to aid the review process.
