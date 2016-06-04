import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as awaitReducer} from 'redux-await';
import {i18nReducer} from 'react-redux-i18n';
import await from './await';

export default combineReducers({
    form: formReducer,
    i18n: i18nReducer,
    await
})