let sum: number[]=[200,30,123,45,0,0,0,564];
let max :number[] =[];
for(let i:number =0; i<sum.length ;i++){
    if(0 < sum[i]){
        max[max.length] = sum[i]
    }
}
console.log(max);