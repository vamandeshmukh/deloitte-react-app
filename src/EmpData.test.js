import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import EmpData from './components/EmpData';
import store from './redux/store';

// guides: 
// https://github.com/testing-library/jest-dom 
// https://www.npmjs.com/package/@testing-library/jest-dom 

beforeEach(() => {
  render(
    <Provider store={store}>
      <EmpData />
    </Provider>
  );
}, 100);

test('renders emp component', () => {
  const renderedData = screen.getByText(`Find an Employee by Id 1`);
  expect(renderedData).toBeInTheDocument();
});


