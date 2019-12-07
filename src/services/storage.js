import { call, HttpVerbs } from './http';

export default class StorageService {
    static _instance = null;
    _pokesContext = { };

    static getInstance() {
        if (this._instance == null)
            this._instance = new StorageService();

        return this._instance;
    }

    async fetchPokes(page, pageSize = 40) {
        const [limit, offset] = [pageSize, page * pageSize];
        
        let key = `${page}-${pageSize}`;
        if (!this._pokesContext[key])
            await this.loadPokesContext(key, limit, offset)
        
        return this._pokesContext[key];
    }

    async loadPokesContext(key, limit, offset) {
        try {
            let localPokesContext = await JSON.parse(localStorage.getItem('pokesContext'));
            
            if (!localPokesContext) 
                localPokesContext = { }

            if (!localPokesContext[key]) {
                const { data } = await call(HttpVerbs.get, `pokemon?limit=${limit}&offset=${offset}`, { });
                if (data) {
                    localPokesContext[key] = {
                        count: data.count,
                        next: data.next,
                        previous: data.previous,
                        pokes: data.results
                    };
                    localStorage.setItem('pokesContext', JSON.stringify(localPokesContext));
                }
            }

            this._pokesContext[key] = localPokesContext[key];
        } catch (e) {
            console.error('Error fetching pokes: ', e);
        }
    }
}