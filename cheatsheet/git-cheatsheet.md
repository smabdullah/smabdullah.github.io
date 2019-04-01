## A basic git cheat sheet
----

**1. Configure user name and email address**
```
git config --global user.name "<name of the user>"
git config --global user.email "<user_email>"
```

**2. List the configuration information**
```
git config --list
```

**3. Ignore files and folders to be in the repository**
```
touch .gitignore
```
It creates a gitignore file and inside you can mention what to ignore. An example might be
```
*.pyc
folder_name/
my_cred.txt
```
Here, we want to ignore all pyc files, a folder and a text file.

**4. Init a local git repository**
```
git init
```

**5. Clone a repository**
```
git clone <clone_url> <where_to_clone>
```

**6. Add file to the staging area**
```
git add <file_name_to_stage>
or
git add --all
```

**7. Remove files from the staging area (back to the working directory)**
```
git reset <file_name>
or
git checkout <file_name>
```

**8. Commit**
```
git commit -m "<commit_message>"
```

**9. Push a branch**
```
git push -u origin <branch_name>
```

**10. Pull to the master branch**
```
git pull origin master
```

**11. Create a branch and move to that branch**
```
git branch <branch_name>
git checkout <branch_name>
```

**12. Merging a branch with the master branch**
```
# First, move to the master branch
git checkout master
# Pull the remote branch
git pull origin master
git merge <branch_to_merge>
# Push the changes to the remote master
git push -u origin master
```

**13. Delete a branch from local and remote repository**
```
# local delete
git branch -d <branch_name_to_delete>
# Delete from the remote
git push origin --delete <branch_name_to_delete>
```

**14. Move a commit from master branch to another branch**
```
# Grab first 5 to 6 chars from the hash of the wrong commit message
git log
git checkout <branch_name_where_the_commit_should_go>
git cherry-pick <copied_hash>

# Delete the commit from the master branch
git checkout master
# Get the hash of a stable commit
git log
# Option 1: Soft reset, removes the commit but keep all the changes
git reset --soft <stable_hash>

# Option 2: Moves the changes to the working direcory or staging area
git reset <stable_hash>

# Option 3: Delete the changes (carefull to use)
git reset --hard <stable_hash>
```

**14. Clean all the untracted files and directories**
```
git clean -df
```

**15. Changes without modifying git history**
```
git revert <stable_hash>
```

**16. Some other useful commands**
```
# List of local branches
git branch
# List of all (local+remote) branches
git branch -a
git status
git log
```
