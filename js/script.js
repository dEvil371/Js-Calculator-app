let textArea=document.querySelector('.textarea');
console.log(textArea);
let buttons=document.querySelectorAll('button');
console.log(buttons);
let textAreaValue='';

for (item of buttons) {
    item.addEventListener('click',run);

    function run(e)
    {
        buttonText=e.target.innerText;
        
        if(buttonText=='C')
        {
            textAreaValue='';
            textArea.value=textAreaValue;
        }
        else if(buttonText=='=')
        {
            textArea.value=eval(textAreaValue);
        }
        else
        {
            textAreaValue+=buttonText;
            textArea.value=textAreaValue;
        }
    }
}