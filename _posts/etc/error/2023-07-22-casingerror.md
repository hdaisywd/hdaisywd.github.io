---
title: "[React] Already included file name ' ' differs from file name ' ' only in casing 해결"
sidebar_main: true
categories:
  - Error
tags:
  - react
  - error
toc: true
toc_sticky: true
toc_label: "Error"
---

신나게 키보드 뚜들기다가 마주친 에러

<img width="707" alt="image" src="https://github.com/hdaisywd/hdaisywd/assets/102342953/22d40740-929a-4f8d-8dfa-d414a0e6ab0b">

잉? 이미 포햠된 파일이 대문자 소문자만 다르고 같은 파일로 취급한다는 에러인 것 같다. 파일 이름의 대소문자가 통일이 되지 않아서 생긴 문젠데.. 처음 파일을 만들때 product.js로 만들었다가 나중에 Product.js로 바꿨는데 이 과정에서 뭔가 문제가 생긴 것 같았다. 

파일 이름을 product.js로 바꿔줘도 에러가 해결되긴 하지만 난 대문자로 쓰고 싶었다. 

```
git config core.ignorecase false
```

를 커맨드창에 입력해주었다. 대소문자를 무시하라는 설정. 그리고 IDE를 완전 종료하고 다시 켰더니 빨간줄이 없는걸 확인할 수 있었다. 

으이구~!