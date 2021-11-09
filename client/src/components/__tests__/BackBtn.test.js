import BackBtn from "../BackBtn";
import { render, screen } from '@testing-library/react';
import { UserContext } from '../../contexts/UserContext';

test('Verify that button.innerHtml equals the label prop value', () => {
  const myLabel = 'some string';
  
  render(
    <UserContext.Provider value={false}>
      <BackBtn label={myLabel}/>
    </UserContext.Provider>
  );
  const button = screen.getByRole('button');
  expect(button.innerHTML).toBe(myLabel);
});