import React, { Component } from 'react';
import TemplateHeader from './header/header';
import './default-template.less';

export default class DefaultTemplate extends Component {
    render() {
        return ($inline('./default-template.html'));
    }
}
