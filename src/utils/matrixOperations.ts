export const transposeMatrix = (matrix: number[][]): number[][] => {
  if (matrix.length === 0) return [];
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  const transposed: number[][] = Array(cols).fill(null).map(() => Array(rows).fill(0));
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }
  
  return transposed;
};

export const calculateTrace = (matrix: number[][]): number => {
  if (matrix.length === 0 || matrix.length !== matrix[0]?.length) {
    throw new Error("Trace can only be calculated for square matrices");
  }
  
  let trace = 0;
  for (let i = 0; i < matrix.length; i++) {
    trace += matrix[i][i];
  }
  
  return trace;
};

export const getTransposeSteps = (matrix: number[][]) => {
  if (matrix.length === 0) return [];
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  return [
    {
      title: "Определение операции",
      description: "Транспонирование матрицы - это операция, при которой строки и столбцы меняются местами",
      formula: "A^T[i,j] = A[j,i]"
    },
    {
      title: "Размерность результата",
      description: `Исходная матрица ${rows}×${cols} становится матрицей ${cols}×${rows}`,
      result: `Новый размер: ${cols}×${rows}`
    },
    {
      title: "Перестановка элементов",
      description: "Каждый элемент A[i,j] перемещается в позицию A^T[j,i]",
      formula: "∀i,j: A^T[j,i] = A[i,j]"
    },
    {
      title: "Результат",
      description: "Получена транспонированная матрица",
      result: "Транспонирование завершено"
    }
  ];
};

export const getTraceSteps = (matrix: number[][]) => {
  if (matrix.length === 0 || matrix.length !== matrix[0]?.length) {
    return [
      {
        title: "Ошибка",
        description: "След можно вычислить только для квадратных матриц",
        result: "Матрица должна быть квадратной"
      }
    ];
  }
  
  const diagonalElements = [];
  let sum = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    diagonalElements.push(matrix[i][i]);
    sum += matrix[i][i];
  }
  
  return [
    {
      title: "Определение следа",
      description: "След матрицы - это сумма элементов главной диагонали",
      formula: "tr(A) = Σ A[i,i]"
    },
    {
      title: "Элементы главной диагонали",
      description: `Выбираем элементы: ${diagonalElements.join(", ")}`,
      result: `Диагональные элементы: [${diagonalElements.join(", ")}]`
    },
    {
      title: "Вычисление суммы",
      description: "Складываем все диагональные элементы",
      formula: `tr(A) = ${diagonalElements.join(" + ")} = ${sum}`
    },
    {
      title: "Результат",
      description: "След матрицы вычислен",
      result: `tr(A) = ${sum}`
    }
  ];
};