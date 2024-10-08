import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useLastPage() {
    const location = useLocation();

    useEffect(() => {
        sessionStorage.setItem("lastPage", location.pathname);
    }, []);
}