---
title: Git and Github Commands
description: Git and Github Commands
hide_table_of_contents: true
---

## Git Commands

1. ### git init

The `git init` command is used to **initialize a new Git repository** in your project folder. This command is used once during the initial setup of a new repository.

2. ### git status

The `git status` command **displays the status** of your working project. It shows which files have been modified or staged and which files are untracked.

3.  ### git add

The `git add <filename>` command **adds new or changed files** in your working project to the Git staging area. You can add specific files by providing their filenames, or you can use `git add .` to add all changed files.

4. ### git commit

The `git commit` command is used to **record the changes** in the repository. Each commit includes a commit message that describes the changes made in that commit.

**Syntax :**

```html
git commit -m "commit message"
```

5. ### git push

The `git push` command is used to **upload local branch commits** to GitHub. It pushes your local changes to the remote repository on GitHub.

To push your code to GitHub using Git commands, follow these steps:

## Pushing Existing Code to a Git Repository

1. ### Initialize a Git repository:

If you haven't already done so, navigate to the root directory of your project using a command-line interface, and run the following command to initialize a Git repository:

```html
git init
```

2. ### Create a remote repository:

   Create a new repository on a Git hosting platform such as GitHub Follow the platform's instructions to set it up.

3. ### Add a remote repository:
   Link your local repository with the remote repository using the following command:

```html
 git clone <repository_url>
```

Replace <remote_repository_url> with the URL of the remote repository you created.

4. ### Add files to the staging area:
   Use the following command to add the existing code files to the staging area, which prepares them for committing:

```html
git add .
```

5. ### Commit the changes:
   Committing creates a new snapshot of the code in the Git history. Run the following command to commit the changes:

```html
git commit -m "Initial commit"
```

6. ### Push the code:
   Finally, push your code to the remote repository using the following command:

```html
git push
```

If you're using a branch other than `master`, replace `master` with the name of the branch.

Congratulations! You have successfully pushed your existing code to a Git repository.

## Connecting local Repository to Github Repository

1. ### use the following command to connect local repo to github repo

```html
git remote add origin <repository url>
```
2. ### use follwing command to push code

```html
git push
```
3. ### copy the command from terminal

```html
git push --set-upstream origin master
```
4. ### After adding this command on terminal your code will be pushed on github Repository

 Code added in Repositary  successfully.

5. ### After adding file modified changes can be added by using:

```html
git add .
git commit -m "changes message"
```
6. ### After adding and commiting changes push the changes

```html
git push
``` 
Then changes will be added successfully.



## Pushing New Code Directly to a Git Repository

1. ### Clone the repository:
   Start by cloning the existing repository to your local machine. Use the following command to clone the repository:

```html
git clone <repository_url>
```

Replace <repository_url> with the URL of the repository you want to clone.

2. ### Create or modify files:

   Create new code files or modify existing ones using your preferred code editor or IDE.

3. ### Add files to the staging area:
   Use the git add command to add the new or modified files to the staging area:

```html
git add .
```

4. ### Commit the changes:
   Commit the changes by running the following command:

```html
git commit -m "Commit message"
```

Replace **Commit message** with a descriptive message summarizing the changes made.

5. ### Push the code:
   Finally, push the new code to the remote repository using the following command:

```html
git push
```

Great job! You have now successfully pushed your new code directly to the Git repository.
