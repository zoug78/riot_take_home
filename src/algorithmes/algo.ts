import { Base8 } from './Base8';
import { Base64 } from './Base64';
import { EncryptMethod, Hmac, IAlgo } from './types';
import crypto from 'crypto';

export const encrypt = function (obj: any, encryptMethodParam: EncryptMethod) {
    const algo = createAlgo(encryptMethodParam);
    let newObj = {};
    for (const key in obj) {
        newObj[key] = algo.encrypt(obj[key]);
    }
    return newObj;
};

export const decrypt = function (obj: any, encryptMethodParam: EncryptMethod) {
    const algo = createAlgo(encryptMethodParam);
    let newObj = {};
    for (const key in obj) {
        newObj[key] = algo.decrypt(obj[key]);
    } 
    return newObj;
};

export const sign = function(payload: any) {
  const signature = 'my_maxy_signature_algo321*';
  const hmac = crypto.createHmac('sha256', signature);
  hmac.update(JSON.stringify(payload));
  return { data: hmac.digest('hex') };
}

export function verify(payload: Hmac) {
  const res = sign(payload.data);
  if (payload.signature !== res.data)
    throw 'signatures does not match';
  return 'OK';
}

function createAlgo(method: string): IAlgo {
    const encryptMethod: EncryptMethod = method as EncryptMethod;
    switch (encryptMethod) {
    case EncryptMethod.Base64:
      return new Base64();
    case EncryptMethod.Base8:
      return new Base8();
    // add new algo here
    default:
      return new Base64();
    }
}


