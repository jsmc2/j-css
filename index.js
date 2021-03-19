export * from './JcssMod'
export * from './PojosMgrMod';
export * from './pojosToTag';


/* Example to get all (shortcut name): {
  import { addToStyleTag, PojoMgrMod, uCk, uCm, uCf, mob } from '?/jcss
  
  const selectorBase = ".SomeComponentVC"
  const {gIts, sIt, gIt, bId, sBs, gBs, gId, gMd, gSl, gSt, getKeys, resetAll} = PojoMgrMod(PojoMgrMod)
}


/*
  This file's CONCERN is to provide tools to help build 
  a css pojo it.  
  However these tools do NOT benefit from closure over
  any or all of css items pojo.  
*/

export const useCommentKey = () => {
  ///const min = 100000000
  ///onst max = 999999999
  const nowStr_ = "" + performance.now()
  const nowStr = nowStr_.replace(".", "").substring(0, 8)
  return '<comment_' + nowStr + '>'
}
export const uCk = useCommentKey


export const useComment = (commentText) => {
  return `/* ${commentText} */` 
}
export const uCm = useComment


export const useCommentFrom = (forText) => {
  return `/* FROM: ${forText} */` 
}
export const uCf = useCommentFrom


export const useCommentType = (typeCode) => {
  const codes = {
    B: '/* BOX----------- */',
    C: '/* CONTENT------- */',
    L: '/* LAYOUT-------- */',
    M: '/* META---------- */',
  }
  return `/* -${codes[typeCode]} */` 
}
export const uCT = useCommentType


export const mergeObjects = function(objsInAscPriority, toNewObjBool = true) {
  const objs = objsInAscPriority
  let coreObj = objs[0]
  let overrideObj = objs[1]
  let combinedObj = mergeTwoObjects(coreObj, overrideObj, toNewObjBool) 
  for (let idx = 2; idx < objs.length; idx++) {
    overrideObj = objs[idx]
    combinedObj = mergeTwoObjects(combinedObj, overrideObj, false) 
  }
  return combinedObj;
  // Hoisted Helper:
  function mergeTwoObjects(coreObj, overrideObj, toNewObjBool) {
    const combinedObj = toNewObjBool ? { ...coreObj } : coreObj;
    const overrideObjKeys = Object.keys(overrideObj);
    for (let jdx = 0; jdx < overrideObjKeys.length; jdx++) {
      let key = overrideObjKeys[jdx];
      delete combinedObj[key];
      combinedObj[key] = overrideObj[key];
    }
    return combinedObj
  }
};
export const mob = mergeObjects 