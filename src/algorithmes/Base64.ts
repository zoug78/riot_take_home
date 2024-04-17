import { IAlgo } from './types';

export class Base64 implements IAlgo {
    encrypt(str: string): string {
        return btoa(str);
    }
    decrypt(str: string): string {
        return atob(str);
    }
}
