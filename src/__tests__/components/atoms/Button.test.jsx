import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, afterEach } from 'vitest';
import Button from '../../../components/atoms/Button';
import React from 'react';
describe('Button Component', () => {
    afterEach(() => {
        cleanup();
    });

    it('renders correctly', () => {
        render(<Button label="Click Me" />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles click events', async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();
        render(<Button label="Click Me" onClick={handleClick} />);
        
        await user.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalled();
    });
});