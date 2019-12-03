import { call, HttpVerbs } from './http';

export default class StorageService {
    static _instance = null;
    _pokesContext;

    static getInstance() {
        if (this._instance == null)
            this._instance = new StorageService();

        return this._instance;
    }

    async fetchPokes() {
        if (!this._pokesContext)
            await this.loadPokesContext()
        
        return this._pokesContext;
    }

    async loadPokesContext() {
        try {
            let localPokesContext = await JSON.parse(localStorage.getItem('pokesContext'));
            
            if (!localPokesContext) {
                const { data } = await call(HttpVerbs.get, 'pokemon', { });
                if (data) {
                    localPokesContext = {
                        count: data.count,
                        next: data.next,
                        previous: data.previous,
                        pokes: data.results
                    };
                    localStorage.setItem('pokesContext', JSON.stringify(localPokesContext));
                }
            }

            this._pokesContext = localPokesContext;
        } catch (e) {
            console.error('Error fetching pokes: ', e);
        }
    }
}