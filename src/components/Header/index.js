import React from 'react';
import { HeaderContainer, TitleImage } from './styles';
import titleImg from './title.png';

const Header = () => (
    <HeaderContainer>
        <TitleImage src={titleImg}></TitleImage>
    </HeaderContainer>
)

export default Header;