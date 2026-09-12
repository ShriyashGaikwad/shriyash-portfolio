# How to Add a Portfolio Website to GitHub Using VS Code

This guide explains how to connect a local portfolio website folder to GitHub and upload the files using VS Code.

## GitHub Repository

My GitHub repository:

https://github.com/ShriyashGaikwad/shriyash-portfolio.git

---

## 1. Open the Portfolio Folder in VS Code

1. Open VS Code.
2. Go to **File → Open Folder**.
3. Select your portfolio website folder.

Example:

```text
shriyash-portfolio/
├── index.html
├── style.css
├── script.js
├── images/
└── ...
```

---

## 2. Open the VS Code Terminal

Use:

```text
Ctrl + `
```

or go to:

**Terminal → New Terminal**

Make sure the terminal is opened inside your portfolio folder.

---

## 3. Check Whether Git Is Installed

Run:

```bash
git --version
```

If Git is installed, you will see something similar to:

```text
git version 2.x.x
```

---

## 4. Configure Git

If this is your first time using Git on this computer, configure your name and email:

```bash
git config --global user.name "Shriyash Gaikwad"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

You only need to do this once.

---

## 5. Initialize Git in the Portfolio Folder

Run:

```bash
git init
```

This creates a local Git repository inside your portfolio folder.

---

## 6. Create a .gitignore File

Before uploading your project, create a file named:

```text
.gitignore
```

For a normal web project, you can add:

```gitignore
node_modules/
.env
```

Do not upload passwords, API keys, database credentials, or other secrets to GitHub.

---

## 7. Check Your Git Status

Run:

```bash
git status
```

This shows the files Git can track.

---

## 8. Add Your Portfolio Files

Run:

```bash
git add .
```

The `.` means all files and folders in the current project will be staged.

Check again:

```bash
git status
```

---

## 9. Create Your First Commit

Run:

```bash
git commit -m "Initial portfolio website"
```

A commit saves a version of your project in Git.

---

## 10. Connect the Local Project to GitHub

Your GitHub repository is:

```text
https://github.com/ShriyashGaikwad/shriyash-portfolio.git
```

Run:

```bash
git remote add origin https://github.com/ShriyashGaikwad/shriyash-portfolio.git
```

Check that the connection was added:

```bash
git remote -v
```

You should see:

```text
origin  https://github.com/ShriyashGaikwad/shriyash-portfolio.git (fetch)
origin  https://github.com/ShriyashGaikwad/shriyash-portfolio.git (push)
```

---

## 11. Rename the Main Branch to main

Run:

```bash
git branch -M main
```

---

## 12. Push the Portfolio to GitHub

Run:

```bash
git push -u origin main
```

GitHub may ask you to sign in or authenticate.

After successful authentication, your portfolio files will be uploaded to GitHub.

---

# Complete Command Sequence

If your GitHub repository is empty, the complete sequence is:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/ShriyashGaikwad/shriyash-portfolio.git
git push -u origin main
```

---

# If You Make Changes Later

After modifying your portfolio, you do NOT need to repeat `git init` or `git remote add origin`.

Just run:

```bash
git add .
git commit -m "Update portfolio"
git push
```

For example:

```bash
git add .
git commit -m "Updated portfolio design"
git push
```

---

# Useful Git Commands

### Check current status

```bash
git status
```

### See connected GitHub repository

```bash
git remote -v
```

### See commit history

```bash
git log --oneline
```

### Add all changes

```bash
git add .
```

### Save changes

```bash
git commit -m "Your message"
```

### Upload changes to GitHub

```bash
git push
```

### Download the latest changes from GitHub

```bash
git pull
```

---

# Common Problem: Remote Already Exists

If you get:

```text
error: remote origin already exists.
```

Do not run `git remote add origin` again.

Check the existing URL:

```bash
git remote -v
```

If it is incorrect, replace it with:

```bash
git remote set-url origin https://github.com/ShriyashGaikwad/shriyash-portfolio.git
```

Then push:

```bash
git push -u origin main
```

---

# Common Problem: Push Rejected

If GitHub already contains a README or another commit and you get a message such as:

```text
rejected
```

or:

```text
failed to push some refs
```

do not immediately force push.

First run:

```bash
git pull origin main --allow-unrelated-histories
```

If Git reports a merge conflict, resolve the conflict in VS Code.

Then:

```bash
git add .
git commit -m "Merge GitHub repository"
git push -u origin main
```

---

# Important Safety Rules

Never upload:

```text
.env
passwords
API keys
database passwords
private credentials
node_modules/
```

Use `.gitignore` to prevent sensitive or unnecessary files from being uploaded.

---

# Final Workflow to Remember

Whenever you create or modify your portfolio:

```text
Write/Edit Code
      ↓
git status
      ↓
git add .
      ↓
git commit -m "message"
      ↓
git push
      ↓
GitHub
```

Your portfolio GitHub repository:

**https://github.com/ShriyashGaikwad/shriyash-portfolio.git**
