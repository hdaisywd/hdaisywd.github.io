import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { IoMdMenu } from "react-icons/io"

const CategoryMenu = ({ size }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const categories = data.allMarkdownRemark.group
  return (
    <Menu>
      <MenuButton>
        <IoMdMenu size={size} />
      </MenuButton>
      <MenuList>
        <MenuGroup title="🛠️" type="radio" fontSize="lg">
          {categories.map(category => {
            if (!category.fieldValue.includes("_")) {
              return (
                <MenuItem
                  as="a"
                  key={category.fieldValue}
                  href={`/category/${category.fieldValue}`}
                  command={category.totalCount}
                >
                  {category.fieldValue}
                </MenuItem>
              )
            }
          })}
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="💭" type="radio" fontSize="lg">
          {categories.map(category => {
            if (category.fieldValue.includes("_")) {
              return (
                <MenuItem
                  as="a"
                  key={category.fieldValue}
                  href={`/category/${category.fieldValue}`}
                  command={category.totalCount}
                >
                  {category.fieldValue}
                </MenuItem>
              )
            }
          })}
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default CategoryMenu
