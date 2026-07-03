The signature project-index row — number, specimen thumb, title, meta, year, arrow. Hover lifts the paper and flips title + arrow blue.

```jsx
<div style={{ borderTop: "1px solid var(--line-strong)" }}>
  <LedgerRow index="01" title="Q-Learner" meta="REINFORCEMENT LEARNING · PYTHON" year="2025" pattern="grid" onClick={open} />
  <LedgerRow index="02" title="PID Control" meta="SIMULATED ROBOTICS · CONTROL LOOPS" year="2025" pattern="lines" last />
</div>
```

Wrap the stack with a strong top rule; set `last` on the final row. Keep one pattern motif per project, forever.
