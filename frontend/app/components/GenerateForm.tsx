"use client"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Inputs = {
  name: string
  theme: string
}

interface GenerateFormProps {
  onSubmit: SubmitHandler<Inputs>
}

const GenerateForm: React.FC<GenerateFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Inputs>()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full bg-surface p-6 rounded-lg shadow-md border border-default">
      <div className="flex space-x-4">
        <Input 
          defaultValue="name" 
          {...register("name")} 
          className="w-xl border border-default px-4 py-2 rounded-md text-primary"
        />
        <Controller
          name="theme"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="border border-default px-4 py-2 rounded-md text-primary">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent className="bg-surface border border-default">
                <SelectItem value="light" className="text-primary">Light</SelectItem>
                <SelectItem value="dark" className="text-primary">Dark</SelectItem>
                <SelectItem value="system" className="text-primary">System</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <Button type="submit" className="btn-primary w-32 mx-auto mt-4 rounded-md px-4 py-2">Submit</Button>
    </form>
  )
}

export default GenerateForm
