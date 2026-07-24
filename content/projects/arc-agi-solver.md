---
index: "03"
title: "ARC-AGI Solver"
meta: "KNOWLEDGE-BASED AI · COMPOSITIONAL REASONING"
year: "2025"
pattern: grid
section: school
origin: SCHOOL
facts:
  - "~40 HAND-WRITTEN SOLVERS, V1"
  - "9 TRANSFORM PRIMITIVES, V2"
  - "DETECT / APPLY PIPELINE"
  - "77% — 74/96 SOLVED"
---
An agent for ARC-AGI puzzles — the abstraction-and-reasoning grids where you get a few before/after examples and have to infer the rule, then apply it to a grid you've never seen. Built for Georgia Tech's Knowledge-Based AI course (CS 7637).

The first version was a dispatcher: roughly forty hand-written solvers, each tuned to one problem family, with a front door that guessed which specialist to call. It solved problems and taught nothing general — every new puzzle meant another solver. The rewrite went the other way: nine general transformation primitives, each split into a detect half (does this rule explain the examples?) and an apply half (do it to the test grid), chained so multi-step rules compose out of single-step parts.

The compositional pipeline lands 77% — 74 of 96 — of the course's defined problem set. The dispatcher could only ever be as smart as its longest case statement; the pipeline occasionally solves things I didn't plan for, which is the whole argument for building it that way.
