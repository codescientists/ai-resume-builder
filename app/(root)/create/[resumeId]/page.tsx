import ResumeForm from '@/components/forms/ResumeForm'
import { getResumeById } from '@/lib/actions/resume.action';
import { auth, clerkClient } from '@clerk/nextjs/server';
import React from 'react'

const CreateResume = async ({params: { resumeId }}: {params: { resumeId: string }}) => {
    const { userId } = auth();
    const user = await clerkClient.users.getUser(userId!);

    const resume = await getResumeById(resumeId);

  return (
    <section className="px-4 lg:px-20 py-10">
        <ResumeForm type="Update" resume={resume} resumeId={resumeId} userId={user?.publicMetadata?.userId}/>
    </section>
  )
}

export default CreateResume