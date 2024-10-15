import ResumeForm from '@/components/forms/ResumeForm'
import { auth } from '@clerk/nextjs/server';
import React from 'react'

const CreateResume = () => {
    const { userId } = auth();

  return (
    <section className="px-4 lg:px-20 py-10">
        <ResumeForm type="Create" userId={userId}/>
    </section>
  )
}

export default CreateResume