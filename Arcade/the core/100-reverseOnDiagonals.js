function reverseOnDiagonals(matrix) {
  let matrix1 = matrix.map((el) =>el.slice());

   for(let i = 0;i < matrix.length ;i++){
   matrix1[i][i]= matrix[matrix.length-1 -i][matrix.length-1 -i];
   matrix1[matrix.length-i -1][i]= matrix[i][matrix.length-i-1]

   }
   return matrix1
}
