import React from 'react'
import { Tooltip } from "@chakra-ui/react"

const IconLink = ({ Icon, url, label }) => {
  return (
    <Tooltip hasArrow label={label} fontsize="md" placement="auto">
      <a href={url}>{Icon}</a>
    </Tooltip>
  )
}

export default IconLink
