//CHALLENGE
/* 
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */

//SOLUTION
function generateHashtag(str) {
  const result =
    "#" +
    str
      .split(" ")
      .filter((val, i, a) => {
        return val.length >= 1;
      })
      .map((val) => val[0].toUpperCase() + val.slice(1))
      .join("");
  return result.length == 1 || result.length > 140 ? false : result;
}
