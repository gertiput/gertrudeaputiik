---
date: 2020-01-16
title: 'Git commands'
template: post
thumbnail: '../thumbnails/git.jpg'
slug: git-commands
categories:
  - Code
tags:
  - git
  - github
 
--- 




# Git Commands

A list of my commonly used Git commands.

## Getting & Creating Projects


| Command	                                                            | Description   |        
| -------------                                                         |:-------------:| 
| git init                                                              | Initialize a local Git repository| 
| git clone ssh://git@github.com/[username]/[repository-name].git       | Create a local copy of a remote repository      |   

## Basic Snapshotting

| Command                       | Description                                        | 
| -------------                 | :-------------:                                    | 
| git status                    | Check status                                       | 
| git add [file-name.txt]       | Add a file to the staging area                     |   
| git add -A                    | Add all new and changed files to the staging area  |  
|git commit -m "[commit message]| Commit changes                                     |
|git rm -r [file-name.txt]      | Remove a file (or folder)                          |

## Branching & Merging

| Command                               | Description                                            | 
| -------------                         |:-------------:                                         | 
| git branch                            | List branches (the asterisk denotes the current branch)| 
| git branch -a                         | List all branches (local and remote)                   |   
| git branch [branch name]              | Create a new branch                                    |    
| git branch -d [branch name]           | Delete a branch                                        |
| git push origin --delete [branch name]| Delete a remote branch                                 |
| git checkout -b [branch name]         | Create a new branch and switch to it                   |
| git checkout -b [branch name] origin/[branch name] | Clone a remote branch and switch to it    |
| git branch -m [old branch name] [new branch name]  | Rename a local branch                     |
| git checkout [branch name]            | Switch to a branch                                     |
| git checkout -                        | Switch to the branch last checked out                  |
| git checkout -- [file-name.txt]       | Discard changes to a file                              |
| git merge [branch name]               | Merge a branch into the active branch                  |
| git merge [source branch] [target branch | Merge a branch into a target branch                 |
| git stash                             | Stash changes in a dirty working directory             |
| git stash clear                       | Remove all stashed entries                             |


## Sharing & Updating Projects

| Command                                            | Description                                  | 
| -------------                                      |:-------------:                               | 
| git push origin [branch name]                      | Push a branch to your remote repository      | 
| git push -u origin [branch name]     | Push changes to remote repository (and remember the branch)|
| git push                             | Push changes to remote repository (remembered branch)      |
| git push origin --delete [branch name] | Delete a remote branch                                   |
| git pull                             | Update local repository to the newest commit               |
| git pull origin [branch name] | Pull changes from remote repository                               |
|git remote add origin ssh://git@github.com/[username]/[repository-name].git |Add a remote repository||git remote set-url origin ssh://git@github.com/[username]/[repository-name].git |Set a repository's origin branch to SSH|

## Inspection & Comparison


| Command                                 | Description                                        | 
| -------------                           | :-------------:                                    | 
| git log	                              | View changes                                       | 
| git log --summary                       | View changes (detailed)                            |   
| git add -A                              | Add all new and changed files to the staging area  |  
| git diff [source branch] [target branch]| git diff [source branch] [target branch]           |


 If you are interested in my Git aliases, have a look at my .bash_profile, found here:

## General Aliases
```
alias ls='ls -GFha '
alias cdg='cd ~/git '
alias st='open -a "Sublime Text" '
alias bp='st ~/.bash_profile '
alias trash='rm -rf ~/.Trash/* '
```
## Git Aliases
```
alias get='git '
alias gut='git '
alias got='git '
alias g='git '
alias gi='git init '
alias gs='git status -sb '
alias ga='git add '
alias gc='git commit -m '
alias gac='ga -A && gc '
alias gp='git push '
alias gpo='git push origin '
alias gpom='git push origin master'
alias gr='git rm -r '
alias gb='git checkout -b '
alias gc-='git checkout - '
alias gd='git diff '

function gcl {
	git clone ssh://git@github.com/$1/$2.git;
}

function gacp {
	git add -A;
	git commit -m "$1";
	git push origin $2;
}
```
## Rename Terminal Window - Usage: wn 'window name'
```
function wn {
	printf "\e]2;$1\a"
}
```
## Rename Terminal Tab - Usage: tn 'tab name'
```
function tn {
	printf "\e]1;$1\a"
}
```
## Customize Terminal Prompt - Shows: username/../folder:
```
export PS1='\n\u/../\W/: '
```
##  Add Colour
```
export CLICOLOR=1
export LSCOLORS=GxFxCxDxBxegedabagaced
```
