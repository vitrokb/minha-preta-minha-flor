import { render, screen } from '@testing-library/react';
import VideoPlayer from './VideoPlayer';

describe('VideoPlayer', () => {
  it('renders the title', () => {
    const title = 'Sample Video';
    const videoId = '123456';
    render(<VideoPlayer title={title} videoId={videoId} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(title);
    expect(titleElement).toHaveStyle('font-weight: 700');
  });
});
