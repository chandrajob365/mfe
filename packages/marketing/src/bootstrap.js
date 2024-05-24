import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
// Mount function to start up DOM
const mount = el => {
    ReactDom.render(
        <App />,
        el
    )
}

// If we are in development and in isolation then call mount immediately
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-dev-root');
    if(el){
        mount(el)
    }
}

// If we are running through container , we should export the mount function
export { mount };