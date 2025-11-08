const sketchPad = document.querySelector("#sketchPad");
const input = document.querySelector("#input");
const enter = document.querySelector("#enter");

enter.addEventListener('click', () => {

    if(input.value < 11 && +input.value !== NaN){
        sketchPad.textContent = '';

        sketchPad.style.width = `${input.value * 64}px`;
        sketchPad.style.height = `${input.value * 64}px`;


        for(let i = 0; i < input.value * input.value; i++){
            const square = document.createElement("div");
    
            square.classList.add("squareStyle");

            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = "black";
            });

            

            sketchPad.appendChild(square);

            }

    }else{
        sketchPad.textContent = 'That is not a number, or the number is to high';
    }
});
      

