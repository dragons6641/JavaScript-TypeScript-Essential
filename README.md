2021-09-29(수)

# 프로젝트 개요

## 1. 기본 정보

- 이 프로젝트는 패스트캠퍼스 <김민태의 프론트엔드 아카데미 : 제 1강 JavaScript & TypeScript Essential> 강의를 수강하며 구현한 프로젝트입니다.
- 서비스를 직접 기획/설계/배포/관리하는 것보다는, JavaScript와 TypeScript를 공부할 목적으로 강의 소스 코드를 따라해 가며 작성했습니다.
- 소스 코드의 동작 원리를 깊이 있게 이해하고, 프론트엔드 개발자로서 성장하기 위한 기본기를 다지는 데에 중점을 두었습니다.
- 프로젝트 진행 과정과 공부한 내용을 정리한 markdown 문서는 아래 페이지의 `Hacker News Client` 섹션에서 확인할 수 있습니다.

[dragons6641](https://www.notion.so/dragons6641-89a6f44825fc40d9875e63713536554d) 

## 2. 상세 정보

[GitHub - dragons6641/JavaScript-TypeScript-Essential: 김민태의 프론트엔드 아카데미 : 제 1강 JavaScript & TypeScript Essential](https://github.com/dragons6641/JavaScript-TypeScript-Essential)

- 전체 소스 코드는 위 GitHub Repository에서 확인할 수 있습니다.
- `Part3` 디렉토리에는 JavaScript만으로 Hacker News Client를 구현한 소스 코드를 모아두었습니다.
- `Part4` 디렉토리에는 JavaScript로 작성한 코드를 TypeScript로 재구성한 소스 코드를 모아두었습니다.
- 나머지 디렉토리에는 강의를 들으며 공부한 내용을 정리할 용도로 작성한 소스 코드를 모아두었습니다.

## 3. Hacker News

[Hacker News](https://news.ycombinator.com/)

- 해커뉴스는 유명한 개발자 커뮤니티 사이트입니다.
- Hacker News 클라이언트 앱은 이 사이트에 있는 데이터를 읽어온 후, 목록/내용/댓글 표시, 페이징 기능을 제공합니다.

## 4. Reference

- HNPWA API의 News([https://api.hnpwa.com/v0/news/1.json](https://api.hnpwa.com/v0/news/1.json)) item feed를 사용했습니다.

[HNPWA](https://hnpwa.com/)

[hacker-news-pwas/api.md at master · tastejs/hacker-news-pwas](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

- CSS와 굉장히 유사하지만, 훨씬 더 간편하게 쓸 수 있는 라이브러리인 tailwindcss를 사용했습니다.

[Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)

# 파일/디렉토리 구조

![0](https://user-images.githubusercontent.com/43373202/135227729-f5d85e88-a6fb-4dbd-9df3-26f01ad10f93.jpg)

- `src` : 자주 사용하는 소스 코드를 모아둔 디렉토리입니다.
    - `src/core` : 공통적으로 사용하는 소스 코드를 모아둔 디렉토리입니다.
        - `src/core/api.ts` : NewsFeedApi, NewsDetailApi 클래스와 상위 클래스인 Api 클래스를 구현한 소스 코드입니다.
        - `src/core/router.ts` : 여러 개의 뉴스를 둘러볼 수 있도록 화면을 전환하는 Router 클래스를 구현한 소스 코드입니다.
        - `src/core/view.ts` : NewsDetailView, NewsFeedView의 상위 클래스인 View 클래스를 구현한 소스 코드입니다.
    - `src/page` : UI와 페이징 기능을 구현하는 데 필요한 클래스를 모아둔 디렉토리입니다.
        - `src/page/index.ts` : page 디렉토리의 파일을 다른 파일에서 편리하게 import할 수 있도록 page 디렉토리에서 export할 클래스를 명시한 소스 코드입니다.
        - `src/page/news-detail-view.ts` : 개별 뉴스의 제목과 댓글/대댓글을 확인할 수 있는 NewsDetailView 클래스를 구현한 소스 코드입니다.
        - `src/page/news-feed-view.ts` : 전체 뉴스 목록을 확인하고 이전/다음 페이지로 이동할 수 있는 NewsFeedView 클래스를 구현한 소스 코드입니다.
    - `src/types` : 인터페이스를 모아둔 디렉토리입니다.
        - `src/types/index.ts` : 인터페이스로 정의한 타입 규격을 모아둔 소스 코드입니다.
- `app.ts` : 브라우저에서 실행되는 메인 소스 코드입니다.
- `config.ts` : url을 담고 있는 설정 데이터를 모아둔 소스 코드입니다.
- `store.ts` : 전역으로 접근할 수 있는 객체를 안전하게 관리하기 위한 소스 코드입니다.
- `index.html` : 웹 페이지를 구성할 HTML 소스 코드입니다.
- `tsconfig.json` : 타입스크립트 설정 파일입니다.

# 실행 방법

## 1. parcel.js 설치

[🚀 Getting Started](https://parceljs.org/getting_started.html)

- Hacker News Client를 실행하기 위해서는 parcel.js 설치가 필요합니다.
- 아래 명령어를 터미널에 입력하여 parcel.js를 설치합니다.

```jsx
// yarn을 사용하는 경우 아래 명령어 입력
yarn global add parcel-bundler
// npm을 사용하는 경우 아래 명령어 입력
npm install -g parcel-bundler
```

![1](https://user-images.githubusercontent.com/43373202/135227780-33dd5ceb-f88f-4354-a75e-2b431fc4c032.jpg)

## 2. 프로젝트 세팅

- 문서 상단의 소스 코드 링크를 클릭한 후, github repository에서 소스 코드를 다운로드 받습니다.
- Hacker News Client의 최신 버전 소스 코드는 `JavaScript-TypeScript-Essential` Repository의 `Part4` 폴더에 있습니다.
- VSCode 에디터의 터미널에서 디렉토리를 `Part4` 폴더의 위치로 변경합니다.
- 터미널에 `npm install` 명령어를 입력하여 `package.json` 파일에 나열된 모든 패키지를 설치합니다.

![2](https://user-images.githubusercontent.com/43373202/135227820-48c0bace-7355-420b-a81a-20a7bb4e293f.jpg)

## 3. 프로젝트 실행

- 터미널에서 `parcel index.html` 명령어를 입력하면 프로젝트를 실행할 수 있습니다.
- 크롬 브라우저에서 [http://localhost:1234](http://localhost:1234) 주소로 접속하면 프로젝트의 실행 결과를 확인할 수 있습니다.

![3](https://user-images.githubusercontent.com/43373202/135227850-40d9d944-4d6b-4b90-a022-d6e8b6486e97.jpg)

# 실행 결과

## 1. 뉴스 목록 조회

- 프로젝트를 실행했을 때 가장 먼저 확인할 수 있는 메인 화면입니다.
- 뉴스 제목, 뉴스 작성자의 id, 좋아요 갯수, 뉴스 작성 시각, 댓글 갯수를 표시합니다.
- 뉴스 제목을 클릭하면 개별 뉴스를 조회할 수 있습니다.

![4](https://user-images.githubusercontent.com/43373202/135227880-6ae52e61-9481-4a31-b17c-60ad03fa5284.jpg)

## 2. 개별 뉴스 조회

- 해당 뉴스의 제목, 댓글/답글을 확인할 수 있습니다.
- 댓글/답글이 달린 시각을 표시하고, 들여쓰기로 댓글과 답글을 구분할 수 있도록 했습니다.
- 우측 상단 `X` 버튼을 누르면 뉴스 목록 조회 화면으로 이동합니다.

![5](https://user-images.githubusercontent.com/43373202/135227904-e1b37e7a-6c5a-44de-9aa7-334fb509f9c5.jpg)

## 3. 읽음 상태 표시

- 사용자가 아직 한 번도 읽지 않은 뉴스는 흰색 배경으로, 사용자가 한 번이라도 읽은 뉴스는 빨간색 배경으로 표시합니다.

![6](https://user-images.githubusercontent.com/43373202/135227928-c6415f79-0705-4b0a-bca5-7585f680fa33.jpg)

## 4. 페이징

- 한 페이지에는 최대 20개의 개별 뉴스가 표시됩니다.
- 화면 우측 상단 `Previous` 버튼을 누르면 이전 페이지로, `Next` 버튼을 누르면 다음 페이지로 이동합니다.
- 페이지를 이동하면 브라우저 주소창의 페이지 번호가 변경되는 것을 확인할 수 있습니다.

![7](https://user-images.githubusercontent.com/43373202/135227962-cfc908b6-157f-49ba-8aed-9de06899c771.jpg)

---
