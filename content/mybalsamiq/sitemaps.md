---
date: 2015-09-23T15:48:49-07:00
title: "Working with Site Maps"
menu: "menumybalsamiq"
weight: 80
---

You can create simple site maps from a text outline using the Site Map control.

## Create a Site Map

Add a "Site Map" control from the UI Library to the canvas.

Edit the control by double-clicking or selecting it and pressing the Enter key.

Edit the outline to create parent-child relationships. Each line represents a box (or page/node) in your sitemap. Use hyphens to indent child boxes beneath a parent. Here's an example:

<pre>Home 
- Products 
-- Product 1 
-- Product 2 
- About Us\rCompany 
- Support 
- Blog
</pre>

This is what the outline above looks like:

![](http://media.balsamiq.com/img/support/docs/m4d/sitemap.png)

## Notes and Options

*   Single Tree Support: Site Map expects the first line to be the top-most parent, and only one of these can exist because it only makes a single tree. If you want to make multiple trees, just add more Site Map controls.
*   Multi-Line Text: You can use \r to create line returns on text in a box like this: About\rUs