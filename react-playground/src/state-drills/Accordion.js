import React, { Component } from 'react';

export default class Accordion extends Component {

    static defaultProps = {
        sections : [
            {
                title: 'Section 1',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Section 2',
                content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
            },
            {
                title: 'Section 3',
                content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
            },
        ]
    }
    state = {
        currentIndex: null,
    }

    handleClickButton = (index) => {
        this.setState({ currentIndex: index })
    }

    renderButtons(section, index, currentIndex) {
        return (
            <li className='Accordion-item' id={index}>
                <button type='button' onClick={() => this.handleClickButton(index)}>
                    {section.title}
                </button>
                {(currentIndex === index) &&<p>{section.content}</p>}
            </li>
        )
    }
    render() {
        const { currentIndex } = this.state;
        const { sections } = this.props;
        return (
            <div>
                <ul className='Accordion'>
                    {sections.map((section, index) => 
                    this.renderButtons(section, index, currentIndex))}                    
                </ul>
            </div>
        );
    }
}