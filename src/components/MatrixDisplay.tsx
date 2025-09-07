import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MatrixDisplayProps {
  matrix: number[][];
  title: string;
  highlight?: boolean;
  showTrace?: boolean;
  trace?: number;
}

export const MatrixDisplay = ({ matrix, title, highlight = false, showTrace = false, trace }: MatrixDisplayProps) => {
  const isSquare = matrix.length === matrix[0]?.length;

  return (
    <Card className={`p-6 transition-all duration-500 ${
      highlight 
        ? 'bg-gradient-secondary border-matrix-secondary animate-matrix-glow' 
        : 'bg-gradient-accent border-matrix-primary/20'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
          {title}
        </h3>
        {showTrace && isSquare && (
          <Badge variant="secondary" className="bg-matrix-primary/20 text-matrix-primary border-matrix-primary/30">
            След: {trace}
          </Badge>
        )}
      </div>
      
      <div className="grid gap-1 justify-center">
        {matrix.length > 0 ? matrix.map((row, i) => (
          <div key={i} className="flex gap-1">
            {row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`w-12 h-12 border border-matrix-grid/30 rounded flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  showTrace && i === j && isSquare
                    ? 'bg-matrix-primary/20 text-matrix-primary border-matrix-primary animate-number-bounce'
                    : 'bg-muted/50 hover:bg-muted'
                }`}
              >
                {cell}
              </div>
            ))}
          </div>
        )) : (
          <div className="text-center text-muted-foreground py-8">
            Матрица не задана
          </div>
        )}
      </div>
      
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Размер: {matrix.length} × {matrix[0]?.length || 0}
      </div>
    </Card>
  );
};