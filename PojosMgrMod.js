/*
  This module's CONCERN is to provide and handle functionality to
  build the each and all of the css pojos.  

  However this file's code is only concerned with the functionality
  that works over the closure of thes item.

  It re-exports out its associated helper tools that are not 
  dependent working with the closure items.
*/
import { uCk, uCf } from './PojosMgrMod_helperTools';
export * from './PojosMgrMod_helperTools';

export const PojoMgrMod = (selectorBase) =>  {
  let cssPojos = {}
  let selBase = selectorBase // This is typically a namespace class-name or substring that can be used to prefix selectors.

  let lastItemSets = {
    I: '', // CSS item identifier key
    B: '',  // SelectorBase
    M: '', // Media-Query
    S: '', // Selector
    Y: '', // Style
  }
  let keys = lastItemSets


  const setItem = (pSelBase, pSelMore, p2, p3) => {
    /*
      pSelBase is the selector base (typically a namespace class-name or substring.).   This can change the value of the closure variable selBase.
      pSelMore is the selector part to add to selector base.
      p2 is either the media query or the styling object.
      p3 is the styling object of p2 is the media query.
    */
    let rtrn = ""
    
    if (!(typeof pSelMore === 'undefined')) {
      let pSty = ''

      keys.B = pSelBase === 0 ? ""
      : pSelBase === 1 ? selBase
        : pSelBase

      keys.S = pSelMore === 0 ? keys.B : keys.B+pSelMore

      if (typeof p3 === "object") {
        keys.M = p2
        pSty = p3
      }
      else {
        keys.M = ''
        pSty = p2
      }

      keys.I = keys.M ? keys.S+' | '+keys.M
        : keys.S 

      keys.Y = pSty

      if (keys.Y.hasFromMe) {
        for (const [key, val] of Object.entries(keys.Y)) {
          if (val === 'FromMe') {
            keys.Y[key] = uCf(keys.I)
            break
          }
        } 
        delete keys.Y.hasFromMe 
      }

      cssPojos[keys.I] = {
        mdq: keys.M,
        sel: keys.S,
        sty: pSty
      }
      rtrn = cssPojos[keys.I]
    }
    else {
      rtrn = false
    }

    return rtrn
  }; const sIt = setItem

  const getItems = () => cssPojos
  const gIts = getItems


  const buildIdfier = (pSelBase, pSelMore, pMdq) => {
    const base = pSelBase === 0 ? "" 
      : pSelBase === 0 ? selBase 
        : selBase
    const idfier = pMdq ? base+pSelMore+' | '+pMdq
      : base+pSelMore
    return idfier
  }
  const bId = buildIdfier

  const getItem = (...args) => { // args: base, sel, mdq
    const _args = [...args]
    const item = cssPojos[bId(..._args)] 
    return item
  }
  const gIt = getItem

  const setBase = (newSelBase) => {
    selBase = newSelBase
  }
  const sBs = setBase


  const getIdfier = () => { 
    return keys.I
  }
  const gId = getIdfier

  const getBs = (...args) => { // args: base, sel, mdq
    return args.length ? selBase : keys.B
  }
  const gBs = getBs

  const getMdq = (...args) => {
    return args.length ? getItem(...args).mdq : keys.M
  }
  const gMd = getMdq

  const getSel = (...args) => {
    return args.length ? getItem(...args).sel : keys.S
  }
  const gSl = getSel

  const getSty = (...args) => { 
    return args.length ? getItem(...args).sty : keys.Y
  }
  const gSt = getSty



  const getKeys = () => keys

  const resetAll = (selectorBase) => {
    // DEFAULT/RESET ALL THE TOP LEVEL CLOSURE VARS:
    cssPojos = {}
    selBase = selectorBase
  
    lastItemSets = {
      I: '', // CSS item identifier key
      B: '',  // SelectorBase
      M: '', // Media-Query
      S: '', // Selector
      Y: '', // Style
    }
    keys = lastItemSets
  }


  return {gIts, sIt, gIt, bId, sBs, gBs, gId, gMd, gSl, gSt, getKeys, resetAll}
}


