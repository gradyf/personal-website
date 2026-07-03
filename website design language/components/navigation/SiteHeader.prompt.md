Site-wide top nav — uppercase wordmark + mono links with trailing periods ("Index. About. CV."). Active = blue underline.

```jsx
<SiteHeader active="about" onNav={(key) => setView(key)} />
```

Default links: index/about/cv/blog/contact. Pass `links` to override. Place inside the page gutter, directly below the Ticker.
