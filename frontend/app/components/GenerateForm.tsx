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
import LoadingSpinner from "./LoadingSpinner"

type Inputs = {
  name: string
  tone: string
}

interface GenerateFormProps {
  onSubmit: SubmitHandler<Inputs>
  isGenerating: boolean
}

const GenerateForm = ({ onSubmit, isGenerating }: GenerateFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Inputs>()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <Input 
            defaultValue="name" 
            {...register("name", { required: "Name is required" })} 
            className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            disabled={isGenerating}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <Controller
            name="tone"
            control={control}
            rules={{ required: "Tone is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isGenerating}>
                <SelectTrigger className="w-full bg-gray-700 border border-gray-600 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select a tone" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border border-gray-700">
                  <SelectItem value="casual" className="text-white hover:bg-gray-700">Casual</SelectItem>
                  <SelectItem value="simple" className="text-white hover:bg-gray-700">Simple</SelectItem>
                  <SelectItem value="professional" className="text-white hover:bg-gray-700">Professional</SelectItem>
                  <SelectItem value="friendly" className="text-white hover:bg-gray-700">Friendly</SelectItem>
                  <SelectItem value="formal" className="text-white hover:bg-gray-700">Formal</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.tone && (
            <p className="text-sm text-red-500 mt-1">{errors.tone.message}</p>
          )}
        </div>
      </div>
      <Button 
        type="submit" 
        disabled={isGenerating}
        className="w-full md:w-32 mx-auto mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md px-4 py-2 hover:from-blue-600 hover:to-purple-700 transition-all"
      >
        {isGenerating ? (
          <LoadingSpinner />
        ) : (
          "Generate"
        )}
      </Button>
    </form>
  )
}

export default GenerateForm