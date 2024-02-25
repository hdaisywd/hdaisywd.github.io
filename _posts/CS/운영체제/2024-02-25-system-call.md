---
title: "[OS] 시스템 콜에 대하여"
sidebar_main: true
categories:
  - OperatingSystem
tags:
  - OperatingSystem
toc: true
toc_sticky: true
toc_label: "System Call"
---

![](https://i.imgur.com/XnUvrGw.png)

# 1. 커널(Kernel)모드와 사용자(User)모드

## 커널(Kernel)이란?

운영체제는 규모가 큰 프로그램이다. OS가 한번에 전부 메모리에 올라가게 되면 메모리 공간 낭비가 심해진다. 따라서 필요한 부분만 메모리만 올려놓고 그외의 부분은 필요할 때 메모리에 올려서 사용한다. 이때 **메모리에 상주하는 부분을 커널(Kernel)이라고 한다**.   

## 사용자(User) 모드란?

운영체제는 사용자에게 메모리 사용의 자유를 주지 않는다. 따라서 사용자는 하드웨어 (디스크, I/O 등)에 접근할 수 없다. 접근을 위해서는 **시스템 콜(System Call)을 사용해야 한다.**   

👉🏻 **CPU는 커널 모드와 사용자 모드를 구분해서 사용한다.**  
👉🏻 **인터럽트나 시스템 콜이 발생할 시 사용자 모드에서 커널 모드로 들어가게 된다.**  

# 2. 시스템 콜 (System Call)


![](https://i.imgur.com/YGpSZNu.png)  

프로그램이 운영체제 커널이 제공하는 서비스를 이용하고 싶을 땐 시스템 콜을 통해 실행한다. 즉, **시스템 콜은 사용자가 OS의 커널 모드를 사용하고 싶을 때 OS가 제공해주는 인터페이스인 것이다.** 위의 사진을 보면 조금 더 이해하기 쉬울 것 같다. 

## 🦭 시스템 콜의 종류

***명령어는 Unix 기준입니다***  

### 1. 프로세스 제어 (Process Control)

- 끝내기 (exit), 중지 (abort)
- 적재(load), 실행(execute)
- 프로세스 생성(create process) - fork
- 프로세스 속성 획득과 속성 설정
- 시간 대기 (wait time)
- 사건 대기 (wait event)
- 사건을 알림 (signal event)
- 메모리 할당 및 해제. 

### 2. 파일 조작 (File Manipulation)

- 파일 생성 / 삭제 (create, delete)
- 열기 / 닫기 / 읽기 / 쓰기 (open, close, read, wirte)
- 위치 변경 (reposition)
- 파일 속성 획득 및 설정 (get file attribute, set file attribute)

### 3. 장치 관리 (Device Manipulation)

- 하드웨어의 제어와 상태 정보를 얻음 (ioctl)
- 장치를 요구(request device), 장치를 방출 (relese device)
- 읽기 (read), 쓰기(write), 위치 변경
- 장치 속성 획득 및 설정
- 장치의 논리적 부착 및 분리

### 4. 정보 유지 (Information Maintenance)

- getpid(), alarm(), sleep()
- 시간과 날짜의 설정과 획득 (time)
- 시스템 데이터의 설정과 획득 (date)
- 프로세스 파일, 장치 속성의 획득 및 설정

### 5. 통신 (Communication)

- pipe(), shm_open(), mmap()
- 통신 연결의 생성, 제거
- 메시지의 송신, 수신
- 상태 정보 전달
- 원격 장치의 부착 및 분리

### 6. 보호 (Protection)

- chmod()
- umask()
- chown()


# 3. 시스템 콜이 들어오면 어떻게 되나?

![](https://i.imgur.com/oTJ9S1F.png)

- 프로그램의 현재 상태를 CPU에 저장한다. 
- 시스템 콜을 커널모드가 커널코드를 실행하여 직접 처리한다. 
- 처리가 완료되면 중단됐던 프로그램 CPU 상태를 복원시킨다. 
- 통제권을 다시 프로그램에게 반환시키고 사용자 모드로 변환시킨다. 