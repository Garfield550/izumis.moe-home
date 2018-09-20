/**
 * Copyright (c) 2018 Garfield Lee
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as React from 'react';

export interface Props {
    className?: string,
    path: string,
    alt?: string
}

function IzumiAvatar({className, path, alt = "image"}: Props) {
    return(
        <img className={className} src={path} alt={alt}/>
    );
}

export default IzumiAvatar;