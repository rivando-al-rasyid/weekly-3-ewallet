import { defineConfig } from "eslint/config";
import html from "@html-eslint/eslint-plugin";

export default defineConfig([
    {
        files: ["**/*.html"],
        plugins: {
            html,
        },
        // When using the recommended rules (or "html/all" for all rules)
        extends: ["html/recommended"],
        language: "html/html",
        rules: {
            "html/no-duplicate-class": "error",
            "html/element-newline": "error",
            "html/indent": ["error", 4]


        }
    }
]);
