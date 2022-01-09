import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../style/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log("homeData: ", data)
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
    <div>
      <Layout>
        <section className={styles.header}>
          <div>
            <h2>Design</h2>
            <h3>Design & Deploy</h3>
            <p>Ux designer & web developer based in Manchester</p>
            <Link to="/projects" className={styles.btn}>
              My Portfolio Projects
            </Link>
          </div>
          <GatsbyImage image={image} alt="banner" />
        </section>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, sizes: "200")
      }
    }
  }
`
