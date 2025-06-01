var tl1=gsap.timeline({});
tl1.from(".main",{
    duration:1,
    opacity:0
});
tl1.from(".classic",{
    duration:1,
    opacity:0
},'logo');
tl1.from(".can",{
    duration:1,
    opacity:0
},'logo');
tl1.from(".bottle",{
    duration:1,
    opacity:0
},'logo');

var tl2=gsap.timeline({scrollTrigger:{
    trigger:"products",
    start:"10% 50%",
    end:"20% 50%",
    scrub:true
}});

tl2.to(".can",{
    top:"95%",
    left:"15%",
    scale:0.75
});



var tl3=gsap.timeline({scrollTrigger:{
    trigger:".cola-sec",
    start:"0% 90%",
    end:"50% 70%",
    scrub:true
}});
tl3.to(".bottle",{
    top:"250%",
    left:"7%",
    rotate:"1deg"
},'product');
tl3.to(".can",{
    top:"261%",
    left:"40%",
    scale:1
},'product');
tl3.to(".classic",{
    top:"255%",
    left:"70%",
    rotate:"1deg"
},'product');


window.addEventListener('wheel',(dets)=>{
    if(dets.deltaY>0){
        gsap.to(".scroll",{
        transform:'translateX(-30%)',
        duration:15,
        repeat:-1,
        ease:"none"
        });
    }
    else{
        gsap.to(".scroll",{
        transform:'translateX(30%)',
        duration:15,
        repeat:-1,
        ease:"none"
        });
    }
});