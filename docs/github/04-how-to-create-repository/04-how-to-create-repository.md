# Create a Repository on GitHub

A **repository (repo)** is like a special folder on GitHub where you store your project files and track their changes.  
You can think of it as your project’s **online home**.

This guide will help you create a new repository on GitHub and connect it with Git on your computer.

## 🚀 Steps to Create a Repository

### 🪜 Step 1: Go to GitHub and Create a New Repository

1. On the GitHub page, click the **+** icon in the upper-right corner and select **New repository**.  
   <img src="/github/04-images/new-repository.png" alt="img-1" width="800px"/>

---

### 🪜 Step 2: Enter Repository Name

2. Type a name for your repository — for example, **My_New_Repo**.  
   <img src="/github/04-images/repository-name.png" alt="img-2" width="600px"/>

---

### 🪜 Step 3: Choose Repository Visibility

3. Choose whether your repository should be:

   - **Public** – anyone can see your code
   - **Private** – only you (and selected people) can access it

   <img src="/github/04-images/public-mode.png" alt="img-3" width="600px"/>

:::tip
💡 For learning or practice, it’s best to keep your repository **public**.
:::

---

### 🪜 Step 4: Create the Repository

4. Click the **Create repository** button to finish.  
   <img src="/github/04-images/create-repository.png" alt="img-4" width="600px"/>

You’ll now see an **empty repository page** on GitHub.  
 <img src="/github/04-images/created-new-repo.png" alt="img-5" width="600px"/>

---

## 🔗 Step 5: Clone the Repository to Your Computer

Cloning means downloading a copy of your GitHub repository to your local computer so you can work on it.

1. Copy the repository link from GitHub.  
   <img src="/github/04-images/repo-url.png" alt="img-6" width="600px"/>

2. Open **Git Bash** on your computer and run the command below:

```bash
git clone <repository-link>
```

🟢 Replace `<repository-link>` with your actual repository link.

**Example:**

```bash
git clone https://github.com/siddhi-codes/My_New_Repo.git
```

   <img src="/github/04-images/clone-to-desktop.png" alt="img-8" width="600px"/>

3. After cloning, you’ll see a new folder (for example, **My_New_Repo**) on your computer.
   <img src="/github/04-images/cloned-on-desktop.png" alt="img-7" width="600px"/>

---

# ⚙️ Before You Create a Repository

Before creating a repository on GitHub, make sure you have the following setup completed:

✅ **1. GitHub Account:**
You must have a registered account on [GitHub](https://github.com/).

✅ **2. Git Installed on Your Computer:**
Download and install Git from [https://git-scm.com/](https://git-scm.com/).
You can verify it using this command:

```bash
git --version
```

✅ **3. Git Connected to GitHub:**
Your Git software should be connected to your GitHub account using:

```bash
git config --global user.name "YourGitHubUsername"
git config --global user.email "your-email@example.com"
```
