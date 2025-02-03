import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#6DAC73",
        foreground: "var(--foreground)",
        customBlue: "#D8D2FF",
        customWhite: "#FFFFFF",
        customPurple: "#A395FF",
        customBeige: "#E1FEA2",
        textColor: "#5C46E4",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #D8D2FF, #FFFFFF, #A395FF)',
      },
    },
  },
  plugins: [],
} satisfies Config;
