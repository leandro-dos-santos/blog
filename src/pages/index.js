import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  const { posts } = data.blog

  return (
    <main className="container mx-auto grid grid-cols-2 gap-4">
      <div>
        <p>image</p>
        <p>Leandro Machado</p>
        <p>Web Developer has been six years. I write Golang and JavaScript.</p>
      </div>

      <div>
        {posts.map(post => (
          <article key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`