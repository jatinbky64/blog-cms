import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const SkeltonLoader = () => {
    return (
        <div className='mx-auto xl:max-w-3xl max-w-6xl mt-14'>
            <Skeleton className='w-full h-10 rounded' />
            <Skeleton className='w-80 h-10 rounded-none mt-2' />
            <div className='px-6 mt-4 flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <Skeleton className='rounded-full w-12 h-12' />

                    <div>
                        <Skeleton className='h-3 w-20 rounded-none'/>
                        <Skeleton className='h-3 w-40 rounded-none mt-1'/>
                    </div>

                </div>

                <div className='flex gap-2 items-center'>
                <Skeleton className='rounded-full w-8 h-8' />
                <Skeleton className='rounded-full w-8 h-8' />
                <Skeleton className='rounded-full w-8 h-8' />



                </div>
            </div>

            <div className='mt-4'>
                <Skeleton className='w-full h-80 rounded-none'/>
            </div>
        </div>

    )
}

export default SkeltonLoader