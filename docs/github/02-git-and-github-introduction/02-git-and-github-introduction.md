---
title: Introduction to Git & GitHub
description: Learn the basics of Git and GitHub for version control and collaboration.
hide_table_of_contents: true
---

# Introduction to Git & GitHub

## What is Git?

Git is a **version control system (VCS)** that helps developers track changes in their code, collaborate efficiently, and manage their projects over time. It allows you to see who made changes, when they were made, and why they were made.

> **Git is a software tool used for tracking changes in code.**

## What is GitHub?

GitHub is a **web-based platform** that provides a centralized space to store, manage, and collaborate on code repositories. It offers features to review, contribute, and enhance projects in various programming languages.

> **GitHub is an online platform for hosting Git repositories and facilitating teamwork.**

## How to setup Git:

- **1-Step** visit `https://git-scm.com/downloads`

- **2-Step** Choose your appropriate Operating System.

   <img src="/github/02-git-and-github-introduction/10.png"  width="800px"/>

- **3-Step** Select your `OS architecture`.

   <img src="/github/02-git-and-github-introduction/11.png"  width="800px"/>

  - It will automatically start downloading Git.

  - Install it into your system.

## How to create Github account

- **1-Step** visit `https://github.com/`

- **2-Step** Click on `Sign up for 
GitHub`

  <img src="/github/02-git-and-github-introduction/01.png"  width="800px"/>
  <br/>

- **3-Step** Next you will be on the `Sign up` page.
- Fill in your details (`Email`, `Password`, `Username`) and click on `Continue` button.

   <img src="/github/02-git-and-github-introduction/2.png"  width="800px"/>

- **4-Step** It will ask you to `verify your account`, You see two options to verify your account.

  - Visual puzzle
  - Audio puzzle

- In my case i am clicking on `Visual puzzle` button.

   <img src="/github/02-git-and-github-introduction/3.png"  width="800px"/>

- **5-Step** Match the directions with the image. And click on `Submit` button.

  <img src="/github/02-git-and-github-introduction/3.png"  width="800px"/>

- **6-Step** After that you will be on `Email verification` page.

  <img src="/github/02-git-and-github-introduction/4.png"  width="800px"/>

- **7-Step** Check your `Email` that you have given in the `Sign up` page.

 <img src="/github/02-git-and-github-introduction/5.png"  width="800px"/>

- After filling the verification code , it will redirect you to `Login page`, Enter your `Username` and `Password` and click on `Sign in` button.

  <img src="/github/02-git-and-github-introduction/6.png"  width="800px"/>

- After that you will be on `Dashboard` page.

   <img src="/github/02-git-and-github-introduction/7.png"  width="800px"/>

- **8-Step** Now you are ready to use Github.

- Now Click on your profile picture in the top right-top corner.

  <img src="/github/02-git-and-github-introduction/8.png"  width="800px"/>
  <br/><br/>

# How to Connect Git Software and GitHub Account

To work with Git and GitHub together, you need to connect your local Git software with your GitHub account. This allows you to easily manage your code, collaborate with others, and keep your projects organized.

## Prerequisites

Before starting, ensure you have:

- **Git installed** on your computer. You can download it from [git-scm.com](https://git-scm.com/downloads).
- A **GitHub account**. If you don't have one, sign up at [github.com](https://github.com).

## How to Connect Git Software with GitHub Account

When you install Git and create a GitHub account, they don't automatically know about each other. Think of Git as your local tracking system and GitHub as your remote storage space - you need to introduce them to each other. This connection is essential because:

1. Git needs to know who you are when tracking changes
2. GitHub needs to verify that you have permission to push code to repositories
3. This connection ensures all your commits are properly attributed to your GitHub account

### Connecting Git to GitHub

### Step 1: Configure Your Identity

First, we need to tell Git who you are. This information will be attached to all your code changes (commits).

1. **Open the terminal** (Git Bash)
2. **Set your GitHub username** by running the command:

   ```bash
   git config --global user.name "YourGitHubUsername"
   ```

   Replace `YourGitHubUsername` with the username you created on GitHub.

### Step 2: Set Your Email

Next, configure the email associated with your GitHub account:

```bash
git config --global user.email "your-email@example.com"
```

This must be the same email you used to create your GitHub account..

### Step 3: Verify Your Configuration

To make sure everything is set up correctly:

```bash
git config --global --list
```

You should see your username and email listed in the output.

**Once these steps are completed, your Git software is successfully connected to your GitHub account. Now you can start tracking your projects, creating repositories, and collaborating with others.**

## How Git and GitHub Work Together

**Git helps you manage and track changes locally, while GitHub acts as a remote storage and collaboration hub. Together, they provide an efficient workflow for software development.**

## Differences Between Git and GitHub

Many people think Git and GitHub are the same, but they are different. Here is a simple comparison:

| Feature       | Git                                  | GitHub                             |
| ------------- | ------------------------------------ | ---------------------------------- |
| Definition    | A tool to track changes in code      | A website to store and share code  |
| Usage         | Works on your computer               | Works online via web               |
| Purpose       | Helps in managing code history       | Helps in collaboration and sharing |
| Storage       | Stores code locally on your computer | Stores code online (cloud)         |
| Collaboration | Limited to local machine             | Easy sharing with others           |
| Internet      | Does not need the internet           | Needs internet to work             |

**By using Git and GitHub together, developers can work on projects efficiently, track changes, and collaborate easily. Learning how they work will help you in school projects and future jobs.**
