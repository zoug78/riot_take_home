import * as algo from './algorithmes/algo';
import { Hmac } from './algorithmes/types';

export const encrypt = function(req) {
    if (Object.keys(req.body).length === 0) {
        throw 'Need a body buddy';
    }
    return algo.encrypt(req.body, req.query?.algo);
};

export const decrypt = function(req) {
    if (Object.keys(req.body).length === 0) {
        throw 'Need a body buddy';
    }
    return algo.decrypt(req.body, req.query?.algo);
};

export const sign = function(req) {
    if (Object.keys(req.body).length === 0) {
        throw 'Need a body buddy';
    }
    return algo.sign(req.body as Hmac);
}

export const verify = function(req) {
    if (Object.keys(req.body).length === 0) {
        throw 'Need a body buddy';
    }
    if (!req.body.signature) {
        throw 'Need a signature key';
    }
    if (!req.body.data) {
        throw 'Need a data key';
    }
    return algo.verify(req.body as Hmac);
        
}