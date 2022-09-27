import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';

import store from './redux/store';

// syntax 

// test( arg1, arg2);

// test( `test description in English`, () => {});

// test( `test description in English`, () => { 
// render a component, 
// test the rendering  
// });


test('renders Hello world!', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const renderedData = screen.getByText(`Hello world!`);
  expect(renderedData).toBeInTheDocument();
});


test('renders Hello world! 2', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const renderedData = screen.getByText(`Hello world! 2`);
  expect(renderedData).toBeInTheDocument();
});


// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
