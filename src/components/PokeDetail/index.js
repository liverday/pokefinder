import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokeByID } from 'actions';
import typeColors from './type_colors'; 

import { Capitalize } from 'styles/typo';
import { Container, ContainerContent, Header, Body, HeaderTitle, TypeList, Type } from './styles';

import Loading from '../Loading';

const PokeDetail = ({ fetchPokeByID, isFetching, pokeData }) => {
    const { pokeID } = useParams();
    const history = useHistory();

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
                    ): (
                        <>
                        </>
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