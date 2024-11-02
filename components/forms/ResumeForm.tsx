"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { GradientPicker } from "../ui/color-picker"
import { ArrowLeftCircle, ArrowRightCircle, SaveIcon } from "lucide-react"
import toast from "react-hot-toast"
import PersonalDetails from "./PersonalDetails"
import SummaryForm from "./SummaryForm"
import ProfessionalExperience from "./ProfessionalExperience"
import Education from "./Education"
import Skills from "./Skills"
import ResumeDesign from "../resume-templates/ResumeDesign"
import { Input } from "../ui/input"
import { updateResume } from "@/lib/actions/resume.action"

export const resumeFormSchema = z.object({
  resumeTitle: z.string(),
  firstName: z.string().min(3, 'First Name must be at least 3 characters').optional(),
  lastName: z.string().min(3, 'Last Name must be at least 3 characters').optional(),
  jobTitle: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  summary: z.string().optional(),
  professionalExperience: z.array(z.object({ 
    positionTitle: z.string(),
    companyName: z.string(),
    city: z.string(),
    state: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    summary: z.string().optional(),
  })).optional(),
  education: z.array(z.object({
    universityName: z.string(),
    degree: z.string(),
    percentage: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    description: z.string().optional(),
  })).optional(),
  skills: z.array(z.object({
    name: z.string(),
    progress: z.number(),
  })).optional(),
  theme: z.string().optional(),
});

export const resumeDefaultValues = {
  resumeTitle: "resume 1",
  firstName: "John",
  lastName: "Doe",
  jobTitle: "Full Stack Developer",
  address: "1234 Elm Street, Springfield, IL 62701",
  phone: "(555) 123-4567",
  email: "john.doe@example.com",
  summary: "Experienced Full Stack Developer with over 5 years in designing, developing, and managing web applications. Proficient in React, Node.js, JavaScript, and cloud technologies. Passionate about delivering efficient and scalable solutions.",
  professionalExperience: [
    {
      positionTitle: "Senior Full Stack Developer",
      companyName: "Tech Solutions Inc.",
      city: "Chicago",
      state: "IL",
      startDate: "2020-01-01",
      endDate: "2023-06-30",
      summary: "Led a team of developers to design and implement scalable full-stack applications. Improved performance of legacy applications by 30% and mentored junior developers."
    },
    {
      positionTitle: "Full Stack Developer",
      companyName: "InnovateX",
      city: "San Francisco",
      state: "CA",
      startDate: "2017-05-01",
      endDate: "2019-12-31",
      summary: "Developed multiple web applications using React, Node.js, and MongoDB. Collaborated with UI/UX designers to improve user experience by optimizing performance and implementing responsive design."
    }
  ],
  education: [
    {
      universityName: "University of Illinois",
      degree: "Bachelor of Science in Computer Science",
      percentage: "3.8/4.0",
      startDate: "2013-08-15",
      endDate: "2017-05-20",
      description: "Focused on software engineering and web technologies. Participated in various hackathons and projects related to AI and cloud computing."
    }
  ],
  skills: [
    {
      name: "React.js",
      progress: 4
    },
    {
      name: "Node.js",
      progress: 4
    },
    {
      name: "JavaScript",
      progress: 4
    },
    {
      name: "AWS",
      progress: 3
    }
  ],
  theme: "#09203f", 
};

const colors = [
  '#E2E2E2',
  '#ff75c3',
  '#ffa647',
  '#ffe83f',
  '#9fff5b',
  '#70e2ff',
  '#cd93ff',
  '#09203f',
]

type ResumeFormProps = {
  type: "Create" | "Update"
  resume?: any,
  resumeId?: string,
  userId: string | null | unknown,
}

const ResumeForm = ({ type, resume, resumeId, userId }: ResumeFormProps) => {
  const [color, setColor] = useState('#09203f');
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({})

  const initialValues = resume && type === 'Update' 
    ? { 
      ...resume,
    } : resumeDefaultValues

  const router = useRouter();

  const form = useForm<z.infer<typeof resumeFormSchema>>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof resumeFormSchema>) {
    if (type === 'Create') {
      try {
        console.log(values);
        // API call to create resume
      } catch (error) {
        console.log(error);
      }
    }

    if (type === 'Update') {      
      if (!resumeId) {
        router.back();
        return;
      }

      try {
        await updateResume(resumeId, {
          firstName: values.firstName,
          lastName: values.lastName,
          jobTitle: values.jobTitle,
          address: values.address,
          phone: values.phone,
          email: values.email,
          summary: values.summary,
          professionalExperience: values.professionalExperience,
          education: values.education,
          skills: values.skills, 
          theme: values.theme, 
        })

        toast.success("Saved!")
      } catch (error) {
        console.log(error);
      }
    }
  }

  const updateFormValue = () => {
    setFormValues(form.getValues())
  }
  
  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} onChange={() => updateFormValue()} className="w-full mb-20">
        <div className="grid grid-cols-12 gap-8 w-full">
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col gap-5 shadow-lg border-t-4 border-t-orange-400 rounded-lg p-6">
              {/* Theme & Step Navigation */}
              <div className="flex justify-between border-b-2 border-b-orange-400 pb-4">
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <FormField
                        control={form.control}
                        name="resumeTitle"
                        render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                            <Input placeholder="Resume Title" {...field} className="w-full px-4 py-2 outline-none focus:outline-none" />
                            </FormControl>
                        </FormItem>
                        )}
                    />
                    <FormField
                      control={form.control}
                      name="theme"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <GradientPicker
                              className="w-full"
                              background={field.value}
                              setBackground={field.onChange}
                              setColor={setColor}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  {step > 1 && (
                    <Button onClick={handlePrevStep} type="button" className="bg-orange-400 hover:bg-orange-500">
                      <ArrowLeftCircle className="h-4 w-4"/>
                    </Button>
                  )}
                  <Button type="submit" variant="outline" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Saving...' : `Save`} <SaveIcon className="h-4 w-4 ml-2"/>
                  </Button>
                  {step < 5 ? (
                    <Button onClick={handleNextStep} type="button" className="bg-orange-400 hover:bg-orange-500">
                      Next <ArrowRightCircle className="h-4 w-4 ml-2"/>
                    </Button>
                  ) : (
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? 'Submitting...' : `${type} Resume`}
                    </Button>
                  )}
                </div>
              </div>

            
              {/* Step 1: Resume Name and Description */}
              {step === 1 && (
                <PersonalDetails form={form} />
              )}

              {/* Step 2: Summary */}
              {step === 2 && (
                <>
                  <SummaryForm form={form} />
                </>
              )}

              {/* Step 3: Professional Experience */}
              {step === 3 && (
                <>
                  <ProfessionalExperience form={form} />
                </>
              )}

              {/* Step 4: Education */}
              {step === 4 && (
                <>
                  <Education form={form} />
                </>
              )}

              {/* Step 5: Skills */}
              {step === 5 && (
                <>
                  <Skills form={form} />
                </>
              )}

            </div>
          </div>
          <div className="col-span-12 md:col-span-6 w-full">
              <ResumeDesign form={form}/>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default ResumeForm





