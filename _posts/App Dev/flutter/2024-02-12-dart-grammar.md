---
title: "[Dart] Flutter를 위한 Dart의 핵심 문법을 알아보자"
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

![](https://i.imgur.com/GI7fwrN.png)
✍️ 헷갈리는 문법 정리 

# Variables
## 1. Var 

함수나 메소드 내에서 **지역변수**를 지정할 때는 var 키워드를 사용한다.
```dart
void main() {
	var name = "Daisy";
}
```

class에서 **변수나 프로퍼티**를 선언할 때는 명시적 타입을 사용한다. 
```dart
class Student {
	String? name;
	double? height;
}
```

## 2. Dynamic Type 

여러가지 타입을 가질 수 있는 타입이다. 
```dart
dynamic name; // 어떠한 타입도 모두 할당 가능하다 
```
변수를 선언할 때 dynamic을 명시해주거나 var 키워드와 함께 값을 지정해주지 않으면 dynamic 타입을 가지게 된다. 
```dart
dynamic name;
var name;
```

### 🦭 Object vs Dynamic

- Object is a class in Dart's core library. It is the root of the Dart class hierarchy and is a supertype of all Dart types, meaning every class and data types are extended from Object.  
- Dynamic is a type that tells the Dart compiler to skip type checking at compile time. This means that the type of a dynamic variable can be determined at runtime.

## 3. Final vs Const

두 타입 모두 한 번 값을 할당하게 되면 변수는 수정할 수가 없어진다. 다만 차이는 아래와 같다. 

**final**은 **런타임**에 값이 정해진다.
따라서 선언과 동시에 값을 할당해주지 않아도  된다. 
```dart
final String name;
name = 'daisy'; // 한 번 할당해줄 수 있음
```

**const**는 **컴파일 타임**에 값이 정해진다. 
따라서 선언과 동시에 값을 할당해주어야 한다. 
```dart
const String name = 'daisy'; 
const int age; // 에러
```

## 4. Late Variables

nullable하지 않은 변수를 초기 데이터 없이 먼저 생성하고 추후에 데이터를 넣을 때 사용한다. 
```dart
void main() {
	late var name;
	name = 'daisy';

	final age;
	age = 10;
}
```
그러나 같은 함수나 매소드에서 쓰일 때는 큰 의미는 없고 **클래스**에서 사용할 때 유용하다. 
dart 홈페이지에서는 api 호출 후 사용하는 부분에서 사용하기 편리하다고 강조한다. 
```dart
class Student {
	late final name;
	// final age; // 에러. 클래스에서는 선언과 동시에 초기화를 해주어야하지 때문. 다만 생성자를 사용하면 해결되긴 한다. 
}

void main() {
	final student = Student();
	student.name = 'daisy';
}
```

### 🦭 그냥 nullable로 선언하면 안될까?

```dart
class Coffee {
	String _temperature;
	
	void heat() { _temperature = 'hot'};
}
```
위의 코드는 에러가 난다. nullable하지 않은 변수인 _ temperature가 초기화되지 않고 사용됐지 때문이다.
Dart에 대한 이해도가 부족하면 아래와 같이 nullable한 변수로 변경하여 사용할 수도 있다. 
```dart
class Coffee {
	String? _temperature;
	
	void heat() { _temperature = 'hot'};
}
```
이러면  치명적인 실수가 발생할 수 있다. 당장 눈앞의 에러는 사라지지만, _ temperature에 null 값을 받을 생각이 전혀 없는데도 나중에 코드를 확인한 다른 사람은 null 값이 들어가도 되는 변수라고 오해를 학 ㅔ되는 것이다. 

### 🦭 변수명 앞의 underscore( _ ) 는 뭘까?

Dart는 public, protected, private과 같은 접근 제어자를 가지고 있지 않다. 
대신 다른 기호를 사용하는데, underscore를 사용하게 되면 **정의된 .dart파일 (라이브러리) 안에서만 사용할 수 있다.**  underscore는 필드, 클래스, 메소드 등에 사용될 수 있다. 

[참고 링크](https://stackoverflow.com/questions/53142171/what-does-underscore-before-variable-name-mean-for-flutter)
It is common practice to make the `State` implementation of a widget private, so that it can only be instantiated by the corresponding `StatefulWidget`:
```dart
class MyPage extends StatefulWidget {
  @override
  _MyPageState createState() => _MyPageState();
}

class _MyPageState extends State<MyPage> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```
```
# Data Types

👉 dart의 자료형은 모두 **객체**다. 모두 class라는 뜻! 

## 1. String Interpolation

```dart
var name = 'daisy';
var age = 10;

var greeting = 'hello $name. I am ${age + 15} years old.';
```

## 2. collection if & collection for

### collection if
```dart
const isSix = true;
var lst = [
	1,
	2,
	3,
	4,
	5,
	if (isSix) 6,
];
```

### collection for 
```dart
var myFamily = ['daisy', 'gabby', 'wondu'];
var heartFamily = [
	'sunja',
	'hyungsun',
	for (var family in myFamily) '❤️ $family'
];
```

## 3. Map

python의 딕셔너리 같은 자료형이다. Key 와 Value로 이루어져 있다. 
```dart
var player = {
	'name': 'daisy',
	'age': 26,
};
```
```dart
Map<int, bool> player = {
	1: true,
	2: false,
	3: true,
};
```

# Function

👉 dart는 객체지향언어로 함수도 객체이며 타입이 function이다. 즉, **함수를 변수에 할당하거나 다른 함수에 인수로 전달할 수 있음**을 의미한다. 

## 1. Function 

하나의 표현식만 포함하는 경우 아래와 같이 표현할 수 있다. 
```dart
String greeting(String name) => 'Hello $name, nice to meet you!';

void main() {
	print(greeting('daisy')); // Hello daisy, nice to meet you!
}
```

## 2. Parameters

### Positional Parameters

- 중괄호를 적어주지 않으면 파라미터 명을 적지 않고 데이터를 순서대로 넣어 전달 해 줄 수 있다.
- 이때 인자를 하나라도 넘겨주지 않으면 컴파일이 되지 않는다. 
```dart
String greeting(String name, int age) => 'name: $name, age: $age';

void main() {
	print(greeting('daisy', 26));
}
```

### Named Parameters & Required

- 중괄호를 넣어주면 어떠한 파라미터에 어떠한 데이터를 넘겨주는 것인지 명시해야 한다. 이때 전달 순서는 중요하지 않다. 
- required modifier를 사용하여 null-safe한 코드를 짤 수 있다. 함수를 호출 할 때 무조건 값을 전해줘야 함을 컴파일러가 알 수 있게 되기 때문이다. 
```dart
String greetings({
	required String name,
	required int age,
}) {
	return 'Hello, I am $name, and I am $age years old.';
}

void main() {
	print(greetings(name: 'daisy', age: 26)); // Hello, I am daisy, and I am 26 years old.
}
```

### Optional Positional Parameters

- positional parameter는 모든 인자를 전해줘야 한다. 그러나 bracket을 사용하면 옵셔널로 사용할 수 있다.
- 이때 null crash 방지를 위해 default value를 지정해줘야 한다. 
```dart
String greeting(String name, int age, [String? country = 'Korea']) => 'name: $name, age: $age, country: $country';

void main() {
	print(greeting('daisy', 26)); // name: daisy, age: 26, country: Korea
}
```

## 3. QQ Operator

### ?? 연산자

Null이 아니라면 본래의 값을, 맞다면 오른쪽 값을 리턴한다. 
```dart
String? name;
print(name ?? 'daisy'); // daisy
```

### ??= 연산자

변수 안에 값이 null 이라면 값을 할당해준다. 
```dart
String? name;
name ??= 'daisy';
print(name); // daisy
name ??= 'gabby';
print(name); // daisy
```

## 4. Typedef

alias로 사용가능하다. 
```dart
typedef ListOfInts = List<int>;

void main() {
	ListOfInts lst;
	lst = [1, 2, 3];
}
```

# Class

## 1. Property

Property는 타입을 사용해서 정의해줘야 하고 선언과 동시에 값을 전달해줘야 한다. 
```dart
class Student {
	final String name = 'daisy';
	final int age = 26;
}
```

## 2. Constructor

생성자 함수를 이용하면 property에 늦게 값을 줄 수 있다. 
이때 late로 값을 주게 되면 
```dart
class Student {
	late final String name;
	late final int age;

	Student(String name, int age) {
		this.name = name;
		this.age = age;
	}
}

void main() {
	var student = Student('daisy', 26);
}
```

함수와 같이 required와 named parameter를 사용할 수 있다. 
```dart
class Student {
	late final String name;
	late final int age;

	Student({required this.name, required this.age});
}

void main() {
	var student = Student(
		name: 'daisy',
		age: 26,
	);
}
```

## 3. Named Constructors 

기본 생성자가 아닌 여러가지 생성자를 만들 수도 있다.
```dart
class Student {
	late final String name;
	late final int age;
	late final String sex;

	Student({required this.name, required this.age, required this.sex});

	Student.createGirl({
		required String name, 
		required int age,
	}) : this.name = name,
		 this.age = age,
		 this.sex = 'girl'; // 성별을 girl로 고정시켜준다
}
```

바로 property를 초기화 할 수 있다. 
```dart
class Student {
	late final String name;
	late final int age;
	late final String sex;

	Student({required this.name, required this.age, required this.sex});

	Student.fromJson(Map<String, dynamic> playerJson)
		: name = playerJson('name'),
		  age = playerJson['age'],
		  sex = playerJson['sex'];
}
```

## 4. Cascade Notation

반복하지 않고 객체를 변경할 수 있게 해준다.
```dart
class Student {
	late String name; // 변경을 위해 final을 지워준다
	late int age;
	late String sex;
	
	Student({required this.name, required this.age, required this.sex});
}

var student = Student(name: 'daisy', age: 26, sex: 'girl')
..name = 'gabby'
..age = 22;
```

## 5. Enums

Swift의 enum과 유사하다. 실수를 방지해주는 타입이다. 
```dart
enum Sex {
	girl,
	boy,
}

class Student {
	late final String name;
	late final int age;
	late final Sex sex;

	Student({required this.name, required this.age, required this.sex});
}

void main() {
	var daisy = Student(name: 'daisy', age: 26, sex: Sex.girl);
}
```

## 6. Abstract Classes

자바의 abstract class, 스위프트의 Protocol과 유사하다.
extends를 통해 상속받을 수 있다. 
```dart
abstract class Human {
	void hasName();
}

class Student extends Human {
	late final String name;

	Student({required this.name});

	@override
	void hasName() {
		print('My name is $name');
	}
}
```

## 7. Inheritance

상속을 받은 후 super를 통해 부모 클래스의 생성자를 호출할 수 있다.
```dart
class Human {
	final String name;

	Human({required this.name});
}

class Student extends Human {
	final int age;

	Student({
		required String name,
		required this.age,
	}) : super(name: name);
}
```

## 8. Mixin

생성자가 없는 class다. 
```dart
mixin School {
	final String school = "Sookmyung Women's University";
}

mixin Greeting {
	void sayHi() {
		print('Heyyy');
	}
}

class Student with School, Greeting {
	final String name;

	Student({required this.name});
}

main void() {
	var daisy = Student(name: 'daisy');
	daisy.sayHi(); // Heyyy
	print(daisy.school); // Sookmyung Women's University
}
```



