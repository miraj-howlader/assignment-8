import { Loader} from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

      
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

      
      <p className="mt-4 text-gray-600 font-medium">
        <Loader className=" animate-spin" size={80}/>
      </p>

    </div>
  )
}