import React from 'react';
import MainNavigation from '../../components/MainNavigation';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<MainNavigation />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
