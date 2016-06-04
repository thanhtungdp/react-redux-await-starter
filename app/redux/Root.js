import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';

import configureStore from './store/configureStore';
import Routes from '../routes';
import languages from '../languages/index';

const store = configureStore();
syncTranslationWithStore(store);
store.dispatch(setLocale('vi'));
store.dispatch(loadTranslations(languages));

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
                    {Routes()}
                </Router>
            </Provider>
        )
    }
}
