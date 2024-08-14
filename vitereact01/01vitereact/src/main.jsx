import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Example React component
function MyApp() {
  return (
    <div>
      <h1>chai leleo</h1>
    </div>
  );
}

// Another React element using JSX
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
);

// React element using React.createElement
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google'
  anotherUser
);
 const anotherUser  = "chai aur react"
// Create root element
const root = createRoot(document.getElementById('root'));

// Render the application
root.render(
  <StrictMode>
    {/* Uncomment to render MyApp component */}
    {/* <MyApp /> */}

    {/* Uncomment to render the App component */}
    {/* <App /> */}

    {/* Uncomment to render anotherElement */}
    {/* {anotherElement} */}

    {/* Render the reactElement */}
    {reactElement}
  </StrictMode>
);
