import React from "react"
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";


function BlogPage() {
    const data = useStaticQuery(graphql`
    query {
        allFile {
            nodes {
                name
        }
      }
    }
  `);
    return (
        <Layout pageTitle="Blog">
          <p>
            Hi there! I'm the proud creator of this site, which I built with Gatsby.
          </p>

          <ul>
            {data.allFile.nodes.map(node => (
            <li key={node.name}>{node.name}</li>
            ))}
          </ul>
        </Layout>
    );
}

export default BlogPage; //바깥에서 얘한테 접근