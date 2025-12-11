
import { Button } from "@/components/ui/button";

export default function ButtonGroup({ children , handleGetESIMClick }) {
  return (
    <div className="flex items-center gap-3">
      <Button  onClick={handleGetESIMClick}  className="bg-blue-600 hover:bg-blue-700">
        {children}
      </Button>
    </div>
  );
}

