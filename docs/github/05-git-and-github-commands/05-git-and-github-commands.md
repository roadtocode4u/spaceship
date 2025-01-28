---
title: Git and Github Commands
description: Git and Github Commands and Connecting Git and GitHub.
hide_table_of_contents: true
---

### How to create git repository and connect local repository to github repository:

**1-Step**: Login to your github account.

**2-Step**: Click on your profile picture.

- <img src="/github/05/01.png"  width="800px"/>

**2-Step**: Click on `Your repositories` section, After you will see your repositories. Click on `New repository` button or click on `+` sign.

- <img src="/github/05/02.png"  width="800px"/>

**3-Step**: Give a name to your repository, Provide a description (optional), want to keep your repository private or public select the option and click on `Create repository` button.

- <img src="/github/05/03.png"  width="800px"/>

**3-Step**: After you will see your repository page.

- <img src="/github/05/04.png"  width="800px"/>

### Use the following command to connect local repo to github repository.

**1-Step**: Go to your local folder and open that folder in `vs-code`.

**2-Step**: Open terminal and use the following command to connect local repo to github repository.

- **git init** : Initialize a new `Git repository` in your project folder. (It is used to convert your folder to a Git repository. This command is used once during the initial setup of a new repository. )

- <img src="/github/05/05.png"  width="800px" />

- **git status**: The `git status` command **displays the status** of your working project. It shows which files have been modified or staged and which files are untracked.

- <img src="/github/05/06.png"  width="800px" />

- ** git add **: Add new changes or changed file in git staging (keep track of changes) area, (if you want to see changes in staging area then use `git status` command it will show you the changes in green color).

- <img src="/github/05/07.png"  width="800px" />

- **git commit**: The `git commit -m "commit message"` command is used to **record the changes** in the repository. Each commit includes a commit message `message should be in double or single quotes` that describes the changes made in that commit.

- <img src="/github/05/08.png"  width="800px" />

- **git push**: The `git push` command is used to **upload local branch commits** to GitHub. It pushes your local changes to the remote repository on GitHub.(Before you push your code to the github repository you have to connect your local repository to github repository, if you push your code without connecting your local repository to github repository then it will not push your code to github repository it will show you warning).

- <img src="/github/05/09.png"  width="800px" />

- ** Go back to `Github repository` that you have created in **step 1\*\*, you will see your repository and two section of the instruction

  - ...or create a new repository on the command line.
  - or push an existing repository from the command line.

- You have to copy each and every command from the 2nd section of the instruction.

- <img src="/github/05/10.png"  width="800px" />

- **git remote add origin "your repository link"**: The `git remote add origin "your repository link"` command is used to **add a remote repository** to your local repository.

```html
git remote add origin "your repository link"
```

- **git branch -M main**: The `git branch -M main` command is used to **rename the default branch from master to main**.

```html
git branch -M main
```

- **git push -u origin main**: The `git push -u origin main` command is used to **push the local commits to the remote repository**.

```html
git push -u origin main
```

!

#### If you are these all for the first time then you will see a pop up window like this:

- It ask you to sign in to your github account, click on `signin with your browser` button

  - <img src="/github/05/11.png"  width="800px" />

#### Next you will see these interface in your browser:

- Click on `Authorize git ecosystem ` button.

- <img src="/github/05/12.png"  width="800px" />

### Congratulation you have successfully Pushed your code to your github repository.
