import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';

import { BarContainer, FillerContainer } from './styles';

const ProgressBar = ({ percentage }) => {
    const [showProgress, setShowProgress] = useState(false);

    let subject = new Subject();
    useEffect(() => {
        
        let subscription = subject.asObservable().subscribe(value => {
            setShowProgress(value);
        });

        setTimeout(() => {
            if (!subscription.closed) {
                subject.next(true);
            }
        }, 150);

        return () => {
            if (subscription)
                subscription.unsubscribe();
        }

    }, [subject]);

    return (
        <BarContainer>
            <FillerContainer percentage={!showProgress ? '0' : percentage}>
                {showProgress && `${percentage}%` }
            </FillerContainer>
        </BarContainer>
    )
}

ProgressBar.propTypes = {
    percentage: PropTypes.number
}

export default ProgressBar;