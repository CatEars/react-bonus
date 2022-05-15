import { useEffect } from 'react'

export const useCustomWebsiteTitle = (title: string) => {
    useEffect(() => {
        document.title = title
    }, [title])
}