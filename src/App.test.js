import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';


// guide: https://github.com/testing-library/jest-dom 

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}, 2000);

test('renders Hello world!', () => {
  const renderedData = screen.getByText(`Hello world!`);
  expect(renderedData).toBeInTheDocument();
});

test('renders Hello world! 2', () => {
  const renderedData = screen.getByText(`Hello world! 2`);
  expect(renderedData).toBeInTheDocument();
});

test('does not render Hello world! 3', () => {
  const renderedData = screen.queryByText(`Hello world! 3`);
  expect(renderedData).not.toBeInTheDocument();
});

test('renders Hello world! 4, two timmes', () => {
  const renderedData = screen.queryAllByText(`Hello world! 4`);
  expect(renderedData).toHaveLength(2);
});




// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });







// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import App from './App';

// import store from './redux/store';

// // syntax 

// // test( arg1, arg2);

// // test( `test description in English`, () => {});

// // test( `test description in English`, () => { 
// // render a component, 
// // test the rendering  
// // });

// // beforeEach( arg1, arg2);
// // beforeEach( () => {}, ms);

// beforeEach(() => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// }, 2000);

// test('renders Hello world!', () => {
//   // render(
//   //   <Provider store={store}>
//   //     <App />
//   //   </Provider>
//   // );
//   const renderedData = screen.getByText(`Hello world!`);
//   expect(renderedData).toBeInTheDocument();
// });

// test('renders Hello world! 2', () => {
//   // render(
//   //   <Provider store={store}>
//   //     <App />
//   //   </Provider>
//   // );
//   const renderedData = screen.getByText(`Hello world! 2`);
//   expect(renderedData).toBeInTheDocument();
// });

// test('does not render Hello world! 3', () => {
//   // render(
//   //   <Provider store={store}>
//   //     <App />
//   //   </Provider>
//   // );
//   const renderedData = screen.queryByText(`Hello world! 3`);
//   expect(renderedData).not.toBeInTheDocument();
// });


// // import { render, screen } from '@testing-library/react';
// // import App from './App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });
