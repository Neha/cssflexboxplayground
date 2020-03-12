const $ = document;
const parentElement = $.getElementById("parent");
const propertyName = $.querySelector(".propertyName");
const description = $.querySelector(".description");
const codeSnippet = $.querySelector(".codeSnippet");
const codeSnippetChild = $.querySelector(".codeSnippetChild");
let tempCSSCode = {};
let tempCSSCodeChildren = {};
const DATA = data;

(function() {
  // DELEGATE EVENT HANDLING FOR DROPDOWNS.
  this.addEventListener("change", function(e) {
    const ELEMENT = e.target;
    const propertyKeyName = ELEMENT.getAttribute("data-name");

    // SELECT THE SELECTED OPTION AND THE PARENT PROPERTY OF THE SELECTED DROPDOWN
    if (ELEMENT.tagName.toLowerCase() != "input") {
      propertyValue = ELEMENT.options[ELEMENT.selectedIndex].innerHTML;
      parentElement.style[propertyKeyName] = propertyValue;

      // CREATE THE CODE SNIPPET AND ADD TO THE PARENT PRE TAG
      tempCSSCode[propertyKeyName] = propertyValue;
      codeSnippet.innerHTML = JSON.stringify(tempCSSCode, null, '    ');
    }

    // SELECT THE USER INPUT'S VALUE FOR THE GROW, SHRINK, ORDER
    else {
      propertyValue = ELEMENT.value;

      // As flex-basis require PX unit. Hence, we are checking of the selected value if flex-basis then add PX
      propertyKeyName == "flex-basis"
        ? (ELEMENT.parentNode.style[propertyKeyName] = propertyValue + "px")
        : (ELEMENT.parentNode.style[propertyKeyName] = propertyValue);

       // CREATE THE CODE SNIPPET AND ADD TO THE CHILD PRE TAG
      tempCSSCodeChildren[propertyKeyName] = propertyValue;
      codeSnippetChild.innerHTML = JSON.stringify(tempCSSCodeChildren, null, '    ');
    }

    // UPDATE THE SELECTED PROPERTY DESCRIPTION
    propertyName.innerHTML = `${propertyKeyName} : ${propertyValue}`;
    description.innerHTML =
      DATA[propertyKeyName][0]["defination"] +
      DATA[propertyKeyName][0][propertyValue];
  });
})();
