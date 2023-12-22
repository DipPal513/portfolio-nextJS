module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  purge: {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: [
        // Add any specific classes you want to ensure are retained
        'bg-gradient-radial',
      ],
    },
  },
};
