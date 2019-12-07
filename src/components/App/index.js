import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import store from 'store';

import Header from 'components/Header';
import GlobalStyle from 'styles/global';
import { AppContainer } from './styles';
import PokeCardList from '../PokeCardList';

const App = () => {
    const [showTopButton, setShowTopButton] = useState(false);

    let containerRef;

    const handleScroll = () => {
        if (!containerRef)
            return;

        console.log(containerRef)
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);
    return (
        <Provider store={store}>
            <AppContainer id="main" ref={ref => containerRef = ref}>
                <GlobalStyle />
                <Header />
                <PokeCardList />
            </AppContainer>
        </Provider>
    )
}

export default App;