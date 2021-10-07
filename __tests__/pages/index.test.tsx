import React from 'react';
import { render, Matcher, MatcherOptions, act, fireEvent } from '@testing-library/react';
import Home from '@pages/index';
import renderer from 'react-test-renderer';

describe('Home Page', () => {
    let getByTestId: (
        text: Matcher,
        options?: MatcherOptions | undefined,
        waitForElementOptions?: unknown,
    ) => HTMLElement;

    beforeEach(() => {
        const component = render(<Home />);
        getByTestId = component.getByTestId;
    });

    it('renders the home section in page components', () => {
        const homeSection = getByTestId('home-section');
        expect(homeSection).toBeInTheDocument();
    });

    it('toggles the navbar icons', () => {
        // const component = render(<Home />);
        const openIcon = getByTestId('open-icon');
        expect(openIcon).toBeInTheDocument();

        act(() => {
            fireEvent.click(openIcon);
        });

        const closeIcon = getByTestId('close-icon');
        expect(closeIcon).toBeInTheDocument();

        act(() => {
            fireEvent.click(closeIcon);
        });
        expect(openIcon).toBeInTheDocument();
    });

    it('matches home page snapshot', () => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
