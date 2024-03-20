"use client";

import { useEffect, useState } from "react";
import Preview from "@/components/preview";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

        if (!isMounted) {
            return null;
        }
    
    return (
        <>
            <Preview/>
        </>
    )
}

export default ModalProvider;