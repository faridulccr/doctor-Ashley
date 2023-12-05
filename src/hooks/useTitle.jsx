import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        // for dynamic page title
        document.title = `${title}`;
    }, [title]);
};

export default useTitle;
