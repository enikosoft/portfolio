/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgColor: `var(--bgColor)`,
        primaryColor: `var(--primaryColor)`,

        themePrimaryColor: `var(--themePrimaryColor)`,
        themeButtonPrimaryColor: `var(--themeButtonPrimaryColor)`,
        themeButtonSecondaryColor: `var(--themeButtonSecondaryColor)`,

        headerBorderColor: `var(--headerBorderColor)`,

        leftSideBorder: `var(--leftSideBorder)`,

        textEditorColor: `var(--textEditorColor)`,
        textEditorHoverColor: `var(--textEditorHoverColor)`,
        textEditorHoverBg: `var(--textEditorHoverBg)`,

        tabBarBgColor: `var(--tabBarBgColor)`,

        tabBarActiveBorderColor: `var(--tabBarActiveBorderColor)`,
        tabBarActiveTextColor: `var(--tabBarActiveTextColor)`,
        tabBarActiveBgColor: `var(--tabBarActiveBgColor)`,
        tabBarBorderColor: `var(--tabBarBorderColor)`,
      },
      opacity: {
        c8: '0.08',
      },
      fontFamily: {
        code: ['Source Code Pro', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        laBelleAurore: ['La Belle Aurore', 'cursive'],
      },
      height: {
        header: '48px',
        content: '100svh',
        about: 'calc(80vh)',
        projects: 'calc(85vh)',
      },
      backgroundImage: {
        about: "url('assets/images/about.png')",
        cfProject: "url('assets/images/cf-logo.webp')",
      },
      boxShadow: {
        technologiesCard: `0px 0px 10px 1px theme(colors.themePrimaryColor)`,
      },
    },
  },
  plugins: [
    plugin(function ({addVariant, addBase}) {
      addVariant('blue', '.blue &');
      addVariant('light', '.light &');

      addBase({
        h1: {fontSize: '44px', lineHeight: '45px'},
        h2: {fontSize: '40px'},
        h3: {fontSize: '35px'},
      });
    }),
  ],
};
