export function obterLinhasMatrizQuadrada (matriz: Array<number[]>) {
  if (!Array.isArray(matriz) || matriz.length === 0 || matriz.some(row => !Array.isArray(row) || row.length !== matriz.length)) {
    throw new Error('A entrada deve ser uma matriz de ordem quadrada.')
  }

  const n = matriz.length
  const linhas = []

  // Adiciona as linhas da matriz
  for (let i = 0; i < n; i++) {
    linhas.push(matriz[i].slice())
  }

  // Adiciona as colunas da matriz
  for (let i = 0; i < n; i++) {
    const coluna = []
    for (let j = 0; j < n; j++) {
      coluna.push(matriz[j][i])
    }
    linhas.push(coluna)
  }

  // Adiciona a diagonal principal
  const diagonalPrincipal = []
  for (let i = 0; i < n; i++) {
    diagonalPrincipal.push(matriz[i][i])
  }
  linhas.push(diagonalPrincipal)

  // Adiciona a diagonal secundária
  const diagonalSecundaria = []
  for (let i = 0; i < n; i++) {
    diagonalSecundaria.push(matriz[i][n - 1 - i])
  }
  linhas.push(diagonalSecundaria)

  return linhas
}


export function calculateWinner (squares: Array<number>) {
  const lines = obterLinhasMatrizQuadrada([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ])

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
