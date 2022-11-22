import { resolve } from "import-meta-resolve";
import * as remark from "remark";
import { createRequire } from "module";
import * as request from "request";

const require = createRequire(import.meta.url);

console.log("\n\n** ESM **");
/**
 * ESM
 */
// Successful log
console.log("- [PASS] remark:", typeof remark);

// Successful log
console.log("- [PASS] require.resolve:", require.resolve("remark"));

// Broken, won't log
try {
  const x = await resolve("remark", import.meta.url);
  console.log("- [PASS] import-meta-resolve:", x);
} catch (e) {
  console.log("- [FAIL] import-meta-resolve:", e);
}

console.log("\n\n** CJS **");
/**
 * CJS
 */
// Successful log
console.log("- [PASS] request:", typeof request);

// Successful log
console.log("- [PASS] require.resolve:", require.resolve("request"));

// Broken, won't log
try {
  const x = await resolve("request", import.meta.url);
  console.log("- [PASS] import-meta-resolve:", x);
} catch (e) {
  console.log("- [FAIL] import-meta-resolve:", e);
}
