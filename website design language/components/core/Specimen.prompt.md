Hairline-framed tile that stands in for project imagery — abstract pattern now, real screenshot (`src`) later.

```jsx
<Specimen pattern="grid" height={86} />
<Specimen pattern="rings" height={200} label="CD Cataloger" index="04" />
<Specimen src="/shots/q-learner.png" height={200} />
<Specimen pattern="grid" height={200} slotId="shot-q-learner" />  // drag-and-drop slot
```

Patterns: `grid` `lines` `rings` `dots` `solid`. Each project keeps one motif everywhere it appears. Never draw real illustrations — pattern or screenshot only. `slotId` turns the tile into a drop target (load `image-slot.js` on the page); reuse the same id for a project's thumb and case-study hero so one drop fills both.
