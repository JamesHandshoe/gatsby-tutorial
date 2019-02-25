import React from 'react';
import SecondLayout from './../components/second-layout';
import { graphql } from 'gatsby';

const BlogPosts = ({ data }) => {
    const post = data.markdownRemark
    return (
        <SecondLayout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={ { __html: post.html } } />
            </div>
        </SecondLayout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;

export default BlogPosts;
