// CHALLENGE
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// SOLUTION

function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names.join(" and ")} like this`;
  if (names.length === 3)
    return `${names.slice(0, 2).join(", ")} and ${names[2]} like this`;
  if (names.length > 3)
    return `${names.slice(0, 2).join(", ")} and ${
      names.length - 2
    } others like this`;
}
