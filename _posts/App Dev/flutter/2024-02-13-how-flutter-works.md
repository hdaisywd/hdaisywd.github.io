---
title: "[Flutter] Flutter의 작동 방식 (ft. React Native)"
sidebar_main: true
categories:
  - flutter
tags:
  - flutter
  - dart
toc: true
toc_sticky: true
toc_label: "Flutter"
---

![](https://i.imgur.com/E8LT6J9.png)
✍️ 플러터의 작동 방식에 대해 알아보자  

# Architecture Layers

네이티브 어플리케이션은 ui를 그려달라고 os에 직접 요청한다. 그러나 flutter는 os와 직접 소통하지 않는다. **플러터는 비디오 게임처럼 작동**한다. engine을 통해 화면에 렌더링을 하는 것이다.   

아키텍쳐 레이어는  아래와 같다. 

![](https://i.imgur.com/AYMJzGw.png)

## Embedder

- 각 플랫폼에 맞는 임베더가 진입점 역할을 해준다. (entry point)
- Flutter 앱은 다른 네이티브 앱과 똑같이 패키지화된다. 
- OS가 rendering surface, accessibility, input등에 접근할 수 있도록 한다. 
- Message event loop을 관리한다. 
- Android는 Java, C++로, iOS와 macOS는 Objective-C/Objective-C++로, Windows와 Linux는 C++로 쓰여있다. 

## Engine

- 대부분 C++로 작성되었으며 플러터앱의 가장 기초적인 부분이다. 
- 새로운 ui가 화면에 그려질 때마다 래스터화하는 역할을 한다. 
- 그래픽, 텍스트 레이아웃, 파일 및 네트워크 I/O, 접근성 지원, 플러그인 아키텍쳐, Dart 런타임, 컴파일 툴체인과 같은 플러터의 핵심 API 중 저수준 기능의 구현을 돕는다. 

### Framework

**프레임 워크(Flutter) 레이아웃**  

- 기본적인 기반이되는 클래스, 애니메이션, 페인팅, 그리고 제스쳐와 같은 서비스
- **렌더링 레이어**는 레이아웃을 위한 추상화를 돕는다. 이 레이어는 렌더링 가능한 객체의 트리를 구축하며 동적으로 사용된다. 변경 사항이 생기면 동적으로 레이아웃이 업데이트 된다. 
- **위젯 레이어**는 composition 추상화이다. 렌더링 레이어의 객체는 모두 위젯 레이어에 상응하는 클래스가 존재한다. 또한 재사용 가능한 클래스의 조합을 정의할 수 있다. 
- **Material & Cupertino 라이브러리**는 Material(안드로이드), iOS 디자인을 구현할 수 있도록 한다. 

**그 외**  

- Flutter 프레임워크 자체는 상대적으로 작은 편이다. 개발자가 사용할 고수준 기능은 패키지로 구현되어 있다. 
  
### 🦭 Rendering surface? Message event loop?  

- **Rendering surface**란 그래픽 요소를 표시하고 화면에 렌더링 하는 공간을 나타낸다. 사용자가 앱에서 시각적으로 볼 수 있는 모든 그래픽 요소를 처리하는 곳이다. (버튼, 이미지, 텍스트 등)
- **Message event loop**이란 앱이 이벤트를 받고 처리하는 방식이다. 이벤트 루프는 사용자의 입력, 시스템 이벤트 및 기타 외부 이벤트를 처리하고 감지하는 프로세스다. 예를 들어 사용자가 화면을 터치하거나 키보드를 누르면 이벤트 루프가 해당 이벤트를 감지하고 적절한 응답을 제공한다.  
  
### 🦭 Rasterize(레스터화)?  

- **레스터화**란 그래픽을 렌더링 하는 방식 중 하나로 화면의 오브젝트를 픽셀로 매핑하는 것으로, 디스플레이 시스템이 전자 데이터 또는 신호를 비디오나 이미지로 바꾸는 프로세스다.   
  
# Flutter vs React Native

**Flutter**는 os와 직접 소통하지 않으며 engine이 화면에 ui를 그려준다. 따라서 Flutter의 구성 요소들은 네이티브 components가 아니다. 그래서 Flutter는 때에 따라 부자연스러워 보일 수 있다.   
그러나 그렇기 때문에 화면의 픽셀을 모두 개발자가 사용할 수 있다. os에 종속되지 않고 풍부한 ui를 제공할 수 있는 것이다.   

이와 다르게 **React Native**는 직접 os와 소통하여 os에게 버튼, 텍스트, 이미지 등을 그려달라고 요청한다.   
따라서 각 호스트에 따라 버튼등이 다르게 보이며 더 자연스러워 보인다.   
그러나 Flutter 만큼의 자유도는 없다.    

👉 ui 구성의 완전한 자유도를 원한다면 Flutter를, 네이티브와 최대한 가깝게 만들고 싶다면 react native를!

----
참고

[공식 문서](https://docs.flutter.dev/resources/architectural-overview)
[Composition이란](https://levelup.gitconnected.com/composition-in-flutter-dart-functional-programming-part-3-ffba917aee3d)

