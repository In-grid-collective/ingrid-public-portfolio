## To-Do

- [X] Credit Tags: Producer, Production Support, Event Support, Participating Artist (Becky) We should discuss with wider group.
- [X] [Bio Pages based on this tut](https://www.raymondcamden.com/2020/08/24/supporting-multiple-authors-in-an-eleventy-blog). Could be improved. (Becky)
- [ ] Content for all events
- [ ] Origin Story -> summary of residency, style it in the vibe of the residency page maybe? 
- [ ] Residency events and pages ???? 
- [ ] CSS Styling -> in main.css you can keep / remove css style overrides. 
- [ ] Masonry Grid / Full screen image? Images (Becky)
- [ ] Add socials / links out: Insta, resident advisor, youtube in footer.njk in content/_includes/components + add tailwind styling (Sunni?)
- [ ] Hero template (Becky)
- [ ] Tailwind rules for paragraph, headers, header font, body font... etc (Sunni)
- [ ] People bio page design 
- [ ] People credits layout design

---

## Getting Started


#### 1. Clone this repo

```
git clone https://github.com/In-grid-collective/ingridPortfolio.git
```

#### 2. Install dependencies

```
npm install
```

#### 3. Work locally
Watches for changes and serves locally on http://localhost:8080

```
npm run serve
```

#### 4. Create a production build

```
npm run build
```



## How To


### Creating a new project page

In src/content/projects create a new folder, please follow this naming format using dashes, inside make a .md file that has the exact same name. You can save images that you will use in the project in the same folder

```
a-project-name
  |_  a-project-name.md
      image.png
      anotherimage.jpg
```

On each content page add in data in this format per page:

```
---
title: In-grid Event
description: This is another project about blah blah blah.
date: 2022-09-24
icon: Image.png
tags:
  - live performance
  - party
---
```

You can then edit the markdown file with content. 


### New Page

Look at the model for the about page:

- Make a new folder in src/content
- Inside make a new index.md
- Include this front matter data to add page to navigation:

```
---
layout: base.njk
eleventyNavigation:
  key: About
  order: 3
---
```

### Creating a bio

First in src/_data/people.json, add another entry for a person.

Add a new object to the existing array of objects with these fields. Will re-work the socials / links out so it's an array of links, for now it's website and insta handle:

```
[
  {_other person data..._},
  {
		"key":"uniqueid",
		"name":"Full Long Name",
		"bio": "Short text bio, and more stuff.",
		"website":"https://yoururl.com",
		"photo":"NameOfPhoto.jpeg",
		"instagram":"in_grid___"
	}
]

```

Next put your photo in public/assets/imgs (make sure the image name matches what you put for the "photo" field in the json file).

You can then start adding credits to project pages. If there isn't already a credits section in the front matter data you need to add a credits field. Currently you can add one of four "credit role" types. You should use the key you created for yourself in the id field. 

```
credits: 
  - id: bsmith
    role: event support
  - id: uniqueid
    role: producer
  - id: othername
    role: production support
  - id: blahblah
    role: participating artist
```


