import React from 'react';
import { graphql } from 'gatsby';
import SecondLayout from '../../components/second-layout';

export default ({ data }) => (
    <SecondLayout>
        <div>
            <h1>My Images</h1>
            <table>
                <thead>
                    <tr>
                        <th>relativePath</th>
                        <th>prettySize</th>
                        <th>extension</th>
                        <th>birthTime</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         data.allFile.edges.map(({node}, index) => {
                            return ( 
                                <tr key={index}>
                                    <td>{node.relativePath}</td>
                                    <td>{node.prettySize}</td>
                                    <td>{node.extension}</td>
                                    <td>{node.birthTime}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </SecondLayout>
)


export const query = graphql`
    query {
        allFile {
            edges {
                node {
                    relativePath,
                    prettySize,
                    extension,
                    birthTime(fromNow: true)
                }
            }
        }
    }
`

