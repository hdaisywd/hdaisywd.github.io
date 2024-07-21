import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/ui/PostCard"
import { Stack } from "@chakra-ui/react"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  console.log(location)
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>아직 쓰인 글이 하나도 없습니다 :(</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      
      <ol style={{ listStyle: `none` }}>
        <Stack spacing='1em'>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <PostCard
                key={post.fields.slug}
                url={post.fields.slug}
                title={title}
                description={post.frontmatter.description}
                date={post.frontmatter.date}
              />
            )
          })}
        </Stack>
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`
