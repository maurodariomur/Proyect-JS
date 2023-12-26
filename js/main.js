const screen = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const bottonClick = btn.textContent.trim();

        if (btn.id === "ac") {
            screen.textContent = "0";
            return;
        }

        if (btn.id === "clear") {
            if(screen.textContent.length === 1 || screen.textContent === "Error"){
                screen.textContent = "0";
                return;

            }
            else{
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if(btn.id === "igual"){
            try{
                screen.textContent = eval(screen.textContent);
            }
            catch{
                screen.textContent = "Error";
            }
            return;
        }


        if (screen.textContent.trim() === "0" || screen.textContent === "Error") {
            screen.textContent = bottonClick;
        }
        else {
            screen.textContent += bottonClick;
        }
    });
});
