import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

// Mount function to start up DOM
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if(onNavigate) {
        history.listen(onNavigate)
    }
    ReactDom.render(
        <App history={history} onSignIn={onSignIn}/>,
        el
    )
    return {
        onParentNavigate({pathname: nextPathname}) {
            console.log('[Auth] Container just navigated nextPathname : ', nextPathname);
            const {pathname} = history.location;
            if(pathname !== nextPathname) {
                history.push(nextPathname)
            } 
        }
    }
}

// If we are in development and in isolation then call mount immediately
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_auth-dev-root');
    if(el){
        mount(el, { defaultHistory: createBrowserHistory() })
    }
}

// If we are running through container , we should export the mount function
export { mount };