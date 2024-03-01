# SurveyPool

## 화면 구성

- [x] UI는 상단, 중앙, 하단의 레이아웃을 가지고 있다.
- [ ] 상단에는 로고가 위치한다.
- [x] 하단은 CTA 버튼이 위치한다.
- [x] 중앙에는 설문 조사 form이 위치하고 input에 자동 focus 된다.
- [x] 중앙 가장 위에 현재 설문조사 progress 상태를 볼 수 있다. (현재 진행률)

### 화면 예시 디자인

- 다음과 같은 화면 구성을 참고하고, 명시되지 않은 꾸밈요소와 컴포넌트는 자율이다.
  https://pschzwbys8l.typeform.com/to/WkUwovxz

## 기능 구현

### 공통 질문

- [x] 유저가 입장하면 `/api/question/common`으로 질문지를 받는다.
- [ ] 유저가 대상이 아닌 경우 `/no_target`으로 redirect 시킨다.
- [x] 유저 답변을 `/api/answers/common`으로 post 요청하고, 다음 질문지 typeID와 userId를 받는다.

### 질문지

- 공통 질문을 통해 얻은 typeID를 이용해 `/api/question/:typeID`에 요청해 질문지를 받는다.
- 질문지는 data.forms에 제시된 순서로 user에게 답변을 받는다.
- 답변을 다 받으면 `/api/answers/:typeID`에 post로 작성한 답변과 userId을 업로드한다.
- nextTypeId가 없으면 `/thanks` 페이지로 이동 후 설문조사를 종료한다.

## 추가 구현

- 한/영 지원
  - 모든 api는 `?lang=en`을 통해 질문을 영어로 받을 수 있다.

## 와이어 프레임

![wireframe](./docs/wireframe.png)

## 브랜치

- feature 브랜치에서 개발 진행
- feature에서 구현 기능 단위로 브랜치를 생성한다.

## 구현 과정

### phase 1

- [x] 입출력 관련

  - [x] get요청으로 받아온 data에 의해서, 순서대로 forms를 보여주어야 한다.
  - [x] 질문을 보여주고, 답을 입력할 수 있는 input이 제시된다.
  - [x] 사용자가 잘못 된 입력값을 작성하거나, 입력을 하지 않았을 경우 에러메세지를 보여주고 다시 입력할 수 있게 한다.

### phase 1 - 구현 계획

- [x] `data.forms.type`에 맞춰 해당하는 컴포넌트를 렌더한다.
- [x] `data.escapeValidate.name`와 `data.forms.name`이 동일할 경우, `data.forms.validate.target`을 비교하여, 유효성검증을 한다.

### phase 2 - CSS

`<Question />`

- [x] Next(OK) 버튼을 눌렀을 때 index 를 넘지 않도록 하기
- [ ] footer를 구현할 때, 위 아래로 가는 버튼 만들기
- [ ] question 1(첫번째 질문) 에서 back 버튼이 disabled 되도록 하기
- [ ] 마지막 질문에서 next 버튼이 disabled 되도록 하기
- [ ] question에서 next 버튼, footer의 next버튼이 value가 입력되지 않거나 유효성 검증을 통과하지 않으면 disabled 되도록 하기
- [ ] Header는 current question 숫자를 보여주기

## 고려사항

1. 재사용성이 높은 컴포넌트 설계
2. FormSurvey에서 여러개의 컴포넌트를 보여주는 상황에서 동적 렌더링을 위한 방법 생각하기
3. ContextAPI를 적절히 활용할 것

- Provider 하위에서 context를 구독하는 모든 컴포넌트들은, 해당 value가 바뀔 때마다 rerendering이 발생하므로 성능 저하를 고려해야 한다.

## 환경설정
