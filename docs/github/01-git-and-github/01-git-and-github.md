---
title: Git and Github
description: Git and Github
hide_table_of_contents: true
---

# Introduction to Git & GitHub

## Git

Git is a **version control system** that allows you to track changes to your code, collaborate with others, and manage your codebase. It helps you keep a record of who made changes, when they were made, and why they were made.

## GitHub

GitHub is a web-based hosting platform designed for developers. It provides a centralized location to store your code repositories and enables collaboration among team members. GitHub supports projects in various programming languages and allows others to review and contribute to your code. It is a free and open-source platform, making it widely used and popular among developers.

## Steps to Create an Account on GitHub

1. Open the GitHub website by visiting [Click Here to Open GitHub Website](https://github.com)
2. Click on the **Sign up** button.

<img src="/icp/23/step-1.png" alt="step-1" width="600px"/>

3. Enter your email address.

<img src="/icp/23/step-2.png" alt="step-2" width="600px"/>

4. Create a strong and secure password.

<img src="/icp/23/step-3.png" alt="step-3" width="600px"/>

5. Choose a unique username for your GitHub account.

<img src="/icp/23/step-4.png" alt="step-4" width="600px"/>

6.Click the **Create an account** button.

<img src="/icp/23/step-5.png" alt="step-5" width="600px"/>

7. Complete the CAPTCHA puzzle to verify that you are a human.

<img src="/icp/23/step-6.png" alt="step-6" width="600px"/>

8. Check your email for a message from GitHub and click the **Verify email address** button.

<img src="/icp/23/step-7.jpeg" alt="step-7" width="600px"/>

### Repository (Repo)

In GitHub, a repository, or "repo" for short, is a central location where you can store your source code and related files for a specific project.

### Steps to Create Repository

1. On the GitHub page, click on the **+** drop-down menu in the upper-right corner and select **New repository**.

<img src="/icp/23/img-1.png" alt="img-1" width="600px"/>

2. Enter a name for your repository, for example, **sample**.

<img src="/icp/23/img-2.png" alt="img-2" width="600px"/>

3. Choose the visibility of your repository (private or public).

<img src="/icp/23/img-3.png" alt="img-3" width="600px"/>

:::tip
It is recommended to keep your repository public.
:::

4. Click the **Create repository** button to create your repository.

<img src="/icp/23/img-4.png" alt="img-4" width="600px"/>

5. You will see an empty repository page.

<img src="/icp/23/img-5.png" alt="img-5" width="600px"/>

6. Open your Git Bash (command line) and run the following command, replacing `<repository-link>` with the link available on your repository:

<img src="/icp/23/img-6.png" alt="img-6" width="600px"/>

```html
git clone <repository-link>
```

<img src="/icp/23/img-8.png" alt="img-8" width="600px"/>

:::tip
Replace `<repository-link>` with the actual link available on your repository 
:::

7. You will see a new folder named **sample** on your desktop.

<img src="/icp/23/img-7.png" alt="img-7" width="600px"/>

## Account Setup Credentials

To set up your account credentials for Git, follow these steps:

1. Open a terminal or command prompt.

2. Set your username globally using the command:
 
 ```html
git config --global user.name "Your Username"
 ```

3. Set your email globally using the command:

 ```html
git config --global user.email "your-email@example.com"
 ```

## Git Commands

1. `git init`

The `git init` command is used to initialize a new Git repository in your project folder. This command is used once during the initial setup of a new repository.

2. `git status`

The `git status` command displays the status of your working project. It shows which files have been modified or staged and which files are untracked.

3.  `git add <filename>`

The `git add <filename>` command adds new or changed files in your working project to the Git staging area. You can add specific files by providing their filenames, or you can use `git add .` to add all changed files.

4. `git commit`

The `git commit` command is used to record the changes in the repository. Each commit includes a commit message that describes the changes made in that commit.

**Syntax :**

```html
git commit -m "commit message"
```

5. `git push`

The `git push` command is used to upload local branch commits to GitHub. It pushes your local changes to the remote repository on GitHub.

To push your code to GitHub using Git commands, follow these steps:

### Pushing Existing Code to a Git Repository

1. **Initialize a Git repository:** If you haven't already done so, navigate to the root directory of your project using a command-line interface, and run the following command to initialize a Git repository:

```html
git init
```

3. **Create a remote repository:** Create a new repository on a Git hosting platform such as GitHub Follow the platform's instructions to set it up.

3. **Add a remote repository:** Link your local repository with the remote repository using the following command:

```html
git remote add origin <remote_repository_url>
```

Replace <remote_repository_url> with the URL of the remote repository you created.

4. **Add files to the staging area:** Use the following command to add the existing code files to the staging area, which prepares them for committing:

```html
git add .
```

5. **Commit the changes:** Committing creates a new snapshot of the code in the Git history. Run the following command to commit the changes:

```html
git commit -m "Initial commit"
```

6. **Push the code:** Finally, push your code to the remote repository using the following command:

```html
git push
```
If you're using a branch other than `master`, replace `master` with the name of the branch.

Congratulations! You have successfully pushed your existing code to a Git repository.

### Pushing New Code Directly to a Git Repository

1. **Clone the repository:** Start by cloning the existing repository to your local machine. Use the following command to clone the repository:

```html
git clone <repository_url>
```
Replace <repository_url> with the URL of the repository you want to clone.

2. **Create or modify files:** Create new code files or modify existing ones using your preferred code editor or IDE.

3. **Add files to the staging area:** Use the git add command to add the new or modified files to the staging area:

```html
git add .
```
4. **Commit the changes:** Commit the changes by running the following command:

```html
git commit -m "Commit message"
```
Replace **Commit message** with a descriptive message summarizing the changes made.

5. **Push the code:** Finally, push the new code to the remote repository using the following command:

```html
git push
```

Great job! You have now successfully pushed your new code directly to the Git repository.