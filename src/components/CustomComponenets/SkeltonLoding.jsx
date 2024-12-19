import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const SkeltonLoading = () => {
    return (
        <div>
            <Skeleton className="w-full max-w-md h-60 rounded-none" />
            <div className="p-4">
                <Skeleton className="h-6 w-80" />
                <Skeleton className="h-6 w-52 mt-1" />
                <Skeleton className="h-20 mt-4 w-full" />
                <Skeleton className="h-6 w-36 mt-5" />
            </div>
        </div>

    )
}

export default SkeltonLoading