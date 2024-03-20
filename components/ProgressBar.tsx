"use client"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressLoader = () => {
   
   
       return (
        <ProgressBar
        height="3px"
        color = "#ffa45c"
        options={{ showSpinner: false }}
        shallowRouting
        />
    )

}
export default ProgressLoader