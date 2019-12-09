import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokeByID } from 'actions';
import typeColors from './type_colors'; 

import { Capitalize } from 'styles/typo';
import { Container, ContainerContent, Header, Body, HeaderTitle, TypeList, Type, Row, RowCentered, FlavorText } from './styles';

import Loading from 'components/Loading';
import SpriteSelector from './SpriteSelector';
import StatusList from './StatusList';
import AbilitiyList from './AbilityList';
import SpecieDetail from './SpecieDetail';

const PokeDetail = ({ fetchPokeByID, isFetching, pokeData }) => {
    const { pokeID } = useParams();
    const [flavorText, setFlavorText] = useState(null);

    useEffect(() => {
        fetchPokeByID(pokeID)
    }, [pokeID, fetchPokeByID]);
    
    useEffect(() => {
        if (pokeData && pokeData.species && pokeData.species.flavor_text_entries) {
            const { flavor_text_entries } = pokeData.species;

            const enFlavour = flavor_text_entries.find(flavor => flavor.language.name === 'en');

            if (enFlavour)
                setFlavorText(enFlavour.flavor_text);
        }
    }, [pokeData, setFlavorText]);

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
                        <>
                            <Row>
                                {pokeData && pokeData.sprites &&  <SpriteSelector sprites={pokeData.sprites} />}
                                {pokeData && pokeData.stats && <StatusList stats={pokeData.stats} />}
                                {pokeData && pokeData.abilities && <AbilitiyList abilities={pokeData.abilities} />}
                            </Row>
                            {flavorText && <RowCentered height="100">
                                <FlavorText>{flavorText}</FlavorText>
                            </RowCentered>}
                            <Row>
                                {pokeData && pokeData.species && <SpecieDetail pokeData={pokeData} />}
                            </Row>
                        </>
                    )}
                </Body>
            </ContainerContent>
        </Container>
    )
}

const mapStateToProps = ({ pokeDataReducer }) => {
    const { isFetching, pokeData } = pokeDataReducer
    
    return {
        isFetching, 
        pokeData
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchPokeByID: (id) => dispatch(fetchPokeByID(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetail);