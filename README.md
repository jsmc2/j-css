PojoStyle is a alpha stage tool to help build js pojos that define css classes and then from which build out those css class defintion into a style tag.

-= PojoStyle methods =-

gIts is "get items"

sIt is "set item".  Sets a j-css item.  A j-css item is javascript pojo whose key (aka identifier) is css selector (selector only or selectory and media query) and its value is an object whose properties are the respective media query, the respective selector, and the respective items styling (pojo notation of a css style defintion)
gIt is "get item".  Gets a j-css item.
gIts is "get items".  Gets all the j-css item created in a object scope - typically respective to the style tag which is intended to be built.

bId is "build identifier".  Used to generate and returning a identifier for setting a key with sIt(...) or getting a j-css item with jIt(...).

sBs is "set base".  Set the current or last used selector base (a resused fragment of the some first part of a selector).
gBs is "get base".  Set the current or last used selector base (a resused fragment of the some first part of a selector).

gMd is "get media query".  Gets the media query property value for designated item or the last item.
gSl is "get selector".  Gets the selector property value for designated item or the last item.
getSty is "get style.  Gets the style property value for designated item or the last item.

getKeys.  Gets all the item related closure attributes for the module.  Typically reflects the attributes set of the last set j-css item.  Usefull for resuse in current item.
resetAll.  Resets all the item related closure attributes for the module to there default values (empty string), and pass in selector base.

addToStyleTag.  Add the module closures current object of j-css items to a new or existing style tag.  The optional second parameter designates the id of the to-be-created or existing style tag.


// Helpers
uCk is "use comment key".  Use this function to set the key name of a property of the style object to comment and a uniqueId.  The respective value is a comment to show up in the css item in the style tag.
uCm is "use comment".  Use this function to set the aforementioned comment value:
uCf is "use comment from"  Use this function to create a standardized "from" comment value.  "From" is typically the identifier of the j-css item.  It should be placed above all the css properties of that item.

mob is "merge objects".  Use this function to merge to javascript pojos into one.  The advantage of mob(obj1, obj2) is overriden keys are placed in the order of keys at the point where the overriding occurs not at the point of the overridden key.  This is helpful for producing css styles based on the merger of objects and being able to see what was the source of a properties values

border: "solid .1rem #f00"


Here's an example of sIt, bId, uCk, uCm, uCf and mob work together.

    const secondaryHeaderTextFrag = {
        [uCk()]: uCf("secondaryHeaderTextFrag"),
        color: "#555",
        fontSize: "1rem",       
    }

    // Note current selector base is ".ArticleComponent"
    sIt(1, '.articleHeader', {
        mob(secondaryHeaderTextFrag, {
            [uCk()]: uCf( bId(1, " .articleHeader") ),
            padding: 1.4rem,
            [uCk()]: uCm("Override color"),
            color: "#777"
        })
    })

...which has this result in the style tag:

    .ArticleComponent .articleHeader {
        /* FROM: secondaryHeaderTextFrag */
        font-size: 1rem;

        /* FROM: ArticleComponent .articleHeader */
        padding: 1.4rem;
        /* Override color */
        color #777;
    }

