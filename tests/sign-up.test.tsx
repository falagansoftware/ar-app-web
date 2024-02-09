import { describe, it } from 'vitest';
import { SignUp } from '../src/app/modules/home/features/sign-up/Sign-up';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Sign-up', () => {
  it('should render component', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>,
    );
    screen.debug();
  });
});
