import React from 'react';
import { Link, graphql } from 'gatsby';
import SecondLayout from '../../components/second-layout';
import gatsbyAstronaut from '../../images/gatsby-astronaut.png';

const AboutPage = ({ data }) => (
    <SecondLayout>
        <div>
            <h1>About Page</h1>
            <img style={{ width: '150px'}} src={gatsbyAstronaut} alt="Gatsby Astronaut" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <Link to="/">Go back to the homepage</Link>
        
        <a style={{ marginLeft: `16px`}} href={`https://${data.site.siteMetadata.website}`} rel="noopener noreferrer" target="_blank">MSN Website</a>
    </SecondLayout>
);

export const query = graphql`
    query {
        site {
            siteMetadata {
                website
            },
        }
    }
`;

export default AboutPage;