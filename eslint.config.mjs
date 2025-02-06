import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // Cambia el nivel de error a advertencia
      "no-unused-vars": "warn" // También añadimos la regla de ES6
    },
    ignorePatterns: [
      "node_modules/",
      ".next/",
      "dist/",
      "build/"
    ]
  }
];

export default eslintConfig;