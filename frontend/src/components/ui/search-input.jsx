
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"; 

export function SearchInput({ placeholder, ...props }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      <Input 
        className="pl-10 h-10 bg-white border-gray-200" 
        placeholder={placeholder} 
        {...props} 
      />
    </div>
  );
}