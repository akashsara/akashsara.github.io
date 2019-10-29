---
title: "Beating Battleship: A Comprehensive Analysis"
date: 2019-10-27T16:36:11+04:30
---

It aims to be a complete study on the strategy game of Battleship.  I generated 1,000,000 different board positions to test algorithms on.  

Currently experimenting with 4 broad algorithms:

* Random
* Parity-based
* Probability-based (including Monte Carlo simulations)
* Reinforcement Learning. 
 
Each algorithm is further augmented with heuristics &randomness when applicable.

For an overview of the game itself and past approaches to solving it (and also the current best one), check out this [Data Genetics blog](http://www.datagenetics.com/blog/december32011/).

Do note that while they cite this rule where one has to mention when a ship is sunk and what ship it is, I never played the game with the rule. In fact, I didn't know about it at all. And a lot of people I know/have seen online didn't know either. And it makes the task harder without the rule. So with that in mind, I'm not utilizing that rule.