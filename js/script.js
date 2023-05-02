let input=document.querySelector('input')
let ctx=[]
let form=document.querySelector('form')
form.addEventListener('submit', function (params) {
    params.preventDefault()
    input.forEach( function(inp){
        ctx.push(inp.value)
        console.log(data);
    });
})
