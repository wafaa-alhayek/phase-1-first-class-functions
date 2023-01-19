function receivesAFunction(received){
    received()
}

function returnsANamedFunction(){
    return function named(){

    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}