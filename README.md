# The Global Edit — Eleventy Site

**Where Smart Money Meets Smart Travel**

Built with [Eleventy](https://www.11ty.dev/) and deployed on [Netlify](https://netlify.com).

---

## First-Time Setup

Run these commands in Command Prompt (Windows) from inside this folder:

```
npm install
npm start
```

Then open your browser to `http://localhost:8080` to see your site live locally.

---

## Publishing a New Article

1. Open the `src/posts/` folder
2. Create a new file: `your-article-title.md`
3. Copy this template to the top of your file and fill it in:

```
---
title: "Your Article Title Here"
description: "A one or two sentence summary shown in previews and Google."
date: 2026-05-20
layout: layouts/article.njk
category: Travel
subcategory: Europe
parentCategory: Travel
featuredImage: "https://your-image-url.jpg"
readTime: 7
toc:
  - First Section Title
  - Second Section Title
  - Third Section Title
---

Your article body starts here. Write in normal Markdown.
```

4. Write your article below the `---` line using standard Markdown
5. Save the file — your local preview updates instantly

**Available categories:**
- Travel (parentCategory: Travel)
- Personal Finance (parentCategory: Personal Finance)
- Europe, North America, Asia, Hawaii (subcategories of Travel)
- Budgeting, Investing (subcategories of Personal Finance)

---

## Special Content Blocks

Copy-paste these anywhere in your article body:

### Info Box (blue)
```html
<div class="info-box">
  <div class="info-box-title">Quick Facts</div>
  <p>Your info here.</p>
</div>
```

### Pro Tip (gold)
```html
<div class="pro-tip">
  <div class="pro-tip-icon">💡</div>
  <div>
    <div class="pro-tip-title">Pro Tip</div>
    <p>Your tip here.</p>
  </div>
</div>
```

### Pull Quote
```html
<div class="pullquote">
  <p>"Your memorable quote goes here."</p>
</div>
```

### Rating Box (for hotel/product reviews)
```html
<div class="rating-box">
  <div class="rating-box-header"><h3>Our Rating – Property Name</h3></div>
  <div class="rating-row">
    <span class="rating-label">Location</span>
    <div class="rating-stars">
      <div class="star"></div><div class="star"></div><div class="star"></div>
      <div class="star"></div><div class="star empty"></div>
    </div>
  </div>
  <div class="rating-overall">
    <div>
      <div class="rating-overall-score">4.2 / 5</div>
      <div class="rating-overall-label">Overall Rating</div>
    </div>
  </div>
</div>
```

---

## Publishing to Live Site

Once your article is written, run these commands in Command Prompt:

```
git add .
git commit -m "New article: your article title"
git push
```

Netlify automatically detects the push and publishes your site within 60 seconds.

---

## Adding Google AdSense

1. Sign up at google.com/adsense
2. Once approved, Google gives you a script tag
3. Open `src/_includes/layouts/base.njk`
4. Find the comment `<!-- Google AdSense -->` and replace it with your script tag
5. Save, commit, and push — ads will appear site-wide

---

## Adding Your Email Newsletter Provider

1. Sign up with Mailchimp, ConvertKit, or Kit (free tiers available)
2. Get their embed form code
3. Open `src/index.njk` and find the comment `<!-- Replace the form below -->`
4. Replace the `<form>` block with your provider's embed code
5. Also update the sidebar in `src/_includes/layouts/article.njk`

---

## Folder Structure

```
theglobaledit/
├── src/
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk        ← Master template (header/footer wrap)
│   │   │   └── article.njk     ← Article page template
│   │   └── partials/
│   │       ├── header.njk      ← Site header
│   │       ├── footer.njk      ← Site footer
│   │       └── topbar.njk      ← Top announcement bar
│   ├── posts/                  ← YOUR ARTICLES GO HERE (.md files)
│   ├── css/
│   │   └── style.css           ← All styles (colors, fonts, layout)
│   ├── js/
│   │   └── main.js             ← JavaScript
│   ├── images/                 ← Local images
│   └── index.njk               ← Homepage
├── .eleventy.js                ← Eleventy configuration
├── netlify.toml                ← Netlify deployment config
├── package.json                ← Dependencies
└── .gitignore
```

---

## Changing the Brand Colors

Open `src/css/style.css` and edit the variables at the top:

```css
:root {
  --navy: #1B3A2D;      ← Main green color
  --gold: #C8922A;      ← Gold accent color
  --cream: #FAF7F2;     ← Background cream
}
```

Change any hex value and the whole site updates automatically.
