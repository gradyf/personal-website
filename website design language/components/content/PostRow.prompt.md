Blog-index row: date · title · read time, title flips blue on hover. The blog's lighter cousin of LedgerRow.

```jsx
<div style={{ borderTop: "1px solid var(--line-strong)" }}>
  <PostRow date="JUL 2026" title="On tuning a stubborn setpoint" readTime="4 MIN" />
  <PostRow date="JUN 2026" title="Q-tables, drawn badly" readTime="6 MIN" last />
</div>
```

Use for writing lists only; projects always get the full LedgerRow.
