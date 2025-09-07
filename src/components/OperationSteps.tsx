import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Step {
  title: string;
  description: string;
  formula?: string;
  result?: string;
}

interface OperationStepsProps {
  steps: Step[];
  title: string;
}

export const OperationSteps = ({ steps, title }: OperationStepsProps) => {
  return (
    <Card className="p-6 border">
      <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
        {title}
      </h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border hover:border-foreground/20 transition-colors">
            <div className="flex-shrink-0 mt-1">
              <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center p-0 border-foreground/30">
                {index + 1}
              </Badge>
            </div>
            
            <div className="flex-1 space-y-2">
              <h4 className="font-medium text-foreground">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              
              {step.formula && (
                <div className="bg-muted p-2 rounded border">
                  <code className="text-sm font-mono text-foreground">{step.formula}</code>
                </div>
              )}
              
              {step.result && (
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-foreground" />
                  <span className="text-foreground font-medium">{step.result}</span>
                </div>
              )}
            </div>
            
            {index < steps.length - 1 && (
              <ArrowRight className="w-4 h-4 text-muted-foreground mt-2" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};