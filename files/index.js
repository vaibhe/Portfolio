

// let btn = document.getElementById('toggle')

// let header = document.querySelector('.head')
// btn.addEventListener('click', function () {
//    header.classList.toggle('active')


// })







//Typin effect
let typed = new Typed ('.autoinput', {
   strings: ['Front-End Developer!', 'Freelancer!' , 'Problem Solver.'],
   typedpeed : 0,
   backspeed : 0,
   backDelay : 2000,
   loop : true
})

const input = document.querySelector('input')
let change_color = document.querySelector("--root")

input.oninput = () => {
    document.body.style.backgroundColor = input.value;
};


let project = document.getElementsByClassName('work')


for (i = 0; i < project.length; i++) {
   project[i].addEventListener('click', function () {
      this.classList.toggle('active')
      // console.log(project)
   })
}

let submitbtn = document.querySelector('.sendbtn')
submitbtn.addEventListener('click', function(){
   alert('Thanks For your Feedback')
})