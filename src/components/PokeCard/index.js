import React, { useState, useEffect } from 'react'
import { CardContainer, Header, HeaderTitle, Body, Sprite, PokeTitle } from './styles';
import Loading from '../Loading';

const PokeCard = ({ poke }) => {
    const { url, name } = poke;
    const pokeID = url.split('/')[url.split('/').length - 2];

    const [loading, setLoading] = useState(true);
    const [spriteURL, setSpriteURL] = useState(null);
    useEffect(() => {
        setSpriteURL(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`)
    }, [pokeID])

    
    return (
        <CardContainer>
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