import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import Header from 'components/Header';
import GlobalStyle from 'styles/global';
import { AppContainer } from './styles';
import PokeCardList from '../PokeCardList';

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer>
                <GlobalStyle />
                <Header />
                <PokeCardList />
            </AppContainer>
        </Provider>
    )
}

export default App;