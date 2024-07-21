import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Layout from "../components/layout"

import { IoMdReturnLeft } from "react-icons/io"
import IconButton from "../components/ui/IconButton"
import { Box, Text } from "@chakra-ui/react"
import PostCard from "../components/ui/PostCard"

const CategoryTemplate = ({ location, data, pageContext }) => {
  const { title, category } = pageContext
  const posts = data.allMarkdownRemark.edges

  const clickHandler = () => {
    navigate(-1)
  }

  return (
    <Layout location={location} title={title}>
      <IconButton
        Icon={<IoMdReturnLeft size="1.35em" />}
        clickHandler={clickHandler}
      />
      <Box mt="2em">
        <Text fontSize="2xl">✍🏼 {category}</Text>
        <ul>
          {posts.map(({ node }) => (
            <PostCard
              key={node.id}
              url={node.fields.slug}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              date={node.frontmatter.date}
            />
          ))}
        </ul>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query ($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
            category
          }
        }
      }
    }
  }
`

export default CategoryTemplate
