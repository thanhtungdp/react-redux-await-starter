//Import React
import React,{Component} from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setLocale} from 'react-redux-i18n';
import {withRouter} from 'react-router';

export default class AppMaster extends Component {

    constructor() {
        super(...arguments);
    }

    render() {
        console.log(this.props);
        return (
            <Grid>
                {this.props.children}
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.i18n.locale
    }
}

const mapDispatchToProps = (dipsatch) => {
    return bindActionCreators({setLocale}, dipsatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMaster);