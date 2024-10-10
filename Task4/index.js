const { RangeQuerySolver } = require("./arrayProcesor");
const INPUT_URL = "https://test-share.shub.edu.vn/api/intern-test/input";
const OUTPUT_URL = "https://test-share.shub.edu.vn/api/intern-test/output";

async function main() {
  const solver = new RangeQuerySolver(INPUT_URL, OUTPUT_URL);
  try {
    await solver.solve();
  } catch (error) {
    console.error("Failed to solve range queries:", error.message);
  }
}

main();
