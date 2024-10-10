# Array Query Processing

This program processes queries on a given array of non-negative integers.

## Problem Description

Given an array of non-negative integers (data) with a length not exceeding 100,000 elements (indexed from 0), write a program to perform queries on the given array.

For each query, you are provided with a range (l, r) and need to calculate the result of the query based on that range. There are two types of queries:

1. Type 1: Calculate the sum of elements in the range

   ```
   data[l] + data[l + 1] + data[l + 2] + ... + data[r - 1] + data[r]
   ```

2. Type 2: Calculate the sum of elements at even positions minus the sum of elements at odd positions in the range
   ```
   data[l] - data[l + 1] + data[l + 2] - data[l + 3] + ... ± data[r - 1] ± data[r]
   ```

## Input

Call the API to get the dataset from https://test-share.shub.edu.vn/api/intern-test/input using the GET method.
The returned data includes the input data for the problem and a token string (see output).

The dataset is in JSON format with the following structure:

## Output

The result should be returned as an array.
Call the API to push the result data to https://test-share.shub.edu.vn/api/intern-test/output using the POST method.
Authentication is required using Bearer Authentication with the token obtained from the input.

## Requirements

- The algorithm must have a time complexity of O(n+q), where n is the length of the array and q is the number of queries.
