
let titel = [];
let notiz = [];
let removeTitel = [];
let removeNotiz = [];
reload();


function render(){
  let content = document.getElementById('content');
   content.innerHTML = '';
    
for(let i = 0; i < titel.length; i++){
    const notizTitel = titel[i];
    const notizNotizen = notiz[i];
    
    content.innerHTML += 
    `<div class="NoteContainer">
        
        <div>
          <div>${notizTitel}</div>
          <p>${notizNotizen}</p>
        </div>
        
        <div class="trash-Container">
          <img onclick="removeNote(${i})" src="icons8-trash-104.png" alt="">
        </div> 
        
      <div>`}

}
  function render2(){
      let deleteNote = document.getElementById('delete');
      deleteNote.innerHTML = ''; 

    for(let i = 0; i < removeTitel.length; i++){
          const Titeldelete = removeTitel[i];
          const Notizdelete = removeNotiz[i];

          deleteNote.innerHTML +=
          `
          <div class="deleteContainer2">
            <div>${Titeldelete}</div>
            <div>${Notizdelete}</div>
            <img onclick="resetNote(${i})" src="icons8-repeat-100.png" alt="">
          </div>
          `
    }
}

function addNote(){
  let inputTitel = document.getElementById('titel');
  let inputNote = document.getElementById('note');

  if(inputTitel.value.length > 0){
      titel.push(inputTitel.value);
      notiz.push(inputNote.value);
      
  } else {
    alert('Fill Titel and Note!')
  }
   
    inputTitel.value = '';
    inputNote.value = '';
  
  render();
  save();
  reload();
  
    } 
 
function removeNote(i){
  removeNotiz.push(notiz.splice(i, 1));
  removeTitel.push(titel.splice(i, 1));

    render();
    save();
    reload();

}

function resetNote(i){
  titel.push(removeNotiz.splice(i, 1));
  notiz.push(removeTitel.splice(i, 1));
  
    save();
    reload();
    render2();

}

function deleteAll(i){
  removeNotiz.splice(i);
  removeTitel.splice(i);


  save();
  reload();
  render2();
}

function save(){
  let titleAsText = JSON.stringify(titel);
  localStorage.setItem('titel', titleAsText);
  let notizAsText = JSON.stringify(notiz);
  localStorage.setItem('notiz', notizAsText);

  let removeTitelAsText = JSON.stringify(removeTitel);
  localStorage.setItem('removeTitel', removeTitelAsText);
  let removeNotizAsText = JSON.stringify(removeNotiz);
  localStorage.setItem('removeNotiz', removeNotizAsText)
  
}

function reload(){
  let titleAsText = localStorage.getItem('titel');
  let notizAsText = localStorage.getItem('notiz');
  
  if(titleAsText && notizAsText){
    titel = JSON.parse(titleAsText);
    notiz = JSON.parse(notizAsText);
  }
  
  let removeTitelAsText  = localStorage.getItem('removeTitel');
  let removeNotizAsText = localStorage.getItem('removeNotiz')
     
  
  if(removeTitelAsText && removeNotizAsText){
    removeTitel = JSON.parse(removeTitelAsText);
    removeNotiz = JSON.parse(removeNotizAsText);
  }
}




