
let userInput = document.getElementById('userInput'); 
let button1 = document.getElementById('button1'); 
let toDo = document.getElementById('toDo');
let completed = document.getElementById('completed') ; 

let count = 1 ;



button1.addEventListener('click',()=>{
    if(userInput.value===''){
        alert('Please Enter Your Todo');
    }
    else{ 
        let list = document.createElement('li') ;
        let cover = document.createElement('div') ;
        let image = document.createElement('img'); 
    
        let head = document.createElement('h1'); 
        let deleteButton = document.createElement('button') ;
        let completeButton = document.createElement('button')
        completeButton.textContent = 'Completed';
        completeButton.setAttribute('id','t'+count);
        completeButton.setAttribute('class','btn btn-success');
        deleteButton.textContent= 'Delete';
    
        image.src='list1.png'; 
        image.alt='image1' 
        image.classList.add('image1')
       
       
        let listId= 'list'+count ;
        list.setAttribute('id',listId) ;
        deleteButton.setAttribute('id',`${count}`) ;
        deleteButton.setAttribute('class','btn btn-warning');
       
        head.textContent=userInput.value ; 
        cover.appendChild(image);
        cover.appendChild(head) ; 
        cover.appendChild(completeButton);
        cover.appendChild(deleteButton);
       
        list.appendChild(cover) ;
        toDo.appendChild(list) ;
        userInput.value='';
        count++ ;
        deleteButton.addEventListener('click',(event)=>{
            console.log(event.target.id);
            let num = event.target.id
            let deleteList = document.getElementById('list'+num);
            console.log(deleteList);
            toDo.removeChild(deleteList);
        }); 
    
        completeButton.addEventListener('click',(event)=>{
            console.log(event.target.id);
            let countNum = event.target.id ; 
            let completedButton=document.getElementById(countNum); 
    
            let completeList = document.getElementById('lis'+countNum);
           
            console.log(completeList);
            completed.appendChild(completeList);
          
           
        });







    }
   


})