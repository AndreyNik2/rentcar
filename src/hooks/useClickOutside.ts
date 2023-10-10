import { useEffect } from 'react';
export const useClickOutside = (ref:any, callback: () => void) => {
    const handleclick = (e:any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback()
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleclick)
        return document.removeEventListener("mousedown", handleclick);
    })
}