import React from 'react';
import BasketItem from '../../components/BasketItem';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    let order = {
        id: 0,
        name: 'test',
        price: 2,
        count: 2
    }
    const tree = renderer
        .create(<BasketItem order={order} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
