// Ambil elemen DOM
const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list= document.getElementById("todoList");
const btn = document.createElement('button');
// Event Submit Form
form.addEventListener('submit', function(e){
   e.preventDefault();
   const text = input.value.trim();
   if(!text) return;

   // Buat elemen DOM baru
   const li = document.createElement('li');
   li.textContent = text;

   // Event Clik Untuk Toggle Selesai
   li.addEventListener('click', function(){
      li.classList.toggle('done');
   })

   li.appendChild(btn);
   list.appendChild(li);
   input.value='';
})