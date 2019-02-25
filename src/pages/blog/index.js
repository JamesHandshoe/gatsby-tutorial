import React from 'react';
import { Link, graphql } from 'gatsby';
import SecondLayout from './../../components/second-layout';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Headline = styled.h1`
    display: inline-block;
    color: cornflowerblue;
`

export default ({ data }) => (
    <SecondLayout>
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <title>My Blog Posts Overview</title>
                <meta name="description" content="Free web tutorials"></meta>
                <meta name="keywords" content="React, JavaScript, Gatsby" />
                <meta name="author" content="James Handshoe" />
            </Helmet>
            <Headline>My Blog Posts on Netlify</Headline>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {
                data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <hr />
                        <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
                            <h3>{node.frontmatter.title}</h3>
                            <p><i>{node.frontmatter.date}</i></p>
                            <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    </SecondLayout>
)


export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYYY")
                    }
                    excerpt
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
