import {RefObject, useState, useEffect} from 'react';

export const range = (
    start: number = 0,
    stop: number = 1,
    step: number = 0.1,
    precision: number = 1
): Array<number> =>
    Array.from({length: (stop - start) / step + 1}, (_, i) =>
        Number((start + i * step).toFixed(precision))
    );

const useOnScreen = (
    ref: RefObject<HTMLElement> | null,
    observerOptions?: IntersectionObserverInit,
) => {
    const [intersectionValues, setIntersectionValues] = useState({
        // индикатор пересечения
        isIntersecting: false,
        // степень пересечения
        ratio: 0,
        // ширина видимой части
        width: 0,
        // высота видимой части
        height: 0,
    });

    useEffect(() => {
        // наблюдаемый элемент
        let observable: HTMLElement;
        // if (ref) {
        //     observable = ref.current as HTMLElement;
        // }

        // наблюдатель
        const observer = new IntersectionObserver(([entry]) => {
            // обновляем состояние
            setIntersectionValues((prevValues) => ({
                ...prevValues,
                isIntersecting: entry.isIntersecting,
                ratio: Math.round(entry.intersectionRatio * 100),
                width: Math.round(entry.intersectionRect.width),
                height: Math.round(entry.intersectionRect.height),
            }));
        }, observerOptions);

        // начинаем наблюдение
        if (ref) {
            observable = ref.current as HTMLElement;
            observer.observe(observable);
        }

        // прекращаем наблюдение при размонтировании компонента
        return () => observer.unobserve(observable);
    }, []);

    return intersectionValues;
}

export default useOnScreen;
