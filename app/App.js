/* React */
import React,{Component} from 'react';
import {render} from 'react-dom';

/* Root provider from redux */
import Root from './redux/Root';

/* Stylesheet */
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';
import 'animate.css/animate.css';
import './stylesheets/style.scss';

/* Test */
import './test/Test.js';

String.prototype.replaceAll = function (search, replacement) {
    var escapeRegExp = (str) => {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }
    var target = this;
    return target.replace(new RegExp(escapeRegExp(search), 'g'), replacement);
};

String.prototype.fulltrim = function () {
    return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
};

render(<Root/>, document.getElementById('root'))