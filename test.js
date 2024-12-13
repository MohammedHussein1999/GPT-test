let inptNumber = document.getElementsByTagName('input')[0];
let inptText = document.getElementsByTagName('input')[1];
let submit = document.getElementsByTagName('input')[2];
let divSection = document.getElementById('results');
let divShow = document.querySelector('.sss');

// Add click event listener to the submit button
submit.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // console.log(divSection.value);
    console.log(divShow);
        let text =  document.createTextNode('ssss')
    

    if (divSection.value === "Div") {

      let num = Number(inptNumber.value)
      for (let i = 0; i < num; i++) {
        const myDiv = document.createElement('div');
        let text =  document.createTextNode(inptText.value)
        
        myDiv.append(text);
        divShow.appendChild(myDiv);
        console.log(divShow);

        
      }
      
   /*    for (let i = 0; i < inptNumber.value; i++) {
        
        console.log(i);
        const myDiv = document.createElement('div');
            myDiv.innerHTML = `Div ${i + 1}`; 
            divShow.appendChild(myDiv);
        }  */
    }
});