/*
  This file's CONCERN is to provide and handle the
  functionality to translate the css pojo items and
  add them to a default or specified style sheet, 
  which is created if it doesn't exist.
*/
import murmur from "murmurhash-js"
///import { prefix } from "inline-style-prefixer";
import styleObjectToCssString from "style-object-to-css-string";


const bootDefaultPogoStyleTagId = "PogoStyleTag_Default_"+Date.now()
const bootSelectorsHashMap = {}

export const addToStyleTag = (cssItems, tagIdfier) => { 

  const pogoStyleTagId = typeof tagIdfier === 'undefined' ? bootDefaultPogoStyleTagId
    : tagIdfier === 0 ? "PojoStyleTag_"+Date.now()
      : "PojoStyleTag_"+tagIdfier
  
  // Add style tag to DOM:
  let styleTag = document.getElementById(pogoStyleTagId);
  if (!styleTag) {
    const head = document.head || document.getElementsByTagName("head")[0],
      styleTag = document.createElement("style");
    styleTag.setAttribute("id", pogoStyleTagId);
    head.appendChild(styleTag);
  }
  styleTag = document.getElementById(pogoStyleTagId);

  for (const [cssKey, cssPojo] of Object.entries(cssItems)) {
    ///const hashedKey = murmur.murmur3(cssPojo.mdq + "_" +cssPojo.sel, bootTimestamp)
    const hashedKey = murmur.murmur3(cssPojo.mdq + "_" +cssPojo.sel, '_')
    if (!bootSelectorsHashMap[hashedKey]) {
      let cssStyling = cleanStyling(styleObjectToCssString(cssPojo.sty), cssKey)

// --- BUILD styleBlock (what will be appended to style tag.) ---
let styleBlock = "";
// LEAD LINE:
let leadLine = (cssPojo.BLOCK_COMMENT) ? 
`/**** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ****
${cssPojo.BLOCK_COMMENT} 
                                                ****/`
:
`/**** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ****/`;
// APPEND TO styleTagInnerHTML::
if (cssPojo.mdq) {
styleBlock += `${leadLine}
${cssPojo.mdq} {
${cssPojo.sel} {
${cssStyling}
} 
} /*m*/

`;
}
else {
styleBlock += `${leadLine}
${cssPojo.sel} {
${cssStyling}
} 

`;
}
      styleTag.appendChild(document.createTextNode(styleBlock))
      bootSelectorsHashMap[hashedKey] = Date.now() + " | " + cssPojo.mdq + " | " + cssPojo.sel
    } // END bootSelectorsHashMap[hashKey] IF
  } // END for loop.
  return true
} // END createStyleTag(..) .


function cleanStyling (styling, cssKey) {
  // const edit0 = styling.replace(/from:(.*?);/g, `/* FROM: ${cssKey} */`)
  // const a = styling.replace(/<comment_(.*?)BLANK;/g, " ")
  // const b = a.replace(/<comment_(.*?)\/\*/g, "/*")
  const b = styling.replace(/<comment_(.*?)>/g, "")
  const c = b.replace(/:(.*?)\/\*/g, "/*")
  const d = c.replace(/\*\/(s*?);/g, "*/")
  const e = d.replace(/\/\* FROM/g, "\n/* FROM")
  
  return e
}

