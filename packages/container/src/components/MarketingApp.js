import React, {useEffect, useRef} from "react";
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        console.log('[Container] Marketing App mounted');
        const {onParentNavigate} = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: nextPathname}) => {
                console.log('[Container] The container noticed navigation from marketing app nextPathname : ', nextPathname);
                const { pathname } = history.location;
                if(pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            }
        });

        history.listen(onParentNavigate)
    }, [])
    return <div ref={ref}></div>
}