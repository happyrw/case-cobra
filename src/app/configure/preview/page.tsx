import { db } from '@/lib/db'
import DesignPreview from './DesignPreview'
import { notFound } from 'next/navigation'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// interface PageProps {
//   searchParams: {
//     [key: string]: string | string[] | undefined
//   }
// }

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const { id } = await searchParams

    if (!id || typeof id !== 'string') {
        return notFound()
    }

    const configuration = await db.configuration.findUnique({
        where: { id },
    })

    if (!configuration) {
        return notFound()
    }

    if (!user) {
        // Handle the case where the user is not logged in
        return <div>You need to be logged in to access this page</div>;
    }

    return <DesignPreview configuration={configuration} user={user} />
}

export default Page