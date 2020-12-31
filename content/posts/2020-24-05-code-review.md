---
date: 2020-05-24
title: 'Code review'
template: post
thumbnail: '../thumbnails/code-review.jpg'
slug: code-review
categories:
  - Code
tags:
  - code review
---




There is a law attributed to Linus who started the Linux project. 

It says given enough eyeballs, all bugs are shallow. This means that the more people who look at the code, the more bugs are likely to be found. I teach a lot of classes, and my students catch my mistakes every time before I have a chance to find them myself. The process of letting other people look at your code and comment on it is called code review, and I highly recommend it as a central part of your development process. 

You'd be amazed how many bugs are caught and how many improvements people come up with.

There are many ways of doing code review, from sitting together in a room and going over the code to online tools where people comment on the changes you make to the code. No matter how you are doing it, it's important to remember that people are commenting on the code and not on you. Some people get very defensive when people comment on their code, and it makes the code review process very painful. Getting everyone to understand we're just trying to make the code better and fix issues, keeping everything technical and professional is a very important step in making code reviews effective. 

Some companies have checklists for code reviews, items like, did you run the test? Is the code easy to understand? Are there new dependencies? Et cetera. Try to think of such a list from your experience. 

In the world of hosted git, the most common way is to submit a pull request. This means that you work on a new feature in a branch, and once you're happy with the code, you create a pull request that people can comment on. Once the code looks in a good shape, the branch can be merged to the master branch where the production ready code is. 

Let's do a simple example. Assume we'd like to add more to the ReadMe file. Ideally, we'll have an issue system where we track bugs and tasks, but here, we'll just create a branch for this work. So, we'll do git checkout dash-B, better-readme. And now we're in a new git branch. We can see the kind of branch with git branch. I usually change the prompt of the terminal to show the current git branch, and if you're using a decent ID, it will show the current branch as well. Now we can do our work. Readme.md, "We're going to create "the best face recognition software there is, "even for ppl with glasses." We'll save the file. 

As before, we'll add the file, and git commit dash-M, better readme. And now, we are going to push our changes to the browser. The first time we push, git style has asked that we need to add a switch to tell it to create a new branch on the remote. So let's do what git tells us to do. We'll copy this line and run it. Now we can go to the branches page and pick our branch, and we can see our changes here. We see that Github shows us the new commit and lets us create a pull request. Click on the green button of Compare and Pull Request and write a description. And then, click on Create Pull Request button. 

We are now being redirected to the pull request page on Github. There, we can comment on the code, assuming we are not a team member. Click on Files Changed and view the changes. I don't like that people is not spelled correctly, so I'm going to leave a comment, "Change ppl to people." And I'm going to add a single comment, not start a review. 

Now back to the role of the initial developer, we're going to see the comment and fix the code. We'll edit ReadMe again, and instead of ppl, we're going write the full spelling of people, and save. And again, add and say that it's a spelling fix, and push. Now, let's get back to the Github page, and you refresh the page. 

We will see now that our changes are there. Once we are happy with the changes, we click back on the Conversation tab, and click Merge Pull Request, and confirm the merge. The changes are merged to the master branch, but currently only on the server. Bring them to your machine by switching to master branch and pulling.

Git checkout master, and git, and if you look at ReadMe now, we will see our changes. That's about it. Seems like a lot of work for a small change, but I think you'll find code reviews are very effective, and they will make your code much better. Another great bonus of code reviews is that you learn tips and tricks from other developers and become better at what you do.

During a code review, we have the author and the reviewer. It can sometimes feel like a really dangerous game of ping pong as biting comments are sent back and forth about the code, but it doesn't have to be that way. Both sides of the table can work together to make it more enjoyable. 

Meet Ahmed and Josh. Let's sit in on one of their code reviews. See if you can spot some of the ways they both drop the ball. - Okay, let me quickly go through this. Hm, that doesn't make sense. We never use this method anymore. What's up with using old methods? What? This doesn't match the description the acceptance criteria. Wrong, did you even read ticket? Wow. Why in the world would he use nested for loops to handle this? (exhales) Nested for loops? Really, dude? Not cool. Done. - What? Really old method. Did I read the ticket? What did-- I hate when this guy reviews my code. He thinks that he knows everything, but he doesn't. This method is not old. We use it in three other places in the app. Or did you not check? Our PM sent out the criteria in the Slack chat yesterday. I guess you didn't see it. Okay, wow. I'm not even going to respond to this one. - That didn't go well. Both Josh and Ahmed were annoyed with the exchange. 

Let's see how we can do better. We'll start with Josh. Instead of being antagonistic, he could've been more empathetic. If it was his code, what type of comments would he have wanted? Definitely not the ones he sent. 

Here are a few tips to keep in mind when leaving comments in a PR. Include at least one positive comment. Something like, cool use of extension functions. Include yourself. Why do we want to do this here? Comment in the form of a question. Have you been able to test this against staging? Focus on the code, not the person. This line confuses me. Is it meant to cue the work? Notice the difference? This is very non threatening and inviting. 

Now over to Ahmed. It's hard to have someone critique your work, but try not to take it personally. The focus of the review is the code and the sharing of knowledge, not you as a person. If a particular comment or question rubs you the wrong way, first assume best intent and then pose a follow up question to really draw out what the reviewer meant. And after they've taken the time to add comments to your code, it's best practice to acknowledge each comment even if it's a simple thumbs up. This lets them know that you've seen the comment and you've taken note or will address it. 

Let's see how both Ahmed and Josh put these tips into practice. - Okay, let me review this. Nice work with the refactor here. I didn't think this method was still in use, is there a reason we chose it here? I see a discrepancy with the implementation and acceptance criteria. Did something change? Did we consider any alternatives to the nested for loops? I've really been liking the standard libs collection functions. - Okay, cool. 

He appreciates the work that I put into refractory in that one class. Let me acknowledge that. I'm going to-- oh yeah the method I used for the report class. We use this method in a few other places in the app and this method doesn't trigger any of the events that we need for this ticket. Okay. Okay, great. Good catch. 

Our PM changed the criteria in the Slack chat yesterday. I'll ping her to update the criteria. And this one, okay. I didn't know that the standard lib had those collection functions. Okay, thanks. I'm still getting familiar with the standard lib. Perfect. - Much better. We want to have multiple pairs of eyes on our code to help find issues. Code reviews give us this power so use these techniques to make your next code review a frustration free one.