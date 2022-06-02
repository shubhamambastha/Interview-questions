## Question:

Surprisingly, in an alien language, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given an array of words A of size N written in the alien language, and the order of the alphabet denoted by string B of size 26, return 1 if and only if the given words are sorted lexicographically in this alien language else, return 0.

**Problem Constraints:**

```
1 <= N, length of each word <= 105

Sum of the length of all words <= 2 * 106
```

---

### Example:

```
Example 1:-
arr[3] = ["hello", "scaler", "interviewbit"];
alphabet = "adhbcfegskjlponmirqtxwuvzy";
ans = 1;

Example 2:-
arr[3] = ["fine", "none", "no"];
alphabet = "qwertyuiopasdfghjklzxcvbnm";
ans = 0;
```
