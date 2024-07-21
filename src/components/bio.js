import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import avatar from "../images/profile-pic.gif"
import { FaGithub } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"
import {
  Card,
  CardBody,
  Stack,
  Text,
  Avatar,
  Highlight,
} from "@chakra-ui/react"
import IconLink from "./ui/IconLink"

const Bio = () => {
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

  return (
    <div className="bio">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Avatar size="2xl" name="author" src={avatar} />
        <Stack>
          <CardBody>
            <Highlight
              query={author.name}
              styles={{
                px: "2",
                py: "1",
                rounded: "full",
                bg: "green.400",
                fontWeight: "semibold",
              }}
            >
              {author.name}
            </Highlight>
            <Text style={{ marginTop: "1em", marginBottom: "0.4em" }}>
              {author?.summary}
            </Text>
            <div style={{ display: "flex", gap: "0.5em" }}>
              <IconLink
                Icon={<FaGithub size="1.5em" />}
                url={`https://github.com/${social?.github}`}
                label="Github"
              />
              <IconLink
                Icon={<MdAlternateEmail size="1.5em" />}
                url={`mailto:${social?.email}`}
                label="Email"
              />
            </div>
          </CardBody>
        </Stack>
      </Card>
    </div>
  )
}

export default Bio
