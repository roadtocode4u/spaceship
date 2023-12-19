### CSS Medium

<details>
  <summary>Explain Inline, Block and Inline Block property in CSS?</summary>

The display property in CSS (Cascading Style Sheets) specifies how an HTML element shows on a webpage. The display property has three common values: **`inline`**, **`block`**, and **`inline-block`**. Let's discuss each of them:
<br/>
<br/>

**Inline:**

<ul> 
<li>

When an element has **`display:inline ;`**, it looks on the same line as the content around it. The width and height features have no effect on them, so they simply cover the correct range of width.

</li>

<li>
Examples of inline elements include

```html
<span
  >,
  <a
    >,
    <strong
      >, <em>, and <img />.</em></strong
    ></a
  ></span
>
```

</li>
</ul>

<br/>

```css showLineNumbers=true
span {
  display: inline;
}
```

**Block:**

<ul> 
<li>

When an element has **`display: block;`** used it displays on a new line and fills the available width. Block-level features can have all height and width attributes applied to them.

</li>

<li>
Examples of block elements include

```html
<div>
  ,
  <p>,</p>
  <h1>
    to
    <h6>
      ,
      <ul>
        ,
        <ol>
          , and
          <li>.</li>
        </ol>
      </ul>
    </h6>
  </h1>
</div>
```

</li>
</ul>

<br/>

```css showLineNumbers=true
div {
  display: block;
}
```

**Inline-Block:**

<ul> 
<li>

Elements with **`display: inline-block ;`** can have a width and height specified, but they normally display on the same line as the content above them. It allows them to remain a part of the inline content flow while having block-level attributes.

</li>

<li>
When you want an element to be visibly inline but also need to apply block-level values, like width or height, this is a helpful tool.
</li>

<li>
Examples of inline-block elements are often

```html
<img />
```

elements when you want them to align horizontally with text.

</li>
</ul>

<br/>

```html showLineNumbers=true
<span>This is an inline element.</span>
```

In summary, the display property in CSS allows you to control how elements are visually presented on the page. The choice between inline, block, or inline-block depends on the desired layout and styling for the specific elements.

</details>
