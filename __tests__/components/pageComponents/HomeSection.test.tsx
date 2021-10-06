import React from 'react';
import { render, Matcher, MatcherOptions, screen, act, fireEvent } from '@testing-library/react';
import HomeSection from '@/pageComponents/home/HomeSection';
import renderer from 'react-test-renderer';
import data from '@data';

const mockedPush = jest.fn();

jest.mock('next/router', () => ({
    useRouter() {
        return {
            pathname: '/1',
            push: mockedPush,
        };
    },
}));

describe('Home Section  Component', () => {
    let getByTestId: (
        text: Matcher,
        options?: MatcherOptions | undefined,
        waitForElementOptions?: unknown,
    ) => HTMLElement;

    beforeEach(() => {
        const component = render(<HomeSection />);
        getByTestId = component.getByTestId;
    });

    it('should close the modal when the backdrop is clicked', () => {
        const applyBtn = screen.getAllByText('Apply Now')[0];
        expect(applyBtn).toBeInTheDocument();

        act(() => {
            fireEvent.click(applyBtn);
        });
        const modal = getByTestId('main-modal');
        expect(modal).toBeInTheDocument();

        const underlay = getByTestId('modal-underlay');
        expect(underlay).toBeInTheDocument();

        act(() => {
            fireEvent.mouseDown(underlay);
        });
        expect(modal).not.toBeInTheDocument();

        expect(underlay).not.toBeInTheDocument();
    });

    it('filters data when the search input is clicked', () => {
        const searchJob = getByTestId('hero-input') as HTMLInputElement;

        act(() => {
            fireEvent.change(searchJob, { target: { value: 'frontend Developer' } });
        });
        expect(searchJob.value).toBe('frontend Developer');

        const searchButton = screen.getByText('Find Jobs');

        act(() => {
            fireEvent.click(searchButton);
        });

        expect(screen.getByTestId('Frontend Developer')).toBeInTheDocument();
    });

    it('pushes user to dynamic path when clicked', () => {
        const component = render(<HomeSection />);
        const button = screen.getAllByText('View Job')[0];
        act(() => {
            fireEvent.click(button);
        });

        expect(mockedPush).toBeCalledTimes(1);
        expect(mockedPush).toBeCalledWith('1');
    });

    it('matches Single input snapshot', () => {
        const tree = renderer.create(<HomeSection />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
