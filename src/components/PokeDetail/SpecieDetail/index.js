import React from 'react';
import { Container, Header, HeaderTitle, Body, Column, Label, Detail } from './styles';
import ProgressBar from 'components/ProgressBar';

const SpecieDetail = ({ pokeData }) => {
    const { species, height, weight, base_experience } = pokeData
    const { gender_rate } = species;
    const femaleRatio = 12.5 * gender_rate;
    const maleRatio = 12.5 * (8 - gender_rate);

    const eggGroups = species.egg_groups.map(({ name }) => name.charAt(0).toUpperCase() + name.substring(1)).join(', ') 
    const hatchSteps = species.hatch_counter * 255;
    const ev = pokeData.stats.filter(({ effort }) => effort > 0).map(({ effort, stat }) => 
        `${effort} ${stat.name.toLowerCase()
            .split('-')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
        }`            
    ).join(', ');

    return (
        <Container>
            <Header>
                <HeaderTitle>
                    Specie Detail
                </HeaderTitle>
            </Header>
            <Body>
                <Column alignItems="flex-end">
                    <Label>Height:</Label>
                    <Label>Weight:</Label>
                    <Label>Catch Rate:</Label>
                    <Label marginBottom="0">Gender Ratio:</Label>
                </Column>
                <Column alignItems="flex-start">
                    <Detail>{height} ft.</Detail>
                    <Detail>{weight} lbs.</Detail>
                    <Detail>{species.capture_rate}%</Detail>
                    <ProgressBar percentage={maleRatio} percentageFather={femaleRatio} />
                </Column>
                <Column alignItems="flex-end">
                    <Label>Egg Groups:</Label>                                    
                    <Label>Hatch Steps:</Label>                    
                    <Label>EVs: </Label>                    
                    <Label>Base Experience: </Label>                    
                </Column>
                <Column alignItems="flex-start">
                    <Detail>{eggGroups}</Detail>
                    <Detail>{hatchSteps}</Detail>
                    <Detail>{ev}</Detail>
                    <Detail>{base_experience}</Detail>
                </Column>
            </Body>
        </Container>
    )
}

export default SpecieDetail