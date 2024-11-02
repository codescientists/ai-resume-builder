"use client"

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircleIcon } from 'lucide-react';
import { useState } from "react";
import { createResume } from "@/lib/actions/resume.action";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation'
import { clerkClient } from "@clerk/nextjs/server";

const CreateNewResumeModal = ({ userId }: any) => {
    const [resumeName, setResumeName] = useState('')
    const router = useRouter(); 
    
  const handleResume = async () => {
    const resume = await createResume({ userId: userId, resumeTitle: resumeName })

    if(true){
        toast.success("Resume created!");

        router.push(`/create/${resume._id}`);
    }
  }

  return (
    <Dialog>
        <DialogTrigger>
            <div className="h-80 border border-orange-400 bg-gray-50 rounded-lg border-dashed hover:border-solid transition cursor-pointer flex items-center justify-center">
                <p>
                    <PlusCircleIcon className="h-10 w-10 text-orange-400" />
                </p>
            </div>    
            </DialogTrigger>
            <DialogContent>
            <DialogHeader>
                <DialogTitle>Enter your resume title</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
                <Input
                    id="name"
                    placeholder="Web developer position"
                    className="col-span-3"
                    value={resumeName}
                    onChange={(e) => setResumeName(e.target.value)}
                />
            </div>
            
            <DialogFooter>
                <Button type="submit" onClick={handleResume}>Create</Button>
            </DialogFooter>

        </DialogContent>
    </Dialog>
  )
}

export default CreateNewResumeModal