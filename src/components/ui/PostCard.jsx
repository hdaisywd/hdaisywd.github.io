import React from "react"
import { LinkBox, LinkOverlay, Text, useColorMode } from "@chakra-ui/react"

const PostCard = ({ title, description, date, url }) => {
  const { colorMode } = useColorMode()
  let bg
  let color

  if (colorMode === "light") {
    bg = "gray.100"
    color = "black"
  } else {
    bg = "gray.900"
    color = "white"
  }

  return (
    <LinkBox
      as="button"
      variant="filled"
      borderRadius="md"
      bg={bg}
      color={color}
      padding="1em"
      textAlign="left"
    >
      <LinkOverlay href={url}>
        <Text m="0 2" fontSize="lg">
          <strong>{title}</strong>
        </Text>
        <Text m="0 1">{description}</Text>
        <Text m="0 0">{date}</Text>
      </LinkOverlay>
    </LinkBox>
  )
}

export default PostCard
