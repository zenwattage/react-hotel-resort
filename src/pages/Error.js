import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

export default function Error() {
    return <Hero>
        <Banner title="404" subtitle="Page Not Found">
            <Link to="/" className="btn-primary">
                Return Home
            </Link>
        </Banner>
    </Hero>;
}
