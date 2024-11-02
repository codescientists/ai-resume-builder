'use server'

import { connectToDatabase } from "../database"
import Resume from "../database/models/resume.model"
import { handleError } from "../utils"
import { revalidatePath } from "next/cache"

export async function createResume(resume: any) {
    try {
      await connectToDatabase()
  
      const newResume = await Resume.create(resume)
      return JSON.parse(JSON.stringify(newResume))
    } catch (error) {
      handleError(error)
    }
}

export async function updateResume(resumeId: string, resume: any) {
    try {
      await connectToDatabase()
  
      const updatedResume = await Resume.findByIdAndUpdate(resumeId, resume, { new: true })
      
      if (!updatedResume) throw new Error('Resume update failed')

      return JSON.parse(JSON.stringify(updatedResume))

    } catch (error) {
      handleError(error)
    }
}
  
export async function deleteResume(clerkId: string) {
    try {
      await connectToDatabase()
      
      // Find resume to delete
      const resumeToDelete = await Resume.findOne({ clerkId })
  
      if (!resumeToDelete) {
        throw new Error('Resume not found')
      }
  
      // Delete resume
      const deletedResume = await Resume.findByIdAndDelete(resumeToDelete._id)
      
      revalidatePath('/')
      
      return deletedResume ? JSON.parse(JSON.stringify(deletedResume)) : null
    } catch (error) {
      handleError(error)
    }
}


export async function getResumeById(resumeId:string | undefined) {
      try {
        await connectToDatabase()
    
        const resume = await Resume.findById(resumeId);
        
        return JSON.parse(JSON.stringify(resume))
      } catch (error) {
        handleError(error)
      }
}

export async function getAllResumes() {
      try {
        await connectToDatabase()
    
        const resumes = await Resume.find();
        
        return JSON.parse(JSON.stringify(resumes))
      } catch (error) {
        handleError(error)
      }
}

