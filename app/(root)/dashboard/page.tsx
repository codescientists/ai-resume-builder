import CreateNewResumeModal from '@/components/sections/CreateNewResumeModal';
import { getAllResumes, getResumeById } from '@/lib/actions/resume.action';
import { auth, clerkClient } from '@clerk/nextjs/server';
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { MoreVerticalIcon } from 'lucide-react';
import Link from 'next/link';


const Dashboard = async () => {

  const resumes = await getAllResumes();

  const { userId } = auth();

  const user = await clerkClient.users.getUser(userId!);

  return (
    <section className="px-4 lg:px-20 py-10">
        <h2 className="text-3xl font-bold">Your Resumes</h2>
        <p className="text-sm">Start creating your AI-powered resume for your next job role in minutes.</p>
        

        <div className="grid grid-cols-5 my-5 gap-5">
            <CreateNewResumeModal userId={user?.publicMetadata?.userId} />
            
            {
              resumes.map((resume: any) => (
                <div style={{ background: resume.theme, borderColor: resume.theme }} className="border-t-4 border-black flex flex-col justify-between shadow-lg rounded-lg relative">
                  <div style={{ background: `linear-gradient(to top left,#accbee,#e7f0fd)` }} className="w-full h-[90%] flex items-center justify-center">
                    <img src="/resume.png" alt="" className="w-1/2 h-1/2 object-cover" />
                  </div>

                  <div className="flex items-center justify-between p-2 text-white">
                    {/* Resume Title */}
                    <h3 className="text-md font-semibold">{resume.resumeTitle}</h3>

                    {/* Three-dot Action Button */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <MoreVerticalIcon className="h-3.5 w-3.5" />
                          <span className="sr-only">More</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Link href={`/create/${resume._id}`} className="w-full">Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href={`/create/${resume._id}`} className="w-full">View</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            }
        </div>
    </section>
  )
}

export default Dashboard