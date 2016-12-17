---
layout: post
title:  "The Return Statement"
date:   2016-12-17 15:02:54 -0500
categories: recurse_center programming
---
My 12 weeks at the Recurse Center have come to a close. So, now I write the classic "return statement" to summarize my experiences at RC.

## Learning

RC is supposed to be a place where you go become "a better programmer", and I am absolutely certain that I have accomplished that.

#### I learned to read documentation.

When I first started, I painfully got through the tutorials for React. I had no idea what I was doing, and in a sense was randomly digging around. Now, I am comfortable picking up a new library in no time. In my final week, I started using p5 and threejs for a simple project.

#### I learned how to ask for help.

I learned how to give help. In the second half of my batch, I began to field questions, primarily about Javascript. As the Winter 1 batch came into the space, I became _a person to go to for Javascript help_.

It became more clear to me how I learned to ask for help as well. We were sitting at the dining room table on the last day. One of my roommates has been teaching herself to program. She was stuck on an Advent of Code problem. Her words were (as I remember) "Is there a tutorial on Regular Expressions? I don't understand it. I am doing something wrong." Instead of recommending a tutorial, I suggested that we look at it together. It was evident she had worked with regular expressions and this was just an off-by-one error, using `[1-9]` instead of `[0-9]`. Then, I realized that I was that same person at one point not that long ago. And now, I am much more comfortable asking for questions instead of spending countless hours on my own fixing something so trivial.

#### I learned how to read other people's code and learn from it.

When I first looked at the code base for [rc-locos](https://github.com/rc-locos/rc-locos), I was overwhelmed. I was lucky enough to have [Joe](https://github.com/jjinking) walk me through the parts that were confusing and help me set up my Python dev environment.

My first open source project was [Zulip Mobile](https://github.com/zulip/zulip-mobile). Luckily, the project leader was in town, so having that personal connection really helped in getting my first Pull Request.

Code Dojos were great for pairing with others and seeing how others styled their code. Even simple things like `i++` vs `++i` and using `parseInt` vs `Number`. [Jon](https://github.com/newtang) and I did a coding bee together, in which we took turns saying one letter to make up a program. Understanding the syntax differences we each preferred help us understand how to finish each other's ~~sentences~~statements.

[Advent of Code](http://adventofcode.com/) problems were a lot of fun. It was useful to compare solutions with others after I had solved them. I even convinced several of my roommates to participate.

#### I learned to identify as a "programmer."

Through the many social interactions in the past three months, I realized that I am a programmer. I feel much more confident in my abilities. I've always felt like an [impostor](https://en.wikipedia.org/wiki/Impostor_syndrome). Being in this community has made be feel much less so. I learned to talk to other programmers, use the language in which they communicate. Through weekly presentations, I can already see my progress in how much I now understand. It is hard to quantify what this means (even though I try to do so in the next section), but it is also one of the best things I have gotten out of RC.

## Can you assign a number to it? (Stats)

During my time at RC, I was lucky to have the opportunity to listen to and talk to [r0ml](https://github.com/r0ml). Although I don't agree with everything he has to say, he did challenge some of the foundational ideas I have/had about programming. "Can you assign a number to it?" is a question of whether it is worth measuring and whether that number is meaningful. Here are some of the ways I can quantify what I have accomplished in the last three months, although that quantification may not be meaningful.

In the past three months, I have spent __600+ hours__ at RC. While some of those hours were not productive coding hours, they are balanced by the hours I spent outside of RC programming at the same time. To follow the [10,000 Hour Rule](http://gladwell.com/outliers/the-10000-hour-rule/), I am 6% of the way there to become an expert.

I've made __272 contributions__ on [GitHub](https://github.com/hsubox). Before RC, I would actively avoid using the command line, but thanks to the RC community, I quickly picked it up and began to version-control my code.

I've also attended __22+ evening/social events__ at RC and __2 meetups__. RC was a period in my life in which I actively tried to be considerably more extroverted than I actually am.

It has been a time of collaboration. I've attended __8 Code Dojos and 1 Design Dojo__, successfully submitted __3 Pull Requests__ to open source projects ([zulip-mobile](https://github.com/zulip/zulip-mobile) and [rc-presenations](https://github.com/recursecenter/rc-presentations)). I've paired with [Lyn](https://github.com/alinen) on Android development, [Joe](https://github.com/jjinking) on [rc-locos](https://github.com/rc-locos/rc-locos), [Stanley](https://github.com/stanzheng) and [Krace](https://github.com/kracekumar) on Zulip Reactions. I'm lucky to have had such positive experiences working with others, and particularly appreciate that individuals went out of their way to help me understand the code bases I was contributing to.

I've __presented twice__ during Thursday presentations. Talking in front of others is a skill I pushed myself to do more of and get better at. RCers are the best crowd I could have asked for - they even ask questions and give positive feedback afterwards :)

## What did I work on

I'm happy with the amount of projects I did. The beginning half of the batch was a time of intensive learning through projects, while the second half was a mixture of working with others, projects, and practicing data structures and algorithms.

#### Projects

Having small, manageable projects helped to keep me on track. I started with some really simple projects such as [ Leaderboard](https://codepen.io/jennhsu/pen/MegYab) and [Recipe Box](https://codepen.io/jennhsu/pen/ZpJkPZ). These are projects recommended by [Freecodecamp](https://www.freecodecamp.com/). (It is a great website to get started learning web development and was my go-to for structure before coming to RC.)

Some of my projects were inspired by other RCers. After seeing a [cool presentation](https://github.com/SwartzCr/tinydungeon) by [Noah](https://github.com/SwartzCr), I was inspired to make my own [twitterbot](https://twitter.com/emojizebot). After seeing [Emily](https://github.com/emilyxxie) present her p5 projects, I used it to make Talking Heads ([2D in p5](https://github.com/hsubox/p5) and later [3D in threejs](https://github.com/hsubox/threejs)). [Harold](https://github.com/haroldtreen)'s Epubpress made me want to explore the power of chrome extensions, and therefore, [fire-squirrel](https://github.com/hsubox/fire-squirrel) was born.

The bigger projects were the ones that pushed me the most. [Game of Life](https://github.com/hsubox/game-of-life) was the project in which React and Redux clicked for me. [Voting App](https://github.com/hsubox/voting-app) helped me to understand how authentication and back-end rendering worked. [Color Together](https://github.com/hsubox/canvas) was an exploration in Socket.IO and HTML5 Canvas. [FashionDB](https://github.com/hsubox/fashiondb-v1) was my first time using firebase. Finally, updating my [personal website](https://github.com/hsubox/hsubox.github.io) to use Jekyll helped me to see how static-site generators worked.

#### Languages and Libraries

I came in with a basic understanding of HTML, CSS, vanilla Javascript, jQuery, and bootstrap. I left with experience using various libraries such as [Node](https://nodejs.org), [Express](https://expressjs.com), [Sequelize](http://docs.sequelizejs.com/en/v3/), [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/), [D3](https://d3js.org/), [p5](https://p5js.org/),
[threejs](https://threejs.org/), [Socket.IO](http://socket.io/), [Firebase](http://firebase.google.com/). More importantly, I learned how to read documentation and expand my skillset in the future.

#### Books

As I became a more proficient programmer, I went back to revisit fundamental programming concepts that I brushed over previously. I focused on two texts [Eloquent JS](http://eloquentjavascript.net/) and [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS).

For example, two important concepts I conquered were `this` and closures.

Understanding `this` was extremely useful in a process that had previously been guess-and-check to determine what it referred to.

If I had known about what closures were earlier, I could have avoided many hours debugging my Game of Life program. (I had a function that was re-defined in a for loop.)

#### Coursework

[Algorithms: Design and Analysis, Part 1 (Coursera - Stanford)](https://www.coursera.org/learn/algorithm-design-analysis) was instrumental in understanding algorithms and data structures. I highly recommend for any beginner.

[CS169.2x Agile Development using Ruby on Rails - Advanced (BerkeleyX - CS169.2x)](https://courses.edx.org/courses/course-v1:BerkeleyX+CS169.2x+1T2016SP/info) was a course primarily to better understand how databases, backends, and frontends worked together. It covered significantly more than that. I also tried not to spread myself too thin between learning Javascript and Ruby, so I didn't end up doing most of the assignments, but I still learned a great deal from the lectures.

[Software Construction in Java (MITx - 6.005.1x)](https://courses.edx.org/courses/course-v1:MITx+6.005.1x+3T2016/info) was great for understanding test driven development. I had some exposure to testing before, e.g. [js-assessment](https://github.com/rmurphey/js-assessment). It forced me to think about tests in a way that other testing introductions do not in that they have different implementations of the code that run with the tests that you write that fit in the specifications. I took away knowledge on testing and about software development in general.

At times, I thought I was spending too much time on coursework as these are the type of activities I can do on my own anytime. It ended up being an activity that I turned to when I didn't feel like working on projects and continued to push myself to learn.

## The End

It is hard to summarize my experience at RC. I've sliced it in every quantifiable way I can think of. I can only say that RC made me "a better programmer." The people I have met and the experiences in the last three months make me more certain than I have ever been that my choice to pivot into programming is the right choice. For that and so much more, I am grateful to be a member of the RC community. Thank you.
