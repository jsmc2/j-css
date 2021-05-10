import { PojoStyle } from 'PojoStyle'  // The NPM install.

const selectorBase = ".UserInfoHeader"

const {addToStyleTag, gIts, sIt, gIt, bId, sBs, gBs, gId, gMd, gSl, gSt, getKeys, resetAll, uCk, uCm, uCf, mrg } = PojoStyle(selectorBase)

const mdqry_min700 = '@media only screen and (min-width: calc(0.625 * 70rem))'

sIt(1, 0, {
})

sIt(1, '_layoutGrid', {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  justifyItems: 'stretch',
  alignItems: 'center',
  gridTemplateRows: 'auto',
  gap: '1rem',
  height: '7rem',
  zz_border: "solid .1rem #00f"
})

sIt(1, '_gridItem:nth-child(2)', {
  display: 'grid',
  justifyItems: 'center',
})

sIt(1, '_gridItem:nth-child(3)', {
  hasFromMe: 1,
  [uCk()]: 'FromMe',
  display: 'grid',
  justifyItems: 'right',
})

sIt(1, '_gridItem:nth-child(3)', mdqry_min700, 
mrg([ gSt(), 
  {
    hasFromMe: 1,
    [uCk()]: 'FromMe',
    zz_border: "solid .1rem red"
  }])
)

sIt(1, '_gridItem:nth-child(4)', mdqry_min700, 
mrg([ gSt(1, '_gridItem:nth-child(3)'), 
  {
    [uCk()]: uCf('Me'),
    [uCk()]: uCm("Just saying above, 'From Me' instead of giving idfier"),
    zz_border: "solid .1rem green"
  }])
)

console.log("cssItems: ",  gIts()) // Just to peek at the css classes pojo.

addToStyleTag(0) 