import React, { Component } from 'react';
import Title from '../components/Title';

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero, distinctio.'
            },
            {
                icon: <FaHiking />,
                title: 'Plenty of nearby trails!',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero, distinctio.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Convenient Shuttle!',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero, distinctio.'
            },
            {
                icon: <FaBeer />,
                title: 'Free Beer, Tomorrow!',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero, distinctio.'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
