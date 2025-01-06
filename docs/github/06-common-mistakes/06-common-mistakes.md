---
title: Common mistakes in Git and Github
description: Git and Github mistakes
hide_table_of_contents: true
---

### 1. When you newly download the git into your machine firstly setup your `credential` then you will be able to work with git .

** Enter your github user-name**

```git
git config --global user.name "github_user_name"
```

** Enter your gmail that you used to create your github account**

```git
git config --global user.email "github_email"
```

** To recheck whatever credential you have entered**

```git
git config --list
```

### 2. Always use `git bash` for the npm command.

<img src="/github/git.webp" width="500px" />

### 3. Always make sure you have saved all the changes then make `git pull`.

<img src="/github/gitpull.jpeg" width="500px" />

### 4. Always clone your own `repository`, not the one you `forked` from.

<img src="/github/push_denied.jpeg" width="500px" />
