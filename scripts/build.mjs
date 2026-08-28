import { execSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";

const isStatic =
  process.env.STATIC_EXPORT === "1" ||
  process.env.CF_PAGES === "1" ||
  process.env.GITHUB_ACTIONS === "1";

if (isStatic && existsSync("app/api")) {
  renameSync("app/api", ".api-bak");
}

try {
  execSync("npx next build", {
    stdio: "inherit",
    env: {
      ...process.env,
      STATIC_EXPORT: isStatic ? "1" : process.env.STATIC_EXPORT || "",
    },
  });
} finally {
  if (existsSync(".api-bak")) {
    renameSync(".api-bak", "app/api");
  }
}
