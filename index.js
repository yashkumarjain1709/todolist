let bandstate=[]
const render=(state)=>{
    return state.reduce((acc,todo,index)=>{
        const classstring=todo.striked?"class='striked'":" "
        return acc+`<li ${classstring} data-index=${index}>${todo.title}</li>`

    },'')
}
const paint=function(){
    const html=render(bandstate)
document.getElementById('list').innerHTML=html
}
document.getElementById('add').addEventListener('click',e=>{
    const inputtext=document.getElementById('inputbox').value
    bandstate.push({
        title : inputtext,
        striked :false
    })
    paint()
})

document.getElementById('list').addEventListener('click',e=>{
    const index=e.target.dataset.index
    bandstate[index].striked=!bandstate[index].striked
    paint()

})
document.getElementById('clear').addEventListener('click',e=>{
     bandstate=bandstate.filter(band=>!band.striked)
paint()
})