class Calculator {
    
     calculate(str){
        console.log('called::: '+str+'\n');
        if (str.length == 0) {
            console.log(str + 'zero\n')
            return 0;
        } else if(parseInt(str) == 2){
            console.log(str + 'int2');
            return 2;
        }
        else if(parseInt(str) == 3){
            console.log(str + 'int3');
            return 3;
        }
        else {
            console.log('other strings')
            console.log('str = ' + str +'\n');
            var arr = str.split(/[\n/,]+/);
            var a;var b;var c;
            if(arr.lenght == 2){
            a=parseInt(arr[0]); 
            b=parseInt(arr[1]);
            console.log(a,b);
            function plus(a,b){
                var sum = a+b;
                return sum;
            }
            var sum2 = plus(a,b);
            return sum2;
            console.log("\n"+ sum2);
           } else if(arr.lenght == 3){
            a=parseInt(arr[0]);
            b=parseInt(arr[1]);
            c=parseInt(arr[2]);
            console.log("three numbers:"+a,b,c);
            function plusplus(a,b,c){
                var plus1=a+b+c;
                return plus1;
            }
            var plus2 = plusplus(a,b,c);
            console.log("three number sum:"+plus2);
            return plus2;
           }
        }
        //else if(Number.isInteger(str)!= 0){
          //  return 
        //}
    }

}
module.exports = Calculator