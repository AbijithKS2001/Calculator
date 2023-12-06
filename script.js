function displayNumber(num)
{
    result.value+=num
    
}

function clearBox(){
    result.value=""
}


function evalExp(){

    // method 1
    // exp=result.value
    // output=eval(exp)
    // result.value=output

    // method 2
    result.value=eval(result.value)

}


function remove(){
    result.value=result.value.slice(0,-1)
}