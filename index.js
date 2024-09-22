const screen=document.querySelector('#screen')
const buttons=document.querySelectorAll('button')
let result=''

const calculate=(btnValue)=>{
    if(btnValue === 'ac'){
        result=''
    }
    else if(btnValue === 'del'){
        result=result.toString().slice(0,-1)
    }
    else if(btnValue ==='='){
        try{ result=eval(result)

        }
        catch{result="invalid"
        }
    }
    else{
        result+=btnValue
    }
    screen.value=result
}
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>calculate(e.target.value))
})
