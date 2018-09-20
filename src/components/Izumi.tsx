/**
 * Copyright (c) 2018 Garfield Lee
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as React from 'react';

import IzumiName from './IzumiName';
import IzumiLinks from './IzumiLinks';
import IzumiAvatar from './IzumiAvatar';

/// <reference path="./png.d.ts" />
import Avatar from './avatar.png';

const izumiName: string = "神楽坂泉";
const izumiKana: string = "かぐらざかいずみ";
const izumiSocialLinks: {name: string, link?: string}[] = [
    { name: "Messenger", link: "https://m.me/KagurazakaIzumi" },
    { name: "Facebook", link: "https://facebook.com/KagurazakaIzumi" },
    { name: "Telegram", link: "https://t.me/KagurazakaIzumi" },
    { name: "Twitter", link: "https://twitter.com/KagurazakaIzumi" },
    { name: "Blog", link: "https://blog.izumis.moe" },
    { name: ": )" }
];

export interface Props {
    className?: string
}

class Izumi extends React.Component<Props, {}> {
    render() {
        return(
            <>
                <div className={this.props.className}>
                    <IzumiName className="name wmvl tk-shsj animation" name={izumiName} kana={izumiKana} />
                    <IzumiLinks className="links wmvl tk-shnj" listClass="animation" links={izumiSocialLinks} />
                </div>
                <IzumiAvatar className="avatar animation d-01" path={Avatar} alt="Izumi avatar" />
            </>
        );
    };
}

export default Izumi;