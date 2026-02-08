import { resolve, dirname } from "path"
import { fileURLToPath } from "url";

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'app/components'),
      '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'app/constants'),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'app/store'),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'app/hoc'),
      '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'app/windows'),
    }
  }
};

export default config;
