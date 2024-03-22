<h1 align="center">wordle 게임 연습👋</h1>
<p>
  <img alt="react18" src="https://img.shields.io/badge/react-v18.2.0-red"/>
  <img alt="node20" src="https://img.shields.io/badge/nodejs-v20.11.1-green"/>
  <img alt="node20" src="https://img.shields.io/badge/typescript-v4.9.5-blue"/>
</p>

> wordle 게임실습

### ✨ [Demo](https://100milliongold.github.io/wordle)

## 문제 해결 절차

### 요구사항 분석

1. https://www.nytimes.com/games/wordle/index.html 와 비슷한 UI
2. 문자열 일치시 승리
3. 미 일치시 단어가 속하는지 파악

### 기능 구현 방안

1. 사용자 입력 문자를 A ~ Z 까지만 인식

```typescript
export type CHAR =
  | ''
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'M'
  | 'N'
  | 'L'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';
```

2. 입력현황을 2차원 배열으로 지정

```typescript
export type BOARD = [
  [CHAR, CHAR, CHAR, CHAR, CHAR],
  [CHAR, CHAR, CHAR, CHAR, CHAR],
  [CHAR, CHAR, CHAR, CHAR, CHAR],
  [CHAR, CHAR, CHAR, CHAR, CHAR],
  [CHAR, CHAR, CHAR, CHAR, CHAR],
  [CHAR, CHAR, CHAR, CHAR, CHAR],
];
```

3. 사용자가 엔터 입력시 API 호출 및 단어 일치 확인

### CSS Framework 선택

1. material-ui

- emotion 내장으로 css in javascript 가능
- 무거운 컴포넌트들
- 커스터마이징이 상대적으로 어려움

2. tailwind

- CSS를 작성할 때 시간을 많이 절약할 수 있음
- 커스터마이징이 쉬워 원하는대로 디자인을 변경할 수 있음
- 반응형 디자인 구현도 쉬워짐
- tailwind를 사용할 수 없는 스타일인 경우에 별도의 css 파일을 생성해야 하기 때문에 일관성 있는 스타일링이 어려울 수 있음

- tailwind 에 style-component 가 가능한 [twin.macro](https://github.com/ben-rogerson/twin.macro) 선택

## 폴더 구조

```
wordle/
  ├── public/
  │   ├── index.html
  │   └── favicon.ico
  ├── src/
  │   ├── assets/
  │   │   ├── images/
  │   │   └── css/
  │   ├── components/
  │   │   └── ...
  │   ├── core/
  │   │   └── ...
  │   ├── pages/
  │   │   └── ...
  │   ├── utils/
  │   ├── services/
  │   ├── store/
  │   ├── types/
  │   └── index.tsx
  ├── .gitignore
  ├── package.json
  └── README.md
```

1. public/: 정적 파일들이 위치한 폴더로 index.html, 파비콘 등이 들어간다.
2. src/assets/: 이미지, 글꼴, 스타일시트 등과 같은 자산이 저장되는 폴더.
3. src/components/: 재사용 가능한 UI 컴포넌트를 저장하는 폴더로, 각 컴포넌트는 자신만의 폴더를 가지고, 그 안에 해당 컴포넌트의 JavaScript 파일과 CSS 파일이 들어간다.
4. src/core/: react-web visit , redux 등의 설정파일이 들어간 폴더
5. src/pages/:각 페이지 별로 컴포넌트를 저장하는 폴더로, 이 폴더 내에 각 페이지별로 폴더를 만들고, 해당 페이지의 JavaScript 파일과 CSS 파일을 저장한다.
6. src/utils/: 공통으로 사용되는 유틸리티 함수를 저장하는 폴더
7. src/services/: API 호출이나 외부 서비스와 관련된 코드를 저장하는 폴더.
8. src/store/: 리덕스 등의 상태 관리 라이브러리와 관련된 코드를 저장하는 폴더.
9. 타입에 대한 파일

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **100milliongold**

- Github: [@100milliongold](https://github.com/100milliongold)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
