const axios = require("axios");

class RangeQuerySolver {
  constructor(inputUrl, outputUrl) {
    this.inputUrl = inputUrl;
    this.outputUrl = outputUrl;
    this.prefixSum = [];
    this.prefixEvenOdd = [];
  }

  async fetchInputData() {
    try {
      const response = await axios.get(this.inputUrl);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch input data: ${error.message}`);
    }
  }

  async sendOutputData(token, results) {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(this.outputUrl, results, { headers });
      return response.status;
    } catch (error) {
      throw new Error(`Failed to send output data: ${error.message}`);
    }
  }

  preprocessArray(arr) {
    const n = arr.length;
    this.prefixSum = new Array(n + 1).fill(0);
    this.prefixEvenOdd = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + arr[i - 1];
      this.prefixEvenOdd[i] =
        this.prefixEvenOdd[i - 1] + arr[i - 1] * (i % 2 === 0 ? -1 : 1);
    }
  }

  rangeSum(l, r) {
    return this.prefixSum[r + 1] - this.prefixSum[l];
  }

  rangeEvenOddDiff(l, r) {
    return this.prefixEvenOdd[r + 1] - this.prefixEvenOdd[l];
  }

  processQueries(queries) {
    return queries.map((query) => {
      const [l, r] = query.range;
      return query.type === "1"
        ? this.rangeSum(l, r)
        : this.rangeEvenOddDiff(l, r);
    });
  }

  async solve() {
    try {
      const inputData = await this.fetchInputData();
      this.preprocessArray(inputData.data);
      const results = this.processQueries(inputData.query);
      console.log(results);
      await this.sendOutputData(inputData.token, results);
      return results;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  }
}
module.exports = { RangeQuerySolver };
