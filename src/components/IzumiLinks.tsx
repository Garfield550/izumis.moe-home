/**
 * Copyright (c) 2018 Garfield Lee
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as React from 'react';

export interface Props {
    className?: string,
    listClass?: string,
    links?: {name: string, link?: string}[]
}

class IzumiLinks extends React.Component<Props, {}> {
    render() {
        const links = this.props.links;
        const listItems = links.map((list, index) => 
            <li key={index} className={this.props.listClass}>
                <a href={list.link}>{list.name}</a>
            </li>
        );

        return (
            <ul className={this.props.className}>{listItems}</ul>
        );
    };
}

export default IzumiLinks;