// EXAMPLE OF DUCK TYPING

var a1;

if (a1.something) {
  a1.something();
}

// Rather than inspecting for a relationship betwewen a1 and some object that holds the delegatable something(...) function, we assume the test for a1.something passing means that a1 is capable of calling something(...).
// This heeds no regard for whether something(...) was found directly in a1 or delegated to some other object.

// In and of itself this assumption isn't so risky.
// But what IS risky about duck typing is that it's often extended to make other assumptions about the object's capabilities besides what's being tested.
