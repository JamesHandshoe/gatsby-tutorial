import React from 'react';
import { PropTypes } from 'prop-types';
import LinkList from './link-list';
// import './second-layout.css'
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const linkList = [
    { to: '/', linkName: 'Home' },
    { to: '/page-2', linkName: 'Page 2' },
    { to: '/info/about', linkName: 'About Page' },
    { to: '/info/files-info', linkName: 'Project Files' },
    { to: '/blog', linkName: 'Blog Posts' }
]

const SecondLayout = ({ children }) => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            title
                        },
                    }
                    file(relativePath: {
                        regex: "/banner/"
                    }) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                }
            `}
            render={data => (
                <div>
                    <Img style={{ maxHeight: '40vh' }} fluid={data.file.childImageSharp.fluid} />
                    <div style={{
                        margin: `0 auto`,
                        maxWidth: `1000px`,
                        padding: `0 1rem`
                    }}>
                        <header style={{
                            marginBottom: `1.5rem`,
                            marginTop: '1rem'
                        }}>
                            <h3 style={{ display: `inline-block` }}>{data.site.siteMetadata.title}</h3>
                            <ul style={{ listStyle: `none`, float: `right`}}>
                                <LinkList linkList={ linkList } />
                            </ul>
                        </header>
                        <div className="my-background">
                            {children}
                        </div>
                    </div>
                </div>
            )} />
    );
};

SecondLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default SecondLayout;