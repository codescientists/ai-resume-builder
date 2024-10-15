import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const PersonalDetails = ({ form }: any) => {
  return (
    <div className="space-y-4">
        <div>
            <h2 className="text-lg font-semibold">Personal Detail</h2>
            <p className="text-sm">Get started with basic information</p>
        </div>
        <div className="flex items-center space-x-4">
            <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                    <Input placeholder="First Name" {...field} className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            
            <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                    <Input placeholder="Last Name" {...field} className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>

        <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
            <FormItem className="w-full">
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                <Input placeholder="Job Title" {...field} className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none" />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />

        <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
            <FormItem className="w-full">
                <FormLabel>Address</FormLabel>
                <FormControl>
                <Input placeholder="Address" {...field} className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none" />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />

        <div className="flex items-center space-x-4">
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                    <Input placeholder="Phone" {...field} className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input placeholder="Email" {...field} className="h-[50px] w-full bg-gray-50 px-4 py-2 outline-none focus:outline-none" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>
    </div>
  )
}

export default PersonalDetails