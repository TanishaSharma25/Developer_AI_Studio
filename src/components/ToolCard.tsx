import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ToolCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
};

export default function ToolCard({
  title,
  description,
  icon: Icon,
  path,
}: ToolCardProps) {
  const navigate = useNavigate();
  return (
    <Card className="group cursor-pointer border transition-all duration-200 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="rounded-xl bg-purple-500/10 p-3 text-purple-600">
            <Icon className="h-6 w-6" />
          </div>

          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-600" />
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>

        <Button
          variant="ghost"
          className="mt-4 px-0 text-purple-600 hover:bg-transparent hover:text-purple-700"
          onClick={() => navigate(path)}
        >
          Open Tool
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
