import {RefObject, useEffect, useRef} from "react";

type Callback = () => any

export default function useScroll(
    parentRef: RefObject<HTMLElement>,
    childRef: RefObject<HTMLElement>,
    callback: Callback
) {

    const observer = useRef();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }

        // @ts-ignore
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                callback()
            }
        }, options)

        // @ts-ignore
        observer.current.observe(childRef.current)

        return function () {
            // @ts-ignore
            observer.current.unobserve(childRef.current)
        };
    }, [callback])
};