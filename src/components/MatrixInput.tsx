import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface MatrixInputProps {
  onMatrixChange: (matrix: number[][]) => void;
  title: string;
}

export const MatrixInput = ({ onMatrixChange, title }: MatrixInputProps) => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [matrix, setMatrix] = useState<number[][]>(
    Array(3).fill(null).map(() => Array(3).fill(0))
  );

  const updateMatrixSize = (newRows: number, newCols: number) => {
    const newMatrix = Array(newRows).fill(null).map(() => Array(newCols).fill(0));
    
    // Copy existing values
    for (let i = 0; i < Math.min(rows, newRows); i++) {
      for (let j = 0; j < Math.min(cols, newCols); j++) {
        newMatrix[i][j] = matrix[i][j] || 0;
      }
    }
    
    setMatrix(newMatrix);
    setRows(newRows);
    setCols(newCols);
    onMatrixChange(newMatrix);
  };

  const updateCell = (row: number, col: number, value: number) => {
    const newMatrix = matrix.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? value : c))
    );
    setMatrix(newMatrix);
    onMatrixChange(newMatrix);
  };

  const generateRandomMatrix = () => {
    const newMatrix = matrix.map(row =>
      row.map(() => Math.floor(Math.random() * 20) - 10)
    );
    setMatrix(newMatrix);
    onMatrixChange(newMatrix);
  };

  return (
    <Card className="p-6 border">
      <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
        {title}
      </h3>
      
      <div className="flex gap-4 mb-4 justify-center">
        <div className="flex items-center gap-2">
          <Label htmlFor="rows" className="text-sm">Строки:</Label>
          <Input
            id="rows"
            type="number"
            min="1"
            max="5"
            value={rows}
            onChange={(e) => updateMatrixSize(Number(e.target.value), cols)}
            className="w-16 h-8 text-center border"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="cols" className="text-sm">Столбцы:</Label>
          <Input
            id="cols"
            type="number"
            min="1"
            max="5"
            value={cols}
            onChange={(e) => updateMatrixSize(rows, Number(e.target.value))}
            className="w-16 h-8 text-center border"
          />
        </div>
      </div>

      <div className="grid gap-1 mb-4 justify-center">
        {matrix.map((row, i) => (
          <div key={i} className="flex gap-1">
            {row.map((cell, j) => (
              <Input
                key={`${i}-${j}`}
                type="number"
                value={cell}
                onChange={(e) => updateCell(i, j, Number(e.target.value) || 0)}
                className="w-12 h-12 text-center border hover:border-foreground/50 transition-colors"
              />
            ))}
          </div>
        ))}
      </div>

      <Button 
        onClick={generateRandomMatrix}
        variant="outline"
        className="w-full"
      >
        Случайная матрица
      </Button>
    </Card>
  );
};