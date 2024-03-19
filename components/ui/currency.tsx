"use client"

import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";
 
 interface CurrencyProps {
    value?: string | number
    className?: string
 }

 const Currency: React.FC<CurrencyProps> = ({value, className}) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);

    }, []);

    if (!isMounted) {
        return
    }
    return (
        <p className={className}>
            {formatter.format(Number(value))}
        </p>
    )
 }

 export default Currency;