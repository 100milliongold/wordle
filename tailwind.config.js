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
        'board-black': '#3a3a3',
        'board-correct': '#538d4e',
        'board-present': '#b59f3b',
        'board-absent': '#3a3a3c',
      },
      borderColor: {
        board: '#3a3a3c',
        howTo: '#878a8c',
        correct: '#538d4e',
        present: '#b59f3b',
        absent: '#3a3a3c',
      },
      flex: {
        half: '0.5',
      },
      fontFamily: {
        LibreFranklin: ['Libre Franklin'],
      },
      fontSize: {
        key: '1.25em',
      },
      textColor: {
        board: '#fff',
      },
      backgroundImage: {},
      margin: {
        key: '0 6px 0 0',
      },
      width: {
        board: '350px',
      },
      height: {
        board: '420px',
        keyboard: '200px',
        key: '58px',
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
