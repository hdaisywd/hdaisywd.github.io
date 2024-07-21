import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { MdDarkMode } from "react-icons/md"
import { CiLight } from "react-icons/ci"
import { CiSearch } from "react-icons/ci"
import { useColorMode } from "@chakra-ui/react"
import IconButton from "./ui/IconButton"
import CategoryMenu from "./ui/CategoryMenu"

const Layout = ({ location, title, children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const iconSize = "1.3em"
  let darkMode

  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  if (colorMode === "light") {
    darkMode = (
      <IconButton
        Icon={<MdDarkMode size={iconSize} />}
        clickHandler={toggleColorMode}
      />
    )
  } else {
    darkMode = (
      <IconButton
        Icon={<CiLight size={iconSize} />}
        clickHandler={toggleColorMode}
      />
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <div style={{ display: "flex", gap: "0.5em" }}>
          {darkMode}
          <IconButton Icon={<CiSearch size={iconSize} />} />
          <CategoryMenu size={iconSize} />
        </div>
      </header>
      <main>{children}</main>
      <footer>
        ⓒ {new Date().getFullYear()} by
        {` `}
        <a href={`https://github.com/${social.github}`}>{author.name}</a>
      </footer>
    </div>
  )
}

export default Layout
