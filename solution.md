<h1 align="center">wordle 게임 연습👋</h1>
<p>
  <img alt="react18" src="https://img.shields.io/badge/react-v18.2.0-red"/>
  <img alt="node20" src="https://img.shields.io/badge/nodejs-v20.11.1-green"/>
  <img alt="node20" src="https://img.shields.io/badge/typescript-v4.9.5-blue"/>
</p>

> wordle 게임실습

### ✨ [Demo](https://100milliongold.github.io/wordle)



## 문제 해결 절차 (작성중)

### 요구사항 분석 및 기능 구현 방안 강구
### CSS Framework 선택
### CI / CD 구축


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
3. src/core/: react-web visit , redux 등의 설정파일이 들어간 폴더
4. src/pages/:각 페이지 별로 컴포넌트를 저장하는 폴더로, 이 폴더 내에 각 페이지별로 폴더를 만들고, 해당 페이지의 JavaScript 파일과 CSS 파일을 저장한다.
5. src/utils/: 공통으로 사용되는 유틸리티 함수를 저장하는 폴더
6. src/services/: API 호출이나 외부 서비스와 관련된 코드를 저장하는 폴더.
7. src/store/: 리덕스 등의 상태 관리 라이브러리와 관련된 코드를 저장하는 폴더.
8. 타입에 대한 파일

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
