---
layout: post
title:  "Advent of Code"
date:   2016-12-30 19:21:54 -0500
categories: recurse_center programming
---

[Advent of Code](http://adventofcode.com/2016) is a set of puzzles that run December 1 to December 25. I heard about it from RC'ers who had done it last year. I tried it out on the first day and continued to work through the puzzles through December. Some nights, I stayed up late just to work on the day's puzzle. I enjoyed it so much that I've even done [last year's](http://adventofcode.com/2015).

I used Javascript for all of my solutions, except those that required MD5 hashing. Since Javascript does not have a built-in library for that, I used Python instead.

Before embarking on the second half, i.e. last year's puzzles, I encountered [Peter Norvig's post](https://nbviewer.jupyter.org/url/norvig.com/ipython/Advent%20of%20Code.ipynb) on utility functions. I started keeping track of some of the functions that I have been using over and over.

- Combinations and Permutations
- Graphs
- Regular expressions
- MD5 Hashing

## Regular Expressions

Many of the puzzles had instruction-style input, which was necessary to parse. Sometimes though, it was actually less efficient to parse with regular expressions. Regexes try to start at the index where the last match ended. (I fell into this trap a few times.) Also, regexes tend to be less time-efficient and their run times can differ depending on the implementation. For example on a [classic subsequence problem](https://leetcode.com/problems/is-subsequence/), it is more efficient to do without regex.

## Graph search

Many of the later problems involved building graphs and then searching the graph in some way. Breadth first search was used much more often than depth first, e.g. finding shortest paths. Although I almost attempted A-star search, I found that breadth-first was sufficient for obtaining the solutions. Using memoization or a set to keep track of previously visited set was essential to efficient algorithms. (The actual solution to [Day 11](http://adventofcode.com/2016/day/11) would work best with A-star, but I resorted to the mathematical solution.)

## Functional programming

Many of the problems involved taking an initial set and filtering it down to find a solution. Understanding `map`, `reduce`, and `filter` helped immensely. Many other RC'ers used pure functional languages to solve the puzzles. It was thus useful to be able to compare solutions afterwards.

## Debugging

I wish that I had been more rigorous about writing tests early on. I began to write `assert` statements on the given test cases. However, the given test cases were often not comprehensive, so I still spent a lot of time debugging edge cases.

## New Concepts And Interesting Applications

From discussion with others and from trying to solve the problems, I encountered a number of new (and interesting!) concepts:

- Assembly language interpretation with op codes and registers
- Key stretching
- [Josephus problem](https://en.wikipedia.org/wiki/Josephus_problem)
- [Klotski problem](https://en.wikipedia.org/wiki/Klotski)
- [Chinese Remainder Theorem](https://en.wikipedia.org/wiki/Chinese_remainder_theorem)
- [River Crossing Problems](https://en.wikipedia.org/wiki/River_crossing_puzzle)
- [`String.raw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw)

## Final Remarks

It was extremely helpful to have other's working on the same problems and being able to see their implementations and learn from each other. It was a great set of puzzles to expand my programming toolkit and give me experience with certain functions I've seen now over and over again. Until next year!
