import { TrashIcon, PlusIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useFieldArray } from 'react-hook-form';

const Education = ({ form }: any) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'education',
  });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Education</h2>
        <p className="text-sm">Add your educational background</p>
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="space-y-4 border p-4 rounded-md mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-md font-medium">Education {index + 1}</h3>
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
              name={`education.${index}.universityName`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>University Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="University Name"
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
              name={`education.${index}.degree`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Degree</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Degree"
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
              name={`education.${index}.percentage`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Percentage / GPA</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Percentage / GPA"
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
              name={`education.${index}.startDate`}
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
              name={`education.${index}.endDate`}
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
            name={`education.${index}.description`}
            render={({ field }) => (
              <FormItem className="w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <FormLabel>Description</FormLabel>
                  </div>
                </div>
                <FormControl>
                  <Textarea
                    {...field}
                    className="bg-gray-50 h-36 py-3"
                    placeholder="Enter additional details"
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
            universityName: '',
            degree: '',
            percentage: '',
            startDate: '',
            endDate: '',
            description: '',
          })
        }
      >
        <PlusIcon className="h-4 w-4 mr-2" /> Add Education
      </Button>
    </div>
  );
};

export default Education;
