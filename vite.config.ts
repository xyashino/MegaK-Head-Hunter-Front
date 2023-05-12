import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "./src/assets"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@components": resolve(__dirname, "./src/components"),
      "@componentsCommon": resolve(__dirname, "./src/components/common"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@context": resolve(__dirname, "./src/context"),
      "@utils": resolve(__dirname, "./src/utils"),
      "@enums": resolve(__dirname, "./src/enums"),
      "@constants": resolve(__dirname, "./src/constants"),
      "@reducers": resolve(__dirname, "./src/reducers"),
    },
  },
  plugins: [react()],
});