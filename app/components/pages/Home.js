import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import I18n from 'react-redux-i18n';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Col md={8} mdOffset={2}>
                    <h1>{this.props.hello}</h1>
                </Col>
            </Grid>
        )
    }
}

Home.propTypes = {}