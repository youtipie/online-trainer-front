import {useRef} from "react";
import {useLocation} from "react-router-dom";
import {routes} from "../router/routes";

const useIndexLocation = () => {
    const location = useLocation();
    const route = useRef(location.pathname);
    const index = useRef(0);

    routes.forEach((item, i) => {
        if (item.route === route.current) {
            index.current = i;
        }
    });
    return index.current;
}

export default useIndexLocation;