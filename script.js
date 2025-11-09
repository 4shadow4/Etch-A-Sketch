const sketchPad = document.querySelector("#sketchPad");
const input = document.querySelector("#input");
const enter = document.querySelector("#enter");

enter.addEventListener('click', () => {

    if(input.value < 101 && +input.value !== NaN){
        sketchPad.textContent = '';

            for(let i = 0; i < input.value * input.value; i++){
            const square = document.createElement("div");
            
            square.style.width = `${960 / input.value}px`;
            square.style.height = `${960 / input.value}px`;
            square.classList.add("squareStyle");

            square.addEventListener('mouseenter', () => {
                square.style.opacity = `${Number(square.style.opacity) + 0.1}`;
            });

            

            sketchPad.appendChild(square);

            }

    }else{
        sketchPad.textContent = 'That is not a number, or the number is to high';
    }
});
      

