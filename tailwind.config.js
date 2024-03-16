/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  // 사용자 설정 및 지원하지 않는 기능 가져오기
  theme: {
    content: ['./src/assets/**/*.svg'],
    extend: {
      colors: {
        mainBG: '#e3e3e1', // 메인 백그라운드 컬러
        board: '#818384',
        'board-correct': '#538d4e',
        'board-present': '#b59f3b',
        'board-absent': '#3a3a3c',
      },
      textColor: {
        board: '#fff',
      },
      backgroundImage: {},
      width: {
        board: '350px',
      },
      height: {
        board: '420px',
        keyboard: '200px',
      },
      padding: {
        board: '10px',
      },
      gridTemplateRows: {
        board: 'repeat(6, 1fr)',
      },
      gridTemplateColumns: {
        board: 'repeat(5, 1fr)',
      },
      gap: {
        board: '5px',
      },
    },
  },
  plugins: [],
};
