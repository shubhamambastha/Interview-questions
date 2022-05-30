## Question:

You are given an array A of size N and you are required to generate another array B of size N.
You have to find minimum value of B[i] for which Summation of (A[i] & B[i]) for i = 0 to i = N-1 is minimum possible.
Also, you have to select B[i] such that (A[i] & B[i]) is a positive value.

**Problem Constraints:**

```
1 <= A.size() <= 1000001
1 <= A[i] <= 100000
```

---

### Example:

```
Example 1:-
arr[3] = [1, 2, 3];
ans = [1, 2, 1];

Example 2:-
arr[3] = [ 2, 8, 9 ];
ans = [ 2, 8, 1 ];
```
