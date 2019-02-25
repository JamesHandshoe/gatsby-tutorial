import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'gatsby';

const LinkList = ({ linkList }) => {
   return linkList.map((linkItem, item) => {
       return (
        <li key={item} style={{
            display: `inline-block`,
            marginRight: `1rem`
        }}>
            <Link to={linkItem.to}>{linkItem.linkName}</Link>
        </li>
       )
    })
};

LinkList.propTypes = {
    linkList: PropTypes.array.isRequired
}

export default LinkList;