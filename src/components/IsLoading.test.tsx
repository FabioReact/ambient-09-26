import { render, screen } from '@testing-library/react';
import { IsLoading } from './IsLoading';

describe('IsLoading Component', async () => {
  it('should render a Loading text when I am loading', () => {
    render(<IsLoading loading />);

    const loader = screen.getByRole('status')
    expect(loader).toHaveAttribute('aria-busy')
    // screen.getByText('Loading...')
  });

  it('should not render a Loading text when I am done loading', () => {
    render(<IsLoading />);

    const loader = screen.queryByText('Loading...')
    expect(loader).not.toBeInTheDocument()
  })

  it('should render children when I am not loading', () => {
    const dateString = new Date().toISOString()
    render(<IsLoading>{dateString}</IsLoading>);

    screen.getByText(dateString)
  })
});
