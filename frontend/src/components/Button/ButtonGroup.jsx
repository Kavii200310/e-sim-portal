
import { Button } from "@/components/ui/button";

export default function ButtonGroup({ children, onClick }) {
  return (
    <div className="flex items-center gap-3">
      <Button  className="bg-blue-600 hover:bg-blue-700"
      onClick={onClick}>
        {children}
      </Button>
    </div>
  );
}

