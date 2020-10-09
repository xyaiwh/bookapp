// import { reject, resolve } from 'core-js/fn/promise'
import {
    axiosGet,
    axiosPost
} from '../libs/http'

function getData(options) {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: options.url,
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

function postData(options) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: options.url,
            data: options.data,
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

export {
    getData,
    postData
}