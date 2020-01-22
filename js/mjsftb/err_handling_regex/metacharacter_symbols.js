let re;

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols

re = /^h/i; // String must start with h
re = /ld$/i; // String must end with ld
re = /^hello$/i; // String must begin and end with hello
re = /h.llo/i; // A . matches with any ONE character
re = /h*llo/i; // A * matches any character 0 or more times
re = /gre?a?y/i; // A ? signifies that the preceding character is optional
re = /gre?a?y\?/i; // A \ escapes the following character.

// Character sets are denoted by [] brackets.
re = /gr[ae]y/i; // Character must be an a or e
re = /[GF]ray/; // Character must be a G or F
re = /[^GF]ray/; // The opposite of the above, will match any character that is not a G or F.
re = /^[GF]ray/; // Pattern must start with either G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Quantifiers are denoted with {} braces and specify acceptable quanitities of the preceding character.
re = /Hel{2}o/i; // Will match a pattern with exactly 2 l's in a row
re = /Hel{2,4}o/i; // Will match patterns with at least 2 l's and at most 4 l's
re = /Hel{2,}o/i; // Will match patterns with at least 2 l's
re = /Hel{0,4}o/i; // Will match patterns with at most 4 l's

// Groups are denoted with () parentheses. They are commonly used alongside quantifiers.
re = /([0-9]x){3}/; // Matches patterns of a digit followed by an x three times.

// Shorthand Character Classes
re = /\w/; // Matches any combination of 1 or more alphanumeric characters or underscores (word characters)
re = /\w+/; // A + will match with one or more of the preceding character
re = /\W/; // Matches any combination of 1 or more nonword characters
re = /\d/; // Matches with any digit 1 or more times
re = /\D/; // Match any non digit
re = /\s/; // Match any whitespace character
re = /\S/; // Match any nonwhitespace character
re = /Hell\b/i; // Word boundaries are denoted with a \b and prevent matches with words within other words. This example would keep Hello from matching.

// Assertions are kind of like conditionals
re = /x(?=y)/; // Match x only if it is followed by a y
re = /x(?!y)/; // Match x only if it is NOT followed by a y

// String to match
const str = 'loona yyxy';

// Log results
const result = re.exec(str);
console.log(result);

function reTest (re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
