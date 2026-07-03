Hairline-framed mono chip for categories and filters. Warm-gray by default; blue when `active` or hovered.

```jsx
<Tag active>All</Tag>
<Tag onClick={() => setFilter("rl")}>RL</Tag>
<Tag>Robotics</Tag>
```

Keep labels to one or two words, uppercase happens automatically. Filters sit in a flex row with `gap: var(--sp-2)`.
