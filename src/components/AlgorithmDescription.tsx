import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ArrowRight, RotateCcw, Calculator } from "lucide-react";

export const AlgorithmDescription = () => {
  return (
    <Card className="p-8 border">
      <h2 className="text-2xl font-semibold mb-6 text-center text-foreground flex items-center justify-center gap-3">
        <Code className="w-6 h-6" />
        Описание алгоритмов решения
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Алгоритм транспонирования */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <RotateCcw className="w-5 h-5 text-foreground" />
            <h3 className="text-xl font-medium text-foreground">Алгоритм транспонирования</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border">
              <Badge variant="outline" className="w-6 h-6 rounded-full flex items-center justify-center p-0 text-xs">
                1
              </Badge>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Определение размеров</h4>
                <p className="text-sm text-muted-foreground">
                  Для матрицы A[m×n] создаем новую матрицу A^T[n×m]
                </p>
                <div className="bg-muted p-2 rounded border">
                  <code className="text-xs font-mono text-foreground">rows = matrix.length, cols = matrix[0].length</code>
                </div>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto" />

            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border">
              <Badge variant="outline" className="w-6 h-6 rounded-full flex items-center justify-center p-0 text-xs">
                2
              </Badge>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Обход элементов</h4>
                <p className="text-sm text-muted-foreground">
                  Проходим по всем элементам исходной матрицы
                </p>
                <div className="bg-muted p-2 rounded border">
                  <code className="text-xs font-mono text-foreground">for i = 0 to rows-1, for j = 0 to cols-1</code>
                </div>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto" />

            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border">
              <Badge variant="outline" className="w-6 h-6 rounded-full flex items-center justify-center p-0 text-xs">
                3
              </Badge>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Перестановка индексов</h4>
                <p className="text-sm text-muted-foreground">
                  Меняем местами строки и столбцы: A^T[j][i] = A[i][j]
                </p>
                <div className="bg-muted p-2 rounded border">
                  <code className="text-xs font-mono text-foreground">transposed[j][i] = matrix[i][j]</code>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-accent/50 rounded-lg border">
            <h5 className="font-medium text-foreground mb-2">Сложность алгоритма:</h5>
            <p className="text-sm text-muted-foreground">
              • Временная: O(m×n) - нужно обойти все элементы<br/>
              • Пространственная: O(n×m) - для новой матрицы
            </p>
          </div>
        </div>

        {/* Алгоритм вычисления следа */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-5 h-5 text-foreground" />
            <h3 className="text-xl font-medium text-foreground">Алгоритм вычисления следа</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border">
              <Badge variant="outline" className="w-6 h-6 rounded-full flex items-center justify-center p-0 text-xs">
                1
              </Badge>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Проверка квадратности</h4>
                <p className="text-sm text-muted-foreground">
                  Убеждаемся, что матрица квадратная (n×n)
                </p>
                <div className="bg-muted p-2 rounded border">
                  <code className="text-xs font-mono text-foreground">if (rows !== cols) throw error</code>
                </div>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto" />

            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border">
              <Badge variant="outline" className="w-6 h-6 rounded-full flex items-center justify-center p-0 text-xs">
                2
              </Badge>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Инициализация суммы</h4>
                <p className="text-sm text-muted-foreground">
                  Создаем переменную для накопления суммы диагональных элементов
                </p>
                <div className="bg-muted p-2 rounded border">
                  <code className="text-xs font-mono text-foreground">let trace = 0</code>
                </div>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto" />

            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border">
              <Badge variant="outline" className="w-6 h-6 rounded-full flex items-center justify-center p-0 text-xs">
                3
              </Badge>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Суммирование диагонали</h4>
                <p className="text-sm text-muted-foreground">
                  Проходим по главной диагонали и суммируем элементы A[i][i]
                </p>
                <div className="bg-muted p-2 rounded border">
                  <code className="text-xs font-mono text-foreground">for i = 0 to n-1: trace += matrix[i][i]</code>
                </div>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-muted-foreground mx-auto" />

            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border">
              <Badge variant="outline" className="w-6 h-6 rounded-full flex items-center justify-center p-0 text-xs">
                4
              </Badge>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Возврат результата</h4>
                <p className="text-sm text-muted-foreground">
                  Возвращаем итоговую сумму диагональных элементов
                </p>
                <div className="bg-muted p-2 rounded border">
                  <code className="text-xs font-mono text-foreground">return trace</code>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-accent/50 rounded-lg border">
            <h5 className="font-medium text-foreground mb-2">Сложность алгоритма:</h5>
            <p className="text-sm text-muted-foreground">
              • Временная: O(n) - проходим только по диагонали<br/>
              • Пространственная: O(1) - используем только одну переменную
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-muted/30 rounded-lg border">
        <h4 className="text-lg font-medium text-foreground mb-3">Практические применения:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-foreground mb-2">Транспонирование:</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Решение систем линейных уравнений</li>
              <li>• Компьютерная графика (поворот объектов)</li>
              <li>• Обработка изображений</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-foreground mb-2">След матрицы:</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Характеристический полином</li>
              <li>• Инварианты линейных преобразований</li>
              <li>• Машинное обучение (градиентный спуск)</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
};