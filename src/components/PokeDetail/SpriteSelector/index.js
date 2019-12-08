import React, { useState, useEffect } from 'react';

import { Button, Container, ContainerColumn, Gender } from './styles';
import { Sprite } from 'styles/sprite';

import Loading from 'components/Loading';

const SpriteSelector = ({ sprites }) => {
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [selectedSprite, setSelectedSprite] = useState(null);
    const [spritesArray, setSpritesArray] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const transformSpritesToArray = () => {
            const keys = Object.keys(sprites);
            setSpritesArray(keys.filter(key => !!sprites[key]).map(key => ({
                url: sprites[key],
                gender: key.includes('_female') ? 'F' : 'M'
            })));
        }

        transformSpritesToArray();
    }, [sprites, setSpritesArray]);

    useEffect(() => {
        if (spritesArray.length) {
            let index = spritesArray.length / 2;
            let { url, gender } = spritesArray[index]
            setSelectedSprite({
                index,
                url,
                gender
            });
        }
    }, [spritesArray]);

    const handleNextClick = async () => {
        let { index } = { ...selectedSprite }
        await [setSelectedSprite(null), setLoading(true)];

        index++;

        if (index + 1 === spritesArray.length)
            setNextDisabled(true);

        if (prevDisabled)
            setPrevDisabled(false);

        let { url, gender } = spritesArray[index];

        setTimeout(() => {
            setSelectedSprite({
                index,
                url,
                gender
            })
        }, 200);
    }

    const handlePrevClick = async () => {
        let { index } = { ...selectedSprite }
        await [setSelectedSprite(null), setLoading(true)];

        index--;

        if (index - 1 < 0)
            setPrevDisabled(true);

        if (nextDisabled)
            setNextDisabled(false);

        let { url, gender } = spritesArray[index];
        setTimeout(() => {
            setSelectedSprite({
                index,
                url,
                gender
            })
        }, 200);
    }

    return (
        <Container>
            <Button onClick={handlePrevClick} disabled={prevDisabled}>
                <i className="fas fa-chevron-left"></i>
            </Button>
            {loading && (
                <Loading width={'5em'} height={'5em'} />
            )}
                {selectedSprite && <ContainerColumn>
                    <Sprite
                        crossOrigin="anonymous"
                        src={selectedSprite.url}
                        onLoad={() => setLoading(false)}
                        style={
                            loading ? null : { display: 'block' }
                        }
                    width={'8em'} height={'8em'}
                    />
                    {!loading && <Gender color={selectedSprite.gender === 'M' ? 'baseBlue' : 'basePink'}>
                        {selectedSprite.gender === 'M' ? (
                            <i className="fas fa-mars"></i>
                        ) : (
                            <i className="fas fa-venus"></i>
                        )}
                    </Gender>}
                </ContainerColumn>}
            <Button onClick={handleNextClick} disabled={nextDisabled}>
                <i className="fas fa-chevron-right"></i>
            </Button>
        </Container>
    )
}

export default SpriteSelector;
