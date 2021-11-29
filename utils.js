module.exports ={
    matriceProduct,
    sumOfMatrices,
    sumOfEachRow,
    sumOfArray,
}
       function matriceProduct(mat1,mat2){
            if(mat1[0].length !== mat2.length){
                console.log("The number of columns in mat1 must be equal to the number of rows in mat2");
                return 0;
            }
            const result = [];
                for(let i = 0; i < mat1.length; i++ ){
                result[i] = [];

                for (let k = 0; k < mat2[0].length; k++){
                result[i][k] = 0;

                for (let p = 0; p < mat2.length; p++){
                    result[i][k] += mat1[i][p] * mat2[p][k];
                }
            }
            }
               return result;
            };

        function sumOfMatrices(mat1,mat2){
                  
                if(mat1.length != mat2.length){
                    return 0;
                }
                let newMat = [];
                for(let i = 0; i < mat1.length; i++){
                    let arr = [];
                    for(j = 0; j < mat1.length; j++){
                        arr.push(mat1[i][j] + mat2[i][j]);
                    }
                    newMat.push(arr);
                }
                return newMat;
            }

        function sumOfArray(arr) {
                let result = 0;
                for(let i=0; i < arr.length; i++){
                    result += arr[i];
                }
                return result;
            };
            
        function sumOfEachRow(mat){
                let result = [];
                for( let i = 0; i < mat.length; i++){
                    result[i] = this.sumOfArray(mat[i]);
                }
                return result;
            };