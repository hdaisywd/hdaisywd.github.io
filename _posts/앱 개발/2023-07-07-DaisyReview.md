---
title: "[Mac][앱개발] Flutter 간단한 화면 만들어보기"
sidebar_main: true
categories:
  - appdev
tags:
  - appdev
  - flutter
toc: true
toc_sticky: true
toc_label: "Flutter"
---

<img src="https://github.com/hdaisywd/hdaisywd/assets/102342953/54e6a3bc-159d-4efc-bc97-6bef4ab355a1" width="400" height="600"/>

이런 화면을 가진 초간단 화면을 만들어보자. 스크롤이 가능하며, search 영역에 타이핑도 가능하다. 

## 화면에 보이지 않는 영역 


------------------------------

## App Bar 



------------------------------

## Body

------------------------------

## 최종 코드 


```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(), // 홈페이지 보여주기
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // 포스터 사진 데이터
    List<Map<String, dynamic>> dataList = [
      {
        "category": "Harry Potter",
        "imgUrl":
            "https://github.com/hdaisywd/hdaisywd.github.io/assets/102342953/a332b7e9-2c34-4ee1-be84-af3183a000af",
      },
      {
        "category": "The Bigbang Theory",
        "imgUrl":
            "https://github.com/hdaisywd/hdaisywd.github.io/assets/102342953/dfbdd688-5ad7-4181-a0f3-1f06c20f268d",
      },
      {
        "category": "Modern Family",
        "imgUrl":
            "https://github.com/hdaisywd/hdaisywd.github.io/assets/102342953/174180e3-d326-40f7-a63e-5a9bf1b2d743",
      },
      {
        "category": "How I Met Your Mother",
        "imgUrl":
            "https://github.com/hdaisywd/hdaisywd.github.io/assets/102342953/c222db79-5aff-4f64-8477-a57a519222bf",
      },
      {
        "category": "Adventure Time",
        "imgUrl":
            "https://github.com/hdaisywd/hdaisywd.github.io/assets/102342953/e22a556a-801d-4219-bfc8-dc4802fd5834",
      },
      {
        "category": "the Good Doctor",
        "imgUrl":
            "https://github.com/hdaisywd/hdaisywd.github.io/assets/102342953/d38efeb5-3753-4d84-8415-29b9152c630b",
      },
      {
        "category": "911",
        "imgUrl":
            "https://github.com/hdaisywd/hdaisywd.github.io/assets/102342953/6d79804f-7f0b-420e-8600-7ddc1e5b4dde"
      }
    ];

    // 화면에 보이는 영역
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.white,
          foregroundColor: Colors.black,
          title: Text("Daisy's Reviews",
              style: TextStyle(
                fontSize: 30.0,
                fontWeight: FontWeight.w700,
              )),
          centerTitle: false,
          actions: [
            IconButton(
              icon: Icon(Icons.account_circle_outlined),
              onPressed: () {},
            ),
          ]),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(15.0),
            child: TextField(
              decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  hintText: "Search",
                  suffixIcon: Icon(Icons.search)),
            ),
          ),
          Divider(height: 1),
          Expanded(
            child: ListView.builder(
              itemCount: dataList.length,
              itemBuilder: (context, index) {
                String category = dataList[index]['category'];
                String imgUrl = dataList[index]['imgUrl'];

                return Card(
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      Image.network(
                        imgUrl,
                        width: double.infinity,
                        height: 200,
                        fit: BoxFit.cover,
                      ),
                      Container(
                        width: double.infinity,
                        height: 200,
                        color: Colors.black.withOpacity(0.5),
                      ),
                      Text(category,
                          style: TextStyle(color: Colors.white, fontSize: 36)),
                    ],
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
```