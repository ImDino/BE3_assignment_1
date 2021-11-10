/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { render, screen } from '@testing-library/react';
import BackBtn from '../BackBtn';
import UserContext from '../../contexts/UserContext';

// eslint-disable-next-line no-undef
test('Verify that button.innerHtml equals the label prop value', () => {
  const myLabel = 'some string';

  render(
    <UserContext.Provider value={false}>
      <BackBtn label={myLabel} />
    </UserContext.Provider>,
  );
  const button = screen.getByRole('button');
  // eslint-disable-next-line no-undef
  expect(button.innerHTML).toBe(myLabel);
});
