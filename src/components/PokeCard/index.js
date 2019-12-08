import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

import { CardContainer, Header, HeaderTitle, Body, PokeTitle } from './styles';
import { Sprite } from 'styles/sprite';

import Loading from '../Loading';

const PokeCard = ({ poke }) => {
    const history = useHistory();

    const { url, name } = poke;
    const pokeID = url.split('/')[url.split('/').length - 2];

    const [loading, setLoading] = useState(true);
    const [spriteURL, setSpriteURL] = useState(null);
    useEffect(() => {
        setSpriteURL(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`)
    }, [pokeID])

    const navigateToDetail = () => history.push(pokeID)
    
    return (
        <CardContainer onClick={navigateToDetail}>
            <Header>
                <HeaderTitle>{pokeID}.</HeaderTitle>
            </Header>
            <Body>
                {loading && (
                    <Loading width={'5em'} height={'5em'}/>
                )}
                <Sprite 
                    crossOrigin="anonymous" 
                    src={spriteURL} 
                    onLoad={() => setLoading(false)} 
                    style={
                        loading ? null : { display: 'block' }
                    }
                />
                <PokeTitle>
                    {name}
                </PokeTitle>
            </Body>
        </CardContainer>
    )
};

export default PokeCard;