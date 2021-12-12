const group = document.querySelector('.group');
const random = document.querySelector('.random');
const input = document.querySelector('.input');

random.addEventListener('click', function(){
     if(group.children.length !== 0){
          let userList = Array.from(group.children);
          shuffle(userList);
     }
});

// Shuffle function

          // FORWARD 
function shuffle(data){
     for(let i = 0; i <= data.length  - 1; i++){
          let randomise = Math.floor(Math.random() * (i));
          [data[i] , data[randomise]] = [data[randomise] , data[i]];
     }
     group.innerHTML = ' ';
     data.forEach(element => {
          group.appendChild(element);
     });
}

          // BACKWARD
// function shuffle(data){
//      for(let i = data.length -1; i > 0; i--){
//           let randomise = Math.floor(Math.random() * (i + 1));
//           [data[i] , data[randomise]] = [data[randomise] , data[i]];
//      }
//      group.innerHTML = ' ';
//      data.forEach(element => {
//           group.appendChild(element);
//      });
// }

// Add function
function add() {
	let name = input.value;
     let templateString = `<h3 class="member">${name}</h3> `;
     group.insertAdjacentHTML('beforeend', templateString);
     input.value = ''; 
};
