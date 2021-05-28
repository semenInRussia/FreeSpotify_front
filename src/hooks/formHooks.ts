import {useState} from "react";


type EventHandler = (e: any) => void

// Are You Haskell Coder???
const id = (value: any) => value

export function useInput<T>(
    initialValue: T,
    middleware: (value: T) => T = id
): [T, EventHandler] {

    const [value, setValue] = useState<T>(initialValue)

    const onChange = (event: any) => {
        setValue(middleware(event.target.value))
    }

    return [value, onChange]
}

export const useTextInputToUpperCase = (initValue: string): [string, EventHandler] => {
    const toUpperCase = (value: string) => value.toUpperCase()

    return useInput<string>(
        initValue,
        toUpperCase
    )
}
