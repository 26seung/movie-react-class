# movie-react-class

### 깃허브를 이용한 정적 페이지 띄우기

`gh-pages` 를 이용하여 웹사이트를 GITHUB 도메인에 띄울 수 있다.  
 설치 방법 : `npm i gh-pages`  
`{gitUsername}.github.io/{repositoryName}` -> `26seung.github.io/movie-react-class`

설정 방법 : `package.json` 내용 수정

- 맨 하단 `"homepage": "https://26seung.github.io/movie-react-class/"` 기입
- scripts 추가 생성 -> `"deploy": "gh-pages -d build"` 통해 gh-pages 에 build 폴더를 사용 해준다.
- `"predeploy": "npm run build"` 을 통해 build 우선 폴더 생성
- 터미널에 `npm run deploy` 입력하여 실행
- `https://26seung.github.io/movie-react-class/` 이제 이동하면 만들어진 정적 웹페이지를 확인할 수 있다.

---

`동적` 할당 이란 `Heep` 영역에 메모리에 저장  
`정적` 할당 이란 `Stack` 영역에 메모리에 저장
