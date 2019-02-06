import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import Accordion from './Accordion.js'
import Adapter from 'enzyme-adapter-react-16'

// Enzyme.configure({ adapter: new Adapter() });



const sectionsProp = [
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

describe(`Accordion Component`, () => {
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('renders default no sections', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders empty li without errors', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('opens tab when clicked', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        wrapper.find('button').at(0).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('opens only one tab when multiple clicked', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})

