/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  // 사용자 설정 및 지원하지 않는 기능 가져오기
  theme: {
    content: ['./src/assets/**/*.svg'],
    extend: {
      colors: {
        mainBG: '#e3e3e1', // 메인 백그라운드 컬러
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
