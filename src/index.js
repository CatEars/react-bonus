import { useEffect } from 'react'

export const useCustomWebsiteTitle = (title) => {
    useEffect(() => {
        document.title = title || ""
    }, [title])
}