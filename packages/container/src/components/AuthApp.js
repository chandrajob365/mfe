import React, {useEffect, useRef} from "react";
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

export default ({onSignIn}) => {
    
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        console.log('[Container] Auth App mounted', history.location.pathname);
        const {onParentNavigate} = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: nextPathname}) => {
                console.log('[Container] The container noticed navigation from auth app nextPathname : ', nextPathname);
                const { pathname }= history.location;
                if(pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            },
            onSignIn,
        });
        console.log('[Container] Inside Auth App useEffect :: history.location : ', history.location)
        history.listen(onParentNavigate);
    }, [])
    return <div ref={ref}></div>
}