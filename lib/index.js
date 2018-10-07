"use strict";


var ___inserted = [];

function injectCss (css, id) {
  var domStyle = document.createElement("style");
  domStyle.id = id;
  domStyle.textContent = css;
  document.head.insertBefore(domStyle, document.head.firstChild);
}

/**
 * Inject the css string into the <head> tag within a <style> tag. If once is set to true,
 * the css matching this ID will only be injected once 
 * 
 * @param {string} css the css that will be injected into the style
 * @param {string} id the ID value of the style tag, should be unique
 * @param {?boolean} once if the css matching the ID can only be injected once (=true)
 */
function cssToHead (css, id, once) {
  if (once === undefined) once = true;
  if (once) {
    if (___inserted.indexOf(id) === -1) {
      injectCss(css, id);
      ___inserted.push(id);
    }
  } else {
    injectCss(css, id);
    ___inserted.push(id);
  }
}

module.exports = cssToHead;