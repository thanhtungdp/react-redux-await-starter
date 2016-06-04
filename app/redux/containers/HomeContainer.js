import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {I18n, setLocale} from 'react-redux-i18n';
import {setTitle, reduxAwait} from '../../utils/index';
import {resetAwait} from '../actions/AwaitAction';
import Home from '../../components/pages/Home';

class HomeContainer extends Component {
    render() {
        setTitle(I18n.t('hello'));
        return (
            <div>
                <Home hello={I18n.t('hello')} {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        language: state.i18n.locale,
    }
}

const mapDispatchToProps = (dispatch)=> {
    return bindActionCreators({setLocale, resetAwait}, dispatch);
}

export default reduxAwait.connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
