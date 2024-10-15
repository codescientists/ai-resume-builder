"use client"

import { TrashIcon, PlusIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Slider } from '../ui/slider'; // Assuming you are using a slider for skill progress
import { useFieldArray } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react';

const Skills = ({ form }: any) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'skills',
  });


  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Skills</h2>
        <p className="text-sm">Add your skills and proficiency level</p>
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="space-y-4 border p-4 rounded-md mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-md font-medium">Skill {index + 1}</h3>
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
              name={`skills.${index}.name`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Skill Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Skill Name"
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
              name={`skills.${index}.progress`}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Proficiency Level (0-5)</FormLabel>
                  <FormControl>
                    <Rating onClick={field.onChange} initialValue={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        onClick={() =>
          append({
            name: '',
            progress: 1,
          })
        }
      >
        <PlusIcon className="h-4 w-4 mr-2" /> Add Skill
      </Button>
    </div>
  );
};

export default Skills;
