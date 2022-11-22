import { resolve } from "import-meta-resolve";
import * as remark from "remark";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// Successful log
console.log("- [PASS] remark:", typeof remark);

// Successful log
console.log("- [PASS] require.resolve:", require.resolve("remark"));

// Broken, won't log
console.log("- [FAIL] import-meta-resolve:");
console.log(await resolve("remark", import.meta.url));
