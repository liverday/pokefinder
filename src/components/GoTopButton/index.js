import React from 'react';
import { Link } from 'react-scroll';

import { Button } from './styles'

const GoTopButton = ({ target }) => {
    return (
        <Link to={target} smooth={true} spy={false} duration={500}>
            <Button>
                <i className="fas fa-chevron-up"></i>
            </Button>
        </Link>
    )
}

export default GoTopButton;