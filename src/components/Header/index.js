import React from 'react';
import { HeaderContainer, TitleImage, TitleSubText, TitleContainer } from './styles';
import titleImg from './title.png';

const Header = () => (
    <HeaderContainer>
        <TitleContainer>
            <TitleImage src={titleImg}></TitleImage>
            <TitleSubText>Find your favorite PokéMon info!</TitleSubText>
        </TitleContainer>
    </HeaderContainer>
)

export default Header;