---
title: "[Xcode] FirebaseAuth 못 찾는 에러!"
sidebar_main: true
categories:
  - Error
tags:
  - Xcode
toc: true
toc_sticky: true
toc_label: "Error"
---

않의.. Firebase 패키지를 전부 설치하고 Auth까지도 설치를 했는데 자꾸 못 찾겠다고 인식이 안되는 일이 생김. 왜 이러는건데.. 

<img width="153" alt="image" src="https://github.com/CodeFantasia/iOS/assets/102342953/3b305c44-7975-4b2f-925c-018f5b841b56">

우리 플젝엔 Target이 2개가 있다. CodeFantasia에서는 FirebaseAuth가 인식이 되는데 CodeFantasia - Dev에서는 인식이 안되는 에러가 발생. 

<img width="573" alt="image" src="https://github.com/CodeFantasia/iOS/assets/102342953/cd574d16-944c-4f07-927f-137b6f71ca2c">

여기서 해결해주면 된다. Taget -> General -> Frameworks, Libraries, and embedded Content에 들어가서 있나 없나 확인해준다. 위의 사진은 내가 이미 추가한 후라 저렇다. 아무튼! + - 에서 직접 선택해서 넣어주면 끝. 