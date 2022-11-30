// function addition(e){
//     e.preventDefault();
//     let numb1 = document.querySelector("#numb1").value;
//     let numb2 = document.querySelector("#numb2").value;
//     // document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
//     document.querySelector('#output').innerText = 
//     parseInt(numb1) + parseInt(numb2);
// }

let btnAddition = document.querySelector('button');         //only on2 button so no need to make an id

btnAddition.addEventListener('click', (e)=>{                //2nd argument logic behind clicking of the button
    e.preventDefault();                                     //prevent the page from reloading
    let numb1 = document.querySelector("#numb1").value;
    let numb2 = document.querySelector("#numb2").value;
    document.querySelector('#output').innerText = eval(`${numb1} + ${numb2}`);
    document.querySelector('#output').innerText = 
    parseInt(numb1) + parseInt(numb2);
})                      