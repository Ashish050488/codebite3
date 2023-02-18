gsap.registerPlugin(Flip);

const line = document.querySelectorAll(".nav-a a");
const active = document.querySelector('.active');

line.forEach((link) => {
    link.addEventListener("click",() => {
        //turn nav blue
        gsap.to(line, {color:"#252525"});
        if(document.activeElement=== link){
            gsap.to(link,{color:"#96C53B"})
        }
        const state = Flip.getState(active);
        link.appendChild(active);
        Flip.from(state,{
            duration:1.25,
            absolute:true,
            ease:'elastic.out(1,0.5)'
        });



    });
});

//cards
const cards = document.querySelectorAll('.card')
cards.forEach((card,index) => {
    
    card.addEventListener('click', ()=> {
        //get state
        const state = Flip.getState(cards);
        
        //add the active class to the the clicked one and in active to the others
        const isCardActive = card.classList.contains("active");
        cards.forEach((otherCard, OtherIdx) => {
            otherCard.classList.remove('active');
            otherCard.classList.remove('is-inactive');
           
        });
        if(!isCardActive) card.classList.add('active');
        Flip.from(state,{
            duration:1,
            ease:"expo.out",
            absolute:true,
            
        });
        
    });
});