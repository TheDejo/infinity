import React from 'react';
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import Slug from '@pages/[id]';
import renderer from 'react-test-renderer';

const mockedBack = jest.fn();

jest.mock('next/router', () => ({
    useRouter() {
        return {
            back: mockedBack,
            pathname: '/1',
            query: { id: '1' },
        };
    },
}));

describe('Home Page', () => {
    it('should close the modal when the backdrop is clicked', () => {
        const component = render(<Slug />);
        const applyBtn = screen.getAllByText('Apply Now')[0];
        expect(applyBtn).toBeInTheDocument();

        act(() => {
            fireEvent.click(applyBtn);
        });
        const modal = component.getByTestId('main-modal');
        expect(modal).toBeInTheDocument();

        const underlay = component.getByTestId('modal-underlay');
        expect(underlay).toBeInTheDocument();

        act(() => {
            fireEvent.mouseDown(underlay);
        });
        expect(modal).not.toBeInTheDocument();

        expect(underlay).not.toBeInTheDocument();
    });

    it('calls the back funtion when the back button is clicked', () => {
        const component = render(<Slug />);
        const button = screen.getByText('Back');
        act(() => {
            fireEvent.click(button);
        });

        expect(mockedBack).toBeCalled();
    });
    it('matches home page snapshot', () => {
        const tree = renderer.create(<Slug />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
