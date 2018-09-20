/**
 * Copyright (c) 2018 Garfield Lee
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as WebFont from "webfontloader";
import * as kitConfig from "./config/typeKitConfig";

import "./less/main.less";

import Izumi from "./components/Izumi";

ReactDOM.render(
    <Izumi className="izumiAbout" />,
    document.getElementById('root') as HTMLElement
);

WebFont.load({
    typekit: { id: kitConfig.kitID }
});