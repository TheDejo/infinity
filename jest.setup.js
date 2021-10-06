import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        value: jest.fn().mockImplementation((query) => ({
            addEventListener: jest.fn(),
            addListener: jest.fn(),
            dispatchEvent: jest.fn(),
            matches: false,
            media: query,
            onchange: null,
            removeEventListener: jest.fn(),
            removeListener: jest.fn(),
        })),
        writable: true,
    });
});
