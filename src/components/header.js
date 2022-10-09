import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
    const query = graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `;
    const data = useStaticQuery(query);

    return (
        <header>
            {}
            <h1>{data.site.siteMetadata.title}</h1>
        </header>
    )
}

export default Header
