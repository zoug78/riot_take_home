import { sign, verify } from "../algo";
import { Base64 } from "../Base64";
import { Base8 } from "../Base8";

const b64 = new Base64();
const b8 = new Base8();
  const toEncrypt = "crypt me this";

describe('encryption algorithmes', () => {
  test('base64 algo encrypt well', () => {
    expect(b64.encrypt(toEncrypt)).toBe('Y3J5cHQgbWUgdGhpcw==');
  });
  
  test('base8 algo encrypt well', () => {
    expect(b8.encrypt(toEncrypt)).toBe('\\143\\162\\171\\160\\164\\40\\155\\145\\40\\164\\150\\151\\163');
  });
})

describe('sign and verify algorithmes', () => {
  test('sign algo sign well', () => {
    expect(sign(toEncrypt)).toStrictEqual({"data": "0dcc4455b530b34f38da8c37d76f617a3d80855392202aa6bdd5ba11e7e1be4d"});
  });

  test('verify algo verify well', () => {
    expect(verify({ signature: '0dcc4455b530b34f38da8c37d76f617a3d80855392202aa6bdd5ba11e7e1be4d', data: toEncrypt })).toBe('OK');
  });

  test('verify algo fail if signature does not match', () => {
    expect(() => {
      verify({ signature: 'wrong signature', data: toEncrypt })
    }).toThrow("signatures does not match");
  });
})