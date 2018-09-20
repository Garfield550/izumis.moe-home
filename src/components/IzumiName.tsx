/**
 * Copyright (c) 2018 Garfield Lee
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as React from 'react';

export interface Props {
    className?: string,
    name: string,
    kana?: string
}

class IzumiName extends React.Component<Props, {}> {
    render() {
        return(
            <ruby className={this.props.className}>
                {this.props.name}<rt>{this.props.kana}</rt>
            </ruby>
        );
    };
}

export default IzumiName;