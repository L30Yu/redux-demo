import React from 'react';
import Product from '../../components/Product';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    let orderCount = 2;
    let product = {
        id: 0,
        name: 'test',
        price: 2
    }
    const tree = renderer
        .create(<Product product={product} orderCount={orderCount} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
