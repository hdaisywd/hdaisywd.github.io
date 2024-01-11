---
title: "[Dart] 왜 int는 소문자로 시작하고 String은 대문자로 시작하나 (ft. built-in types)"
sidebar_main: true
categories:
  - flutter
tags:
  - flutter
  - dart
toc: true
toc_sticky: true
toc_label: "Dart"
---

📝 **들어가기 전에..**

Dart 기초 문법을 학습 하던 중..

```dart
String name = "다홍";
int age = 26;
```
오~ 문자열은 대문자고 정수는 소문자네? 나의 사고는 아래와 같이 흘러갔다. 

**Java 에서 ...**
int는 원시타입이고 String은 클래스다. 그래서 String은 대문자로, int는 소문자로 시작한다.

**Swift 에서 ...**
Int와 String 모두 구조체다. 그래서 둘 다 대문자로 시작한다. 

그렇다면 Dart는? Java와 같이 정수형은 원시타입이고 문자열은 클래스여서 그런것 아닐까? 라는 생각이 든다. 

[int 공식문서](https://api.flutter.dev/flutter/dart-core/int-class.html)를 찾아보면 명백히 클래스라고 나와있는 것을 확인할 수 있다. 어..어?! 

<img src="https://i.imgur.com/LlGsl9u.png" height="300" width="500">

다시 확인해봐도 class다. 

그럼 스트링을 찾아볼까? 
[String 공식문서](https://api.dart.dev/stable/3.2.4/dart-core/String-class.html)를 찾아보면 스트링 또한 명백히 클래스라고 나와있다. (!!!)

<img src="https://i.imgur.com/TdSWHOb.png" height="300" width="500">

어 뭐지.. 어떻게 되는거지

검색을 해보다가 찾은 [Dart 이슈에 있는 질문 하나](https://github.com/dart-lang/sdk/issues/1410)! 답변을 보면 그 누구도 명확히 답을 내지 못하고 있고 이 이슈는 바로 닫혀버렸다....... 
이 포스트 또한 **명확한 답을 알 수 없다**는 결론을 내리고 글을 쓰게 되었다. 그러나 내 나름 문서를 찾아보고 검색을 해보고 고민을 해 본 것들을 몇 가지 끄적여보려고 한다.

혹시나 명백한 이유를 아는 분이 계신다면 댓글 부탁합니다. 

# Dart와  Build-in Types

📝 **들어가기 전에..**

왜 갑자기 이걸 찾아보냐고? 왜냐하면 Dart에는 원시 타입(Primitive Type)이 없고 모두 Object를 상속받은 타입이기 때문이다. 그리고 이걸 난 이번에 처음 알게 되었다. 그래서 이걸 잠깐 정리해보려고 한다. 

[Dart의  Built-in types 공식 문서](https://dart.dev/language/built-in-types)
위를 읽고 요약을 한 것에 불과하니 링크에 들어가서 꼼꼼히 읽어보길 권한다. 

Dart는 빌트인 타입이 있다. 이름 그대로 이미 구현이 되어 있고 ready to go 상태인 타입들이다. 타입으로는 아래와 같은 친구들이 있다. 

- [Numbers](https://dart.dev/language/built-in-types#numbers) (`int`, `double`)
- [Strings](https://dart.dev/language/built-in-types#strings) (`String`)
- [Booleans](https://dart.dev/language/built-in-types#booleans) (`bool`)
- [Records](https://dart.dev/language/records) (`(value1, value2)`)
- [Lists](https://dart.dev/language/collections#lists) (`List`, also known as _arrays_)
- [Sets](https://dart.dev/language/collections#sets) (`Set`)
- [Maps](https://dart.dev/language/collections#maps) (`Map`)
- [Runes](https://dart.dev/language/built-in-types#runes-and-grapheme-clusters) (`Runes`; often replaced by the `characters` API)
- [Symbols](https://dart.dev/language/built-in-types#symbols) (`Symbol`)
- The value `null` (`Null`)

오늘은 이 중 Numbers와 Strings만 보려고 한다. 

## 1. Strings

<img src="https://i.imgur.com/nflu0T3.png" height="300" width="500">

**String**은 UTF-16 코드 유닛의 순서가 있는 모음(sequence)이다. 다트에서의 스트링은 다른 언어와 비슷하게 동작한다. 큰 따옴표, 작음 따옴표를 사용할 수 있으며 보간법 또한 사용되고 있다. 
## 2. Numbers

<img src="https://i.imgur.com/WATRMu0.png" height="300" width="500">

**Numbers**는 두 개의 타입을 가지고 있다. 하나는 정수형인 integer, 그리고 하나는 실수형인 double이다. 문자열과 마찬가지로 int와 double 또한 여타 언어들과 비슷하게 동작한다. 

# 그리고 나의 결말

... 모르겠다! 
다트 팀에서 그냥 자바에서 넘어오는 유저들을 위해 비슷하게 간 게 아닌가 싶다. 도무지 컨밴션을 맞추지 않은 이유를 모르겠다. 개인적으로 이런 불분명함을 굉장히 불편해하는 사람이기에 깃허브에서 다트 팀이 이슈를 닫아버린게 너무나도 아쉽다...... 

아래는 [읽어 볼 만한 답변](https://github.com/dart-lang/sdk/issues/1410#issuecomment-546861455)이다. 이번 포스팅은 조금은 허접하고 허무하지만.. 여기서 끝내도록 하겠다. 아래의 글을 꼭 한 번 읽어보길 바란다. 

>The real question, if you are going for consistency, is why `int` is not `Int`. Dart generally capitalize types, so the exception here is not `String`, it is `int`, `double` and `bool` (and `void`, but that wasn't originally a real type).
>
So if you want _consistency_, we should make `int` be `Int`. Or maybe it should even be `Integer`, because we also discourage abbreviations.
>
In Java, `int` is lower case and `Integer` is capitalized because the former is a primitive type and the latter is an object type. Dart does not have that distinction, our `int` is an object type, so we don't actually have any consistency-based reason for making `int` short and lower-case.
>
Or maybe there is one reason: `int`, `double` and `bool` instances are automatically canonicalized. You cannot have two `int` instances with the same value without them being `identical`. That's the one property that Dart has taken from Java/C#/JavaScript primitive types, and it does not apply to strings (like it doesn't in Java and C# either).
>
The real reason Dart has those exceptions (`int`, `double` and `bool`) is because of trade-offs between usability, user expectation and consistency. Dart was designed as a _pragmatic_ language. It values consistency, but not at any price. The familiarity/user-expectation goal was generally influenced by Java, JavaScript and C#, and it was considered better usability to make those types short, recognizable and easy to write.
>
Making `String` be `string` was not a trade-off that seemed worth it. It would probably have worked perfectly well if we had used `string` instead, but we didn't. We are not going to change that now.
>
(If we get generalized type aliases, you can probably define your own `typedef string = String;`. I implore you not to, because it would _not_ improve the readability of your code. Historically, the reason Java did not have a C-like `#define` functionality was explicitly because they did not want people writing in a myriad of private dialects that other people couldn't read).