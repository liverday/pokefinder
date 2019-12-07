import React, { useState, useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import store from 'store';

import Header from 'components/Header';
import GlobalStyle from 'styles/global';
import { AppContainer } from './styles';
import GoTopButton from 'components/GoTopButton';

import PokeCardList from 'components/PokeCardList';
import PokeDetail from 'components/PokeDetail';

const App = () => {
    const [showTopButton, setShowTopButton] = useState(false);

    let containerRef;

    const handleScroll = useCallback(() => {
        if (!containerRef)
            return;

        let { y } = containerRef.getBoundingClientRect();

        if (y <= -300)
            setShowTopButton(true);
        else
            setShowTopButton(false);
    }, [containerRef]);

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
                <Switch>
                    <Route path="/" exact={true}>
                        <PokeCardList />
                        {showTopButton && <GoTopButton target="main" />}
                    </Route>
                    <Route path="/:pokeID">
                        <PokeDetail />
                    </Route>
                </Switch>
            </AppContainer>
        </Provider>
    )
}

export default App;