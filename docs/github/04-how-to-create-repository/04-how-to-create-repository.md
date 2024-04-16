---
title: How to Create Repositary
description: How to Create Repositary
hide_table_of_contents: true
---

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
git clone <repository-link></repository-link>
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
