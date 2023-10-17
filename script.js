let rectangle=document.getElementById('rectangle');
let myWidth;
decreaseBtn.addEventListener('click', ()=>{
    myWidth = parseInt(rectangle.style.width);
    console.log(myWidth);
    newWidth = myWidth - 10;
    console.log (myWidth);
    rectangle.style.width = newWidth + 'px';
    console.log(myWidth);
})

 increaseBtn.addEventListener('click', () => {
    myWidth = parseInt(rectangle.style.width);
    console.log(myWidth);
    newWidth = myWidth + 10;
    console.log (myWidth);
    rectangle.style.width = newWidth + 'px';
    console.log(myWidth);
 })
