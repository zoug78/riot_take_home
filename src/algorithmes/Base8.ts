import { IAlgo } from './types';

export class Base8 implements IAlgo {
    encrypt(str: string): string {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            result += '\\' + str.charCodeAt(i).toString(8);
        }
        return result;
    }

    decrypt(str: string): string {
        let result = '';
        const matches = str.match(/\\([0-7]{3})/g);
        if (matches) {
            for (const match of matches) {
                const octalCode = parseInt(match.substr(1), 8);
                result += String.fromCharCode(octalCode);
            }
        }
        return result;
    }
}
