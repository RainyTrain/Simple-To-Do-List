const input = document.querySelector('input');
const button = document.querySelector('button');
const container = document.getElementById('todo');

button.addEventListener('click', function(){
    if(input.value != ''){
        container.style.visibility = 'visible';
    const div = document.createElement('div');
    div.classList.add('task');
    div.append(`${input.value}`);
    container.appendChild(div);
    input.value='';
    }
    else{
        alert('The field is Empty!');
    }

    const allDivs = document.querySelectorAll('.task')

    for(let dv of allDivs){
        dv.addEventListener('click', function(){
            if(dv.classList != null){
                dv.style.textDecorationLine = 'line-through';
                dv.addEventListener('click',function(e){
                    if(dv.classList != null){
                        e.target.remove();
                        if(container.innerText === ''){
                            container.style.visibility = 'hidden';
                        }
                    }
                })
            }
        })
    }
})











