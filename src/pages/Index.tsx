import { useState, useEffect } from "react";
import { MatrixInput } from "@/components/MatrixInput";
import { MatrixDisplay } from "@/components/MatrixDisplay";
import { OperationSteps } from "@/components/OperationSteps";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { transposeMatrix, calculateTrace, getTransposeSteps, getTraceSteps } from "@/utils/matrixOperations";
import { RotateCcw, Calculator, Sparkles } from "lucide-react";

const Index = () => {
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [transposedMatrix, setTransposedMatrix] = useState<number[][]>([]);
  const [trace, setTrace] = useState<number | null>(null);
  const [showTranspose, setShowTranspose] = useState(false);
  const [showTrace, setShowTrace] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (matrix.length > 0) {
      setTransposedMatrix(transposeMatrix(matrix));
      
      try {
        setTrace(calculateTrace(matrix));
      } catch {
        setTrace(null);
      }
    }
  }, [matrix]);

  const handleTranspose = () => {
    setAnimating(true);
    setShowTranspose(true);
    setTimeout(() => setAnimating(false), 800);
  };

  const handleShowTrace = () => {
    setShowTrace(true);
  };

  const resetOperations = () => {
    setShowTranspose(false);
    setShowTrace(false);
    setAnimating(false);
  };

  const isSquareMatrix = matrix.length > 0 && matrix.length === matrix[0]?.length;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-matrix-primary" />
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Операции над матрицами
            </h1>
            <Sparkles className="w-8 h-8 text-matrix-secondary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Интерактивное изучение транспонирования матриц и вычисления следа
          </p>
        </div>

        {/* Matrix Input */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <MatrixInput onMatrixChange={setMatrix} title="Исходная матрица A" />
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            {/* Control Buttons */}
            <Card className="p-6 bg-gradient-accent border-matrix-primary/20">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={handleTranspose}
                  disabled={matrix.length === 0 || animating}
                  className="bg-gradient-primary hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Транспонировать
                </Button>
                
                <Button
                  onClick={handleShowTrace}
                  disabled={!isSquareMatrix}
                  variant="outline"
                  className="border-matrix-secondary text-matrix-secondary hover:bg-matrix-secondary/10 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Вычислить след
                </Button>
                
                <Button
                  onClick={resetOperations}
                  variant="secondary"
                  className="hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  Сбросить
                </Button>
              </div>
              
              {!isSquareMatrix && matrix.length > 0 && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  💡 След можно вычислить только для квадратных матриц
                </p>
              )}
            </Card>
          </div>
        </div>

        {/* Results */}
        {(showTranspose || showTrace) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {showTranspose && (
              <div className={`${animating ? 'animate-matrix-flip' : ''}`}>
                <MatrixDisplay
                  matrix={transposedMatrix}
                  title="Транспонированная матрица A^T"
                  highlight={showTranspose}
                />
              </div>
            )}
            
            {showTrace && isSquareMatrix && (
              <MatrixDisplay
                matrix={matrix}
                title="Исходная матрица (след)"
                showTrace={true}
                trace={trace || 0}
                highlight={showTrace}
              />
            )}
          </div>
        )}

        {/* Operation Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {showTranspose && (
            <OperationSteps
              steps={getTransposeSteps(matrix)}
              title="Шаги транспонирования"
            />
          )}
          
          {showTrace && (
            <OperationSteps
              steps={getTraceSteps(matrix)}
              title="Шаги вычисления следа"
            />
          )}
        </div>

        {/* Theory Section */}
        {matrix.length === 0 && (
          <Card className="p-8 bg-gradient-accent border-matrix-primary/20">
            <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-secondary bg-clip-text text-transparent">
              Теоретические основы
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-matrix-primary">Транспонирование матрицы</h3>
                <p className="text-muted-foreground">
                  Транспонирование - это операция, при которой строки и столбцы матрицы меняются местами.
                  Если A - матрица размера m×n, то A^T - матрица размера n×m.
                </p>
                <div className="bg-muted/30 p-4 rounded border border-matrix-primary/20">
                  <code className="text-matrix-primary">A^T[i,j] = A[j,i]</code>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-matrix-secondary">След матрицы</h3>
                <p className="text-muted-foreground">
                  След матрицы - это сумма элементов главной диагонали. Определен только для квадратных матриц.
                  Обозначается как tr(A) или Sp(A).
                </p>
                <div className="bg-muted/30 p-4 rounded border border-matrix-secondary/20">
                  <code className="text-matrix-secondary">tr(A) = Σ A[i,i]</code>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
