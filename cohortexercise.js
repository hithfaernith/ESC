function gcd(a, b){
    if(b==0){
        return a;
    }
    else{
        return gcd(b, (a%b));
    }
}

//note: csvfile should just contain the contents of the csv file. 
//this function cannot take in a raw csv file path. 
function parseCSV(csvfile){
    var str = csvfile.split("\\n");
    var result = [];
    for (const element of str){
        result.push(element.split(","));
    }
    return result;
}

//can just use quicksort(array) to call the function
function quicksort(arr, left = 0, right = arr.length-1){
    if(arr.length == 1){
        return arr;
    }
    if(left<right){
        var po = quickHelper(arr, left, right);
        quicksort(arr, left, po-1);
        quicksort(arr, po+1, right)
    }
    return arr;
}

function quickHelper(arr, left, right){
    let pivot = arr[right];
    let pointer = left;
    for (let i= left; i<right; i++){
        if(arr[i]<= pivot){
            [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
            pointer+=1;
        }
    }
    [arr[pointer], arr[right]] = [arr[right], arr[pointer]];
    return pointer;
}