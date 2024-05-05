import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import tailwindIntegration from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwindIntegration()]
});