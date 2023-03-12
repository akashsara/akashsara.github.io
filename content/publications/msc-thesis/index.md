+++
title = "Visualizing Characters and Evaluating their Balance in Competitive Video Games"
date = 2023-03-12T03:17:06-06:00
draft = false
+++

Many competitive online video games release new characters on a regular basis. Designing these characters requires significant effort on several aspects including art, story, music, and game balance. Thus automating the design of these aspects offers value in saving human effort. This thesis offers two major contributions to the open problem of video game character generation. 

Our first contribution is a novel methodology for representing pixel art. We introduce the Pixel VQ-VAE, an enhanced VQ-VAE model with two enhancements to improve performance on pixel art. We demonstrate that our approach outperforms standard approaches in representational quality on two different datasets. We further apply the learned representations on two downstream tasks. Parts of this work have appeared in [Pixel VQ-VAEs for Improved Pixel Art Representation](https://arxiv.org/abs/2203.12130).

Our second contribution is a framework to evaluate changes to game balance via a process known as meta discovery. We use this meta discovery framework to simulate a large number of games and analyze the resultant game state. In developing this framework we train several reinforcement learning agents to approximate average human players and introduce a dynamic team-generation system. We demonstrate the effectiveness of the framework in approximating the results of balance changes on Pokémon Showdown, a competitive online battle simulator. This part of the thesis will be published in the near future.

This page will be updated with a direct link to the thesis once it has officially been published.