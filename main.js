const form = document.getElementById('form');
const initform = document.getElementsByClassName('initial')[0];
const completed = document.getElementsByClassName('completed')[0];
let subemail = document.getElementById('subemail');
const dismiss = document.getElementById('dismiss');
console.log('js loaded baba');


function handlesubmit(e){
    console.log('called');
    e.preventDefault();

     const data = {};
  const fields = e.target.querySelectorAll("input, select, textarea");
  
  for (const field of fields) {
    data[field.name] = field.value;
  }
//1. logging email
  console.log(data.email);
//2. display the thank you message by changing the divs display


if ((data.email).includes('@') & (data.email).includes('.')) {
console.log('it has an @');
initform.style.display = 'none';
console.log('page should change');
subemail.textContent = data.email;
completed.style.display = 'block';


} 
else {
    console.log('incorrect email');
    //change the entry field display to red and display the error message "invalid email"
    const emailfield = document.getElementById('email');
    const errormessage = document.getElementById('error-message');
    
    errormessage.style.display = 'block';
    
      if(emailfield.classList.contains('error'))
      {

      }
      else {emailfield.classList.toggle('error');}





  }

}


form.addEventListener('submit',handlesubmit);

function returntoform() {
  form.reset();

  let screenwidth = window.innerWidth;
      if (screenwidth <= 1024){
        initform.style.display = 'block';
      }else { initform.style.display = 'flex';}


completed.style.display = 'none';
}
dismiss.addEventListener("click", () => {
    returntoform();
});