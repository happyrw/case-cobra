// import Steps from '@/components/Steps'
import MaxWidthWrapper from '@/components/Shared/MaxWidthWrapper'
import Steps from '@/components/Steps'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <MaxWidthWrapper className='flex-1 flex flex-col'>
            <Steps />
            {children}
        </MaxWidthWrapper>
    )
}

export default Layout