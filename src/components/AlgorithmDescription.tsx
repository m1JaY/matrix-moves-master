import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Code, RotateCcw, Calculator } from "lucide-react";

export const AlgorithmDescription = () => {
  const transposeSteps = [
    {
      step: 1,
      operation: "Определение размеров",
      description: "Получаем размеры исходной матрицы A[m×n]",
      pseudocode: "rows = matrix.length; cols = matrix[0].length",
      complexity: "O(1)"
    },
    {
      step: 2,
      operation: "Создание новой матрицы", 
      description: "Создаем пустую матрицу A^T[n×m] для результата",
      pseudocode: "transposed = new Array(cols).fill(null).map(() => new Array(rows))",
      complexity: "O(n×m)"
    },
    {
      step: 3,
      operation: "Обход элементов",
      description: "Проходим по всем элементам исходной матрицы",
      pseudocode: "for i = 0 to rows-1: for j = 0 to cols-1",
      complexity: "O(m×n)"
    },
    {
      step: 4,
      operation: "Перестановка индексов",
      description: "Меняем местами строки и столбцы: A^T[j][i] = A[i][j]",
      pseudocode: "transposed[j][i] = matrix[i][j]",
      complexity: "O(1) на элемент"
    }
  ];

  const traceSteps = [
    {
      step: 1,
      operation: "Проверка квадратности",
      description: "Убеждаемся, что матрица квадратная (n×n)",
      pseudocode: "if (matrix.length !== matrix[0].length) throw error",
      complexity: "O(1)"
    },
    {
      step: 2,
      operation: "Инициализация суммы",
      description: "Создаем переменную для накопления суммы",
      pseudocode: "let trace = 0",
      complexity: "O(1)"
    },
    {
      step: 3,
      operation: "Суммирование диагонали",
      description: "Проходим по главной диагонали и суммируем A[i][i]",
      pseudocode: "for i = 0 to n-1: trace += matrix[i][i]",
      complexity: "O(n)"
    },
    {
      step: 4,
      operation: "Возврат результата",
      description: "Возвращаем итоговую сумму диагональных элементов",
      pseudocode: "return trace",
      complexity: "O(1)"
    }
  ];

  return (
    <Card className="p-8 border">
      <h2 className="text-2xl font-semibold mb-8 text-center text-foreground flex items-center justify-center gap-3">
        <Code className="w-6 h-6" />
        Описание алгоритмов решения
      </h2>
      
      <div className="space-y-10">
        {/* Алгоритм транспонирования */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <RotateCcw className="w-5 h-5 text-foreground" />
            <h3 className="text-xl font-medium text-foreground">Алгоритм транспонирования матрицы</h3>
          </div>
          
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Шаг</TableHead>
                  <TableHead className="w-48">Операция</TableHead>
                  <TableHead>Описание</TableHead>
                  <TableHead className="w-80">Псевдокод</TableHead>
                  <TableHead className="w-24">Сложность</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transposeSteps.map((step) => (
                  <TableRow key={step.step}>
                    <TableCell>
                      <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center p-0">
                        {step.step}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {step.operation}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {step.description}
                    </TableCell>
                    <TableCell>
                      <code className="text-xs font-mono bg-muted p-2 rounded border block">
                        {step.pseudocode}
                      </code>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {step.complexity}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="p-4 bg-accent/50 rounded-lg border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Итоговая сложность:</strong> Временная O(m×n), Пространственная O(n×m)
            </p>
          </div>
        </div>

        {/* Алгоритм вычисления следа */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-5 h-5 text-foreground" />
            <h3 className="text-xl font-medium text-foreground">Алгоритм вычисления следа матрицы</h3>
          </div>
          
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Шаг</TableHead>
                  <TableHead className="w-48">Операция</TableHead>
                  <TableHead>Описание</TableHead>
                  <TableHead className="w-80">Псевдокод</TableHead>
                  <TableHead className="w-24">Сложность</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {traceSteps.map((step) => (
                  <TableRow key={step.step}>
                    <TableCell>
                      <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center p-0">
                        {step.step}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {step.operation}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {step.description}
                    </TableCell>
                    <TableCell>
                      <code className="text-xs font-mono bg-muted p-2 rounded border block">
                        {step.pseudocode}
                      </code>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {step.complexity}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="p-4 bg-accent/50 rounded-lg border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Итоговая сложность:</strong> Временная O(n), Пространственная O(1)
            </p>
          </div>
        </div>

        {/* Практические применения */}
        <div className="mt-8 p-6 bg-muted/30 rounded-lg border">
          <h4 className="text-lg font-medium text-foreground mb-4">Практические применения:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Транспонирование матрицы:
              </h5>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Решение систем линейных уравнений методом Гаусса</li>
                <li>• Компьютерная графика (поворот и отражение объектов)</li>
                <li>• Обработка изображений и сигналов</li>
                <li>• Вычисление скалярного произведения векторов</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                След матрицы:
              </h5>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Вычисление характеристического полинома</li>
                <li>• Инварианты линейных преобразований</li>
                <li>• Машинное обучение (оптимизация нейронных сетей)</li>
                <li>• Квантовая механика (ожидаемые значения операторов)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};