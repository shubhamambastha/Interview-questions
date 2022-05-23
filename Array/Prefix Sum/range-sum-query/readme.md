## Question:

You are given an integer array A of length N.
You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
For each query, you have to find the sum of all elements from L to R indices in A (1 - indexed).
More formally, find `A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R]` for each query.

**Problem Constraints:**

```
1 <= N, M <= 105
1 <= A[i] <= 109
1 <= L <= R <= N
```

---

### Example:

```
Example 1:-
A = [1, 2, 3, 4, 5];
B = [[1, 4], [2, 3]];
ans = [10, 5];

Example 2:-
A = [2, 2, 2];
B = [[1, 1], [2, 3]];
ans = [2, 4];
```
