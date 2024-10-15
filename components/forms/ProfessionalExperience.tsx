import { BrainIcon, TrashIcon, PlusIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useFieldArray } from 'react-hook-form';

const ProfessionalExperience = ({ form }: any) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'professionalExperience',
  });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Professional Experience</h2>
        <p className="text-sm">Add your previous job experience</p>
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="space-y-4 border p-4 rounded-md mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-md font-medium">Experience {index + 1}</h3>
            <Button
              variant="outline"
              className="border-red-500 text-red-500"
              onClick={() => remove(index)}
            >
              <TrashIcon className="h-4 w-4 mr-2" /> Remove
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <FormField
              control={form.control}
              name={`professionalExperience.${index}.positionTitle`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Position Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Position Title"
                      {...field}
                      className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`professionalExperience.${index}.companyName`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company Name"
                      {...field}
                      className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center space-x-4">
            <FormField
              control={form.control}
              name={`professionalExperience.${index}.city`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="City"
                      {...field}
                      className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`professionalExperience.${index}.state`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="State"
                      {...field}
                      className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center space-x-4">
            <FormField
              control={form.control}
              name={`professionalExperience.${index}.startDate`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`professionalExperience.${index}.endDate`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name={`professionalExperience.${index}.summary`}
            render={({ field }) => (
              <FormItem className="w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <FormLabel>Summary</FormLabel>
                  </div>
                  <Button variant="outline" className="border-orange-500 text-black bg-gray-50">
                    <BrainIcon className="h-4 w-4 mr-2" /> Generate with AI
                  </Button>
                </div>
                <FormControl>
                  <Textarea
                    {...field}
                    className="bg-gray-50 h-36 py-3"
                    placeholder="Enter your job summary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}

      <Button
        variant="outline"
        onClick={() =>
          append({
            positionTitle: '',
            companyName: '',
            city: '',
            state: '',
            startDate: '',
            endDate: '',
            summary: '',
          })
        }
      >
        <PlusIcon className="h-4 w-4 mr-2" /> Add Professional Experience
      </Button>
    </div>
  );
};

export default ProfessionalExperience;
