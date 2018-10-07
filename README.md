# Css to head 

Injects some text within \<style\> tags efef into the \<head\>

## Usage 

```js
var injectCss = require('css-to-head');

var myCss = `
  .basic-css {
    width: 50%;
    height: 10px;
  }
  #other-css {
    color: red;
  }
`;

injectCss(myCss, "id-appended-to-style-tag");

// won't be injected cause "id-appended-to-style-tag" was already injected
injectCss(myCss, "id-appended-to-style-tag");

// will be injected cause param 3 is set to false
injectCss(myCss, "id-appended-to-style-tag", false);

// will be injected cause id-2 was not already injected
injectCss(myCss, "id-2");
```

result 

```html 
<head>
  <style id="id-2">
    .basic-css {
      width: 50%;
      height: 10px;
    }
    #other-css {
      color: red;
    }
  </style>
  <style id="id-appended-to-style-tag">
    .basic-css {
      width: 50%;
      height: 10px;
    }
    #other-css {
      color: red;
    }
  </style>
  <style id="id-appended-to-style-tag">
    .basic-css {
      width: 50%;
      height: 10px;
    }
    #other-css {
      color: red;
    }
  </style>
</head>
```

