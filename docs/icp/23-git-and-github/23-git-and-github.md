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

<img src="/icp/23/step-7.jpeg" alt="step-7" width="600px"/>

### Repository (Repo)

In short, a `repo` in GitHub stands for a `repository`. It is a central location where you can store your source code and related files for a specific project.

### Steps to Create Repository

1. In the upper-right corner of gitHub page, use the + drop-down menu, and select New repository.

<img src="/icp/23/img-1.png" alt="img-1" width="600px"/>

2. Enter name for your repository. **For example** - `sample`

<img src="/icp/23/img-2.png" alt="img-2" width="600px"/>

3. Choose a repository visibility.(Private / Public)

<img src="/icp/23/img-3.png" alt="img-3" width="600px"/>

:::tip
Always keep your repository public.
:::

4. Click on `Create repository` button for creating your repo.

<img src="/icp/23/img-4.png" alt="img-4" width="600px"/>

5. You show your empty repo like this.

<img src="/icp/23/img-5.png" alt="img-5" width="600px"/>

6. Open your Git Bash and paste the following code.

<img src="/icp/23/img-6.png" alt="img-6" width="600px"/>

```html
git clone https://github.com/yogita-s-24/sample.git
```

<img src="/icp/23/img-8.png" alt="img-8" width="600px"/>

:::tip
You enter your link which available on your repo.
:::

7. See on your desktop `sample` folder will be created.

<img src="/icp/23/img-7.png" alt="img-7" width="600px"/>

## Account Setup credentials

1. Globally Set User = `git config --global user.name "RTC 4U"`

2. Globally Set Email = `git config --global user.email "email"`

## Git commands

#### 1. git init

```html
git init
```

**git init** command are used to initialize git repository to in your normal folder. To create a new repo, you use the **git init** command. This command is one-time you use during a new repository initial setup.

#### 2. git status

```html
git status
```

**git status** command display the status of your working project.

#### 3. git add `<filename>`

```html
git add index.html
```

The git add `<filename>` command adds new or changed files in your working project to the git staging area.

#### 4. git commit

**git commit** command are used to record the changes in the repository. Every commit contain commit message.

**Syntax :**

`git commit -m "<commit message>"`

```html
git commit -m "first commit"
```

#### 5. git push

```html
git push
```

`git push` command are used to upload all local branch commit to GitHub.

Now that you have created your GitHub account, you can proceed to push your code to a GitHub repository using **Git commands**.

### How to push your code to GitHub using git commands?

### create a new repository on the command line

```html
echo "# sample" >> README.md git init git add README.md git commit -m "first
commit" git branch -M main git remote add origin
https://github.com/yogita-s-24/sample.git git push -u origin main
```

:::tip
You can used your repository commands.
:::

### push an existing repository from the command line

```html
git remote add origin https://github.com/yogita-s-24/sample.git git branch -M
main git push -u origin main
```

These commands are available on your repo we can use these commands to push your code in this created repo.

### How to add your code in existing repo

Open a terminal or command prompt on your computer.

1. Initialize a new Git repository in your project folder using the `git init` command.

<img src="/icp/23/img-9.png" alt="img-9" width="600px"/>

2. Add this command.

```html
git remote add origin https://github.com/yogita-s-24/sample.git
```

3. Add this command.

```html
git branch -M main
```

4. Add this command.

```html
git push -u origin main
```

5. Add the files in your local repository to the git staging area using the `git add .` command. When you can change multiple files in this case you use this command `git add . `. You can also add a specific file. In this case you can used this command `git add index.html`

```html
git add .
```

6. Commit the changes with a descriptive message using the `git commit` command. This creates a new commit with the added files.

```html
git commit -m "First commit"
```

7. Finally, push your code to GitHub using the `git push` command. This uploads your local branch commits to the GitHub repository.

```html
git push
```

<img src="/icp/23/img-10.png" alt="img-10" width="600px"/>

8. Go to your GitHub account, fresh your page and see your result.

<img src="/icp/23/img-11.png" alt="img-11" width="600px"/>
