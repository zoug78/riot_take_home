export enum EncryptMethod {
  Base64 = 'Base64',
  Base8 = 'Base8',
  // add new algo name here
}

export interface IAlgo {
  encrypt(str: string): string;
  decrypt(str: string): string;
}

export type Hmac = {
  signature: string;
  data: any;
}