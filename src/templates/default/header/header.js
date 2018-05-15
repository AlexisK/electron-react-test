import React, { Component } from 'react';
import './header.less';

export default class TemplateHeader extends Component {
    render() {
        return ($inline('./header.html'));
    }
}
