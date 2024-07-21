---
title: ☯ Chakra UI로 Gatsby에 다크모드 30초만에 적용하기
date: "2024-07-20"
description: 안녕하세요? 차크라를 이용해서 갯츠비 블로그에 다크모드를 적용시켜 봅시다. 모두 소등 블로그 샷다 내려.
category: "_etc"
---

안녕하세요. 오늘은 차크라로 다크모드를 설정하는 법에 대해 알아보겠습니다.

![](https://i.imgur.com/LnzMPM8.png)

사실 30초는 뻥이구요.. 그래도 Chakra UI는 다크모드 설정이 가능한 빌트인 기능 ColorMode가 있어서 굉장히 빨리 구현이 가능 합니다. ㅎㅅㅎ

#### Gatsby에 차크라 설치하기

[공식 문서](https://v2.chakra-ui.com/getting-started/gatsby-guide) 링크에 들어가서 그대로 따라해주시면 됩니다. 저는 gatsby-starter-blog 테마를 사용하고 있는데요.

```
gatsby-browser.js
```

이 파일을 건드려주면 됩니다.

**gatsby-browser.js**

```js
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

import { customTheme } from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={customTheme}>{element}</ChakraProvider>
)
```

이렇게.. 하란대로 해주었습니다.

그런데 `wrapRootElement`란 무엇일까요?  
👉 [문서](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement)를 찾아보니 정체는 Gatsby에서 제공하는 API였습니다. 어플리케이션의 전체를 감싸 context를 전달 할 때 쓰일 수 있다고 합니다. 그것도 모르고 .. 어딜 감싸주라는거야.. 하고 고민했습니다. 쩝. 아직 한참 먼 나.

#### Theme Config 커스텀 하기

먼저 Chakra의 defaultTheme을 커스텀을 해줍니다. 고려해야 할 옵션은 2가지 입니다.

- `initialColorMode`: 유저가 사이트에 처음 접속했을 때의 모드를 정해줍니다. `dark`, `light`, `system` 중에 하나를 골라서 넘겨주면 됩니다.
- `useSystemColorMode` : `boolean` 값을 넘겨주면 됩니다. `true` 일 시 차크라는 사용자의 시스템 모드를 상시 확인하여 반응을 하게 됩니다.

**theme.js**

```js
import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default theme
```

저는 첫 시작은 사용자의 시스템을 따라가고, 그 후부턴 차크라가 더이상 사용자 시스템 모드를 추적하지 않도록 해두었습니다.

#### ColorModeScript 추가해주기

다시 `gatsby-browser.js`로 돌아가서 스크립트를

```js
<ColorModeScript initialColorMode={theme.config.initialColorMode} />
```

호호호 그럼 이제 절반은 왔습니다. 이제 `toggle` 기능을 구현해봅시다.

#### useColorMode 훅 사용하기

차크라에서는 현재 ColorMode 값과 토글 기능을 제공하는 훅을 제공하고 있습니다.

![](https://i.imgur.com/TtNadzH.png)

1. 훅을 사용하여 `colorMode`로 현재 ColorMode, 그리고 `toggleColorMode`로 토글 함수를 가져옵니다.

```js
const { colorMode, toggleColorMode } = useColorMode()
```

2. `toggleColorMode`을 onClick에 넘겨줍니다.

```js
<Button onClick={toggleColorMode}>
  Toggle {colorMode === "light" ? "Dark" : "Light"}
</Button>
```

두 코드를 아무데나 붙여 넣어서 확인해봅시다. 저는 아이콘도 추가하고.. 조금 꾸며줬습니다. 아무튼!
![](https://i.imgur.com/u2OFPLk.png)
![](https://i.imgur.com/Ka5VVM8.png)
헉!!!!!!!!!!!!!

![](https://i.imgur.com/vsytmhj.png)

이정도면 30초 아닐까요? 하하.  
이렇게 다크모드 구현을 완료했습니다. 세세한 스타일은 `theme.js`를 통해 구현해주면 될 것 같군요.
