---
title: Git and Github
description: Git and Github
hide_table_of_contents: true
---

# Introduction to Git & GitHub

## Git

Git is a software is also known as **Version Control System**. Git is used for to **track Code changes**, **who made changes** , **project collaboration**, **history explanation** and **manages code**.

## GitHub

GitHub is designed for developers. GitHub is a code hosting platform that hosts projects in different programming languages and keep track of changes made. GitHub are useful for To store Codebase. Other can also review your code. Most importantly, it is free and open source.

## Steps to Create Account in GitHub

1. Open GitHub Website 👉 [Click Here to Open GitHub Website](https://github.com)
2. Click Sing up

<img src="/icp/23/step-1.png" alt="step-1" width="600px"/>

3. Enter Your Email

<img src="/icp/23/step-2.png" alt="step-2" width="600px"/>

4. Create password

<img src="/icp/23/step-3.png" alt="step-3" width="600px"/>

5. Enter username

<img src="/icp/23/step-4.png" alt="step-4" width="600px"/>

6. Click the Create an account button.

<img src="/icp/23/step-5.png" alt="step-5" width="600px"/>

7. Complete the CAPTCHA puzzle.

<img src="/icp/23/step-6.png" alt="step-6" width="600px"/>

8. Click the Verify email address button in the message from GitHub.

## Repository (Repo)

It is a Folder where we can upload Code for specific Project.

## Steps to Create Repository

1. In the upper-right corner of gitHub page, use the + drop-down menu, and select New repository.

<img src="/icp/23/img-1.png" alt="img-1" width="600px"/>

2. Enter name for your repository. For example, "Sample".

<img src="/icp/23/img-2.png" alt="img-2" width="600px"/>

3. Choose a repository visibility.(Private / Public)

<img src="/icp/23/img-3.png" alt="img-3" width="600px"/>

4. Click Create repository.

<img src="/icp/23/img-4.png" alt="img-4" width="600px"/>

5. Upload Your Files.

<img src="/icp/23/img-5.png" alt="img-5" width="600px"/>

6. Choose Your File.

<img src="/icp/23/img-6.png" alt="img-6" width="600px"/>

7. Click Commit Changes Button.

<img src="/icp/23/img-7.png" alt="img-7" width="600px"/>

## Account Setup credentials

1. Globally Set User = `git config --global user.name "RTC 4U"`

2. Globally Set Email = `git config --global user.email "email"`

## Git commands

1. **`git init`**

`git init` command are used to Initialize Git repository to in your normal folder. To create a new repo, you use the `git init` command. This command is one-time you use during a new repository initial setup.

> `.git ` File = It stores all the history related to your repo.

2. **`git status`**

`git status` command display the status of your working project.

3. **`git add <filename>`**

The `git add <filename>` command adds new or changed files in your working project to the Git staging area.

4. **`git commit`**

`git commit` command are used to record the changes in the repository. Every commit contain commit message.

**Syntax :**

`git commit -m "<commit message>"`

5. **`git push`**

`git push` command are used to uploads all local branch commit to GitHub.

## How to push your code to GitHub using git commands?

Step 1 - Create a new GitHub Repository

Step 2 - Initialize Git repository

`git init`

Step 3 - Add files in your local repository.

`git add <filename>`

Step 4 - Commit the file that you have add in your repository.

`git commit -m "first commit"`

Step 5 - Add remote origin

`git remote add origin https://github.com/vaibhavihole31/my-portfolio.git`

Step 6 - Push to GitHub

`git push -u origin main`
