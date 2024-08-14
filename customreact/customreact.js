function customRender(reactElement, container) {
    // Create a DOM element based on the type
    const domElement = document.createElement(reactElement.type);
  
    // Set the inner HTML or text content
    domElement.textContent = reactElement.children;
  
    // Set attributes like href and target if they exist
    if (reactElement.props.href) {
      domElement.setAttribute('href', reactElement.props.href);
    }
    if (reactElement.props.target) {
      domElement.setAttribute('target', reactElement.props.target);
    }
  
    // Append the created DOM element to the container
    container.appendChild(domElement);
  }
  //ye connevvert hota hai parsing
  const reactElement = {
    type: 'a',
    props: {
      href: 'https://google.com',
      target: '_blank',
    },
    children: 'Click me to visit GOOGLE',
  };


  const mainContainer = document.querySelector('#root');
  
  customRender(reactElement, mainContainer);
  