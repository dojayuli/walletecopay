/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primarygray: '#9B9A9A',
        loginColor: '#4B573E',
        DashboardDesktop: '#383d39'
      },
      backgroundImage: {
        'gradient-center': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'login-pattern': "url('/src/assets/Bento_login.jpg')",
        'dashboard-bg': "url('/src/assets/dashboard_bg.jpg')",
        'OnBoarding-bgImage': 'url("/img/Group1.png"), url("/img/Group0.png")',
        'OnBoardingFooter-bgImage': 'url("/img/GroupFooter.png")'
      },
      backgroundSize: {
        '200%': '200%'
      },
      backgroundPosition: {
        'right-center': 'right center',
        'OnBoarding-bgPosition': '0px 0px, -146px -115px',
        'OnBoardingFooter-bgPosition': 'right 0px'
      },
      gradientColorStops: theme => ({
        ...theme('colors')
      })
    }
  },
  plugins: []
}
