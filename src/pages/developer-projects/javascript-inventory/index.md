---
title: JavaScript Inventory
date: "2018-07-09"
type: development
status: on-going
img: "./google-calculator/google-calc.png"
github: https://github.com/anthonytranDev/Google_Calculator_App.git 
---
[![JavaScript Inventory](./javascript-inventory.png)][1]

<h5 style="font-weight: bold">[ Note: This project is ongoing and continuously gets updated, so it is highly likely the summary you see below is subject to change]</h5>

<br>

## What is this?
This static site archives the libraries I've used;

- Aspects
- Best Practices
- Relevant tweets
- Useful code snippets

Like my very own tooling compendium

<br>

## Why this project?
Let me start with a relatable anecdote. So you've managed to learn a set of useful libraries for the your projects and feel good about yourself, however after 3 months of not using them. You have forgotten a lot of the important details on the libraries you've used. 

So how do we alleviate this problem?

Simple, make awesome notes on tools you are using. This idea sprung from seeing library API documents using `Git Books`, which made me want to have my own meta-library. It was free, however the free version had limitations on extensibility, unless you could to pay of course.

<br>

## Main Aims
Was to test
- __Ease of use__ - whether it's simple to start off with and easy to set up
- __Speed of development__ - roughly estimate how long it would take to include a library and complete the documentation for it. 

<br>

## Development Approach
Main Tools characteristics:
- Free - open-source
- Easily Maintable

<br>

So I decided to go for 
- [React][2]
- [Docusarus.io][3]

No additional tools were really required, as the project was mainly content based - didn't need to write special components.

<br>

## Project Analysis
All of the analysis was dedicated to reviewing Docusarus.io.

### Pros
- __Low Barrier to Entry__ - I could start writing documents in markdown and organise them from the get go.
- __Includes many of the Bells and Whistles__ - here are the out of the box goodies
  - Easy Navigation - fixed sidebars, next and previous arrows
  - Code can be easily
  - Internationalisation
  - Algolia search integration
- __Simple Architecture__ - changing the styles and themes, is really easy. A lot of it can be done from `siteConfig.js`, all assets hosted in `/static`, even internalisation hosted in one directory as well

### Cons
- __Hot Reloading doesn't fully work__  - usually in create-react-app I can insert a file and import the needed component or css module, the app automatically accounts for that change and reloads. Here this isn't really the case. I have to manually startup the project each time I include a file.
- __Doesn't Support Lazy loading__ - having a simple configuration, can somewhat be a double edge sword. What if you a lot of documents to load. What if one day I have 100 pages of library API docs, each with there own sets of images?

<br>

## Project Conclusions
All-in-all, I really enjoyed using `Docusarus`. Would even recommend it to developers who don't even know React, or even JavaScript for that matter. Plus their skins in the game, as in they use there own Library to help other create their own library, pretty meta right? 

For the second aim, the parameters on timing wasn't clear, thus the measurements were kinda rough. Even so, as there is such a large variability for each library, there doesn't seem to that much use for this kind of measure. However, it's necessary that measures the costs of producing and maintaining this documentation in the future

### Simple Improvements
The improvements below are pretty subjective, and usually can't easily be determined in hindsight

- __Increase the site maintainability__ - this can be done by including content on tools that are
  - Not subject to change, such as Documentation on ES6
  - Highly stable parts - information on the core functionality of React, it follows the "Lindy Effect"
  - Include hyperslinks to parts that easily subject to change
- __Apply the Pareto Principle__ - only include information that would give you the greatest benefit or guard you against large problems in the possible future; i.e. don't include everything
- __Introduce a Mainability Metric__ -  this is important, as it will account as one of the factors that would determine whether it's worthwhile maintaining this library compendium. Or maybe scrapping the idea all together

## Metadata
__Tools used__

- React 16.4.1
- Docusaurus 1.3.1

__Status:__ On-going

__Latest Update:__ 09-07-2018

__Latest Analysis:__ 28-07-2018

<br>

---

## Miscellaneous

[JavaScript Inventory Project][1]

[GitHub][4]

[1]: https://nostalgic-hamilton-90d701.netlify.com/docs/doc1.html
[2]: https://reactjs.org/
[3]: https://docusaurus.io/
[4]: https://github.com/anthonytranDev/Google_Calculator_App.git