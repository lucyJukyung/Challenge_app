export class User { //unit 184
    constructor(
        public email: string, 
        public id: string, 
        private _token: string, 
        private _tokenExpirationDate: Date) {}

    get isAuth() { //unit 189
        return !!this.token; // double ! makes it to boolean val, keeps it's original value
    }

    get token() { //unit 189
        if(!this._token) {
            return null;
        }
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }

    get timeToExpiry() {
        return this._tokenExpirationDate.getTime() - new Date().getTime();
    }
}