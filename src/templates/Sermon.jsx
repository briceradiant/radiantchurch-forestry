import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

// import Layout from '../components/layout'
// import PostList from '../components/post-list'

class Sermon extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const childPosts = this.props.pageContext.children

    return (
      <>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <section className="section page-content">
          <div class="container article-header has-text-centered">
            <h1 class="title">Sermon: {post.frontmatter.title}</h1>
          </div>
        </section>
      </>
    )
  }
}

export default Sermon

export const sermonQuery = graphql`
  query SermonBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
