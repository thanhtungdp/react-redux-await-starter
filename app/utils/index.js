import * as reduxAwait from './reduxAwait';

export function setTitle(title) {
    let afterTitle = 'Từ điển hóa học | Tungtung.vn';
    document.title = title + ' | ' + afterTitle;
}

export function objectToFormData(object) {
    let frm = new FormData();
    Object.keys(object).map((key) => {
        frm.append(key, object[key]);
    })
    return frm
}

export {
    reduxAwait
}