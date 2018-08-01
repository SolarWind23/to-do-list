export default class IdGenerator {

    constructor() {
        this._ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this._ID_LENGTH = 15;
    }

    generate() {
       let id ='';

        for(let i = 0; i < this._ID_LENGTH; i++) {
            id += this._ALPHABET.charAt(Math.floor(Math.random() * this._ALPHABET.length));
        }

        return id;
    }
}