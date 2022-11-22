import { resolve } from "import-meta-resolve";
import * as remark from "remark";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

console.log("\n\n** ESM **");
/**
 * ESM
 */
// Successful log
console.log("- [PASS] remark:", typeof remark);

// Successful log
console.log("- [PASS] require.resolve:", require.resolve("remark"));

// Successful log
console.log(
  "- [PASS] native import.meta.resolve",
  await import.meta.resolve("remark")
);

// Broken, won't log
try {
  const x = await resolve("remark", import.meta.url);
  console.log("- [PASS] import-meta-resolve ponyfill:", x);
} catch (e) {
  console.log("- [FAIL] import-meta-resolve ponyfill:", e);
}
