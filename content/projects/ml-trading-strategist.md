---
index: "04"
title: "ML Trading Strategist"
meta: "ENSEMBLE LEARNING · MARKET BACKTESTS"
year: "2025"
pattern: lines
section: school
origin: SCHOOL
facts:
  - "50-BAG RT ENSEMBLE"
  - "SMA · BOLLINGER %B · CCI"
  - "~30 PTS OVER BUY-AND-HOLD"
  - "OUT-OF-SAMPLE · NET OF FEES"
---
A learning trader from Machine Learning for Trading (CS 7646): three course-mandated technical indicators — SMA golden/death crosses, Bollinger %B, and CCI — feeding an ensemble that turns indicator state into trade decisions over daily equity data.

The learner is a 50-bag ensemble of random decision trees. One tree memorizes the training window and calls it a strategy; fifty trees, each trained on its own bootstrap sample and voting, disagree just enough to generalize. Most of the project was resisting the many ways a backtest will flatter you if you let it.

Out-of-sample, the strategy beats buy-and-hold by roughly 30 points — net of transaction fees and market impact, which the simulation charges before any number gets reported. A backtest that pays its own costs is the only kind worth quoting.
