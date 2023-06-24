 const yesBtn = document.querySelector ('#yesBtn');

 yesBtn.addEventListener('click',function() {
    alert('Gracias por darme  esta oportunidad, en este momento soy la persona mas feliz <3')
 });

 const noBtn = document.querySelector('#noBtn');

 noBtn.addEventListener('mouseover',function () {
    const randomx = parseInt(Math.random()*200);
    const randomy = parseInt(Math.random()*200);
    noBtn.style.setProperty('top',randomy+'%');
    noBtn.style.setProperty('left',randomx+'%');
    noBtn.style.setProperty('transform',`translate(-${randomx}%,-${randomy}%)`);
 })
 