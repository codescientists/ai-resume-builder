import { PlusCircleIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <section className="px-4 lg:px-20 py-10">
        <h2 className="text-3xl font-bold">Your Resumes</h2>
        <p className="text-sm">Start creating your AI-powered resume for your next job role in minutes.</p>

        <div className="grid grid-cols-5 my-5 gap-5">
            <Link href={`/create`} className="h-80 border border-orange-400 bg-gray-50 rounded-lg border-dashed hover:border-solid transition cursor-pointer flex items-center justify-center">
                <p>
                    <PlusCircleIcon className="h-10 w-10 text-orange-400" />
                </p>
            </Link>
        </div>
    </section>
  )
}

export default Dashboard