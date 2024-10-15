import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { BrainIcon } from 'lucide-react'

const SummaryForm = ({ form }: any) => {
  return (
    <div>
        <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
            <FormItem className="w-full">
                <div className="flex items-center justify-between">
                    <div>
                        <FormLabel>Summary</FormLabel>
                        <FormDescription>Add summary for your job title</FormDescription>
                    </div>
                    <Button variant="outline" className='border-orange-500 text-black bg-gray-50'>
                        <BrainIcon className="h-4 w-4 mr-2" /> Generate with AI
                    </Button>
                </div>
                <FormControl>
                    <Textarea {...field} className="bg-gray-50 h-36 py-3" placeholder="Enter your job summary" />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
    </div>
  )
}

export default SummaryForm