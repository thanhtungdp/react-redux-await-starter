import 'whatwg-fetch';
import qwest from 'qwest';
import {objectToFormData} from '../utils/index';

const API_DOMAIN = 'http://api.tungtung.vn/chemistry';

export function getUrl(path) {
    return API_DOMAIN + '/' + path;
}

export function searchEquation(reactants, products, page = 1) {
    return fetch(getUrl(`equation/search?reactants=${reactants}&products=${products}&page=${page}`)).then(res => res.json());
}

export function searchAtomic(atomic, page = 1) {
    return fetch(getUrl(`atomic/search?q=${atomic}&page=${page}`)).then(res => res.json());
}

export function searchChainReaction(chain_reaction) {
    return fetch(getUrl(`equation/search-chain-reaction?q=${chain_reaction}`)).then(res => res.json());
}

const HEADERS = {
    'Accept': 'application/json'
};

function postFetch(url, data, props) {
    let attributes = Object.assign({
        cache: true,
        headers: {
            'Accept': 'application/json'
        }
    }, props);

    return qwest.post(getUrl(url), data, attributes);
}

export function addNewEquation(equation) {
    let data = {type: 'add', equation: JSON.stringify(equation)};
    return postFetch('equation/report/add', data).then(response => {
        return response.json()
    });
}

export function addNewAtomic(atomic) {
    let data = {type: 'add', atomic: JSON.stringify(atomic)};
    return postFetch('atomic/report/add', data);
}

export function addErrorEquation(equation_id, content) {
    let data = {type: 'error', equation_id, content};
    return postFetch('equation/report/add', data);
}

export function addErrorAtomic(atomic_id, content) {
    let data = {type: 'error', atomic_id, content};
    return postFetch('atomic/report/add', data);
}

export default {
    searchEquation, searchAtomic, searchChainReaction, addNewEquation, addNewAtomic, addErrorEquation, addErrorAtomic
}