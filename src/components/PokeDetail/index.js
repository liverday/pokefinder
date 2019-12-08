import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokeByID } from 'actions';
import typeColors from './type_colors'; 

import { Capitalize } from 'styles/typo';
import { Container, ContainerContent, Header, Body, HeaderTitle, TypeList, Type, Row } from './styles';

import Loading from 'components/Loading';
import SpriteSelector from './SpriteSelector';
import StatusList from './StatusList';
import AbilitiyList from './AbilityList';

const PokeDetail = ({ fetchPokeByID, isFetching, pokeData }) => {
    const { pokeID } = useParams();

    useEffect(() => {
        fetchPokeByID(pokeID)
    }, [pokeID, fetchPokeByID]);

    return (
        <Container>
            <ContainerContent>
                <Header>
                    <HeaderTitle>
                        {pokeID}. 
                        <Capitalize>
                            {pokeData.name}
                        </Capitalize>
                    </HeaderTitle>
                    <TypeList>
                        {pokeData.types && pokeData.types.length && (
                            pokeData.types.map(({ type }, i) => (
                                <Type backgroundColor={typeColors[type.name]} key={i}>
                                    {type.name}
                                </Type>
                            ))
                        )}
                    </TypeList>
                </Header>
                <Body>
                    {isFetching ? (
                        <Loading />
                    ) : (
                        <Row height="250">
                            {pokeData && pokeData.sprites &&  <SpriteSelector sprites={pokeData.sprites} />}
                            {pokeData && pokeData.stats && <StatusList stats={pokeData.stats} />}
                            {pokeData && pokeData.abilities && <AbilitiyList abilities={pokeData.abilities} />}
                        </Row>
                    )}
                </Body>
            </ContainerContent>
        </Container>
    )
}

const mapStateToProps = ({ pokeDetailReducer }) => {
    const { isFetching, pokeData } = pokeDetailReducer
    
    return {
        isFetching, 
        pokeData
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPokeByID: (id) => dispatch(fetchPokeByID(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetail);