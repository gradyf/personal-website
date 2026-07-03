Sharp-cornered action button; solid ink that inverts to transparent on hover. Most nav should be text links — reserve Button for real calls to action ("See it now", "Download CV").

```jsx
<Button href="/projects/q-learner">See it now</Button>
<Button variant="outline" size="sm">Filter</Button>
<Button variant="blue">Drop me a line</Button>
```

Variants: `solid` (default, ink), `outline` (hairline), `blue` (accent — at most one per page). Sizes: `md`, `sm`. Never round the corners; never add shadows.
