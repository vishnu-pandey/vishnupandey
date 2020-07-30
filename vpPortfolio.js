
{
        ((showMeterVal)=>{
            let meterbarSpan= document.querySelectorAll('.meter-bar span');
            let meterbarMeter = document.querySelectorAll('.meter-bar meter');            
            for(let i=0; i<meterbarSpan.length;i++){
                meterbarSpan[i].innerHTML=meterbarMeter[i].value+'%';
            }
            
        })();


        var ele1 = document.querySelector('.about');
        var ele2 = document.querySelector('.services .service:nth-child(1)'); 
        var ele3 = document.querySelector('.services .service:nth-child(2)'); 
        var ele4 = document.querySelector('.services .service:nth-child(3)'); 
        var ele5 = document.querySelector('.services .service:nth-child(4)'); 
        var ele6 = document.querySelector('.content:nth-child(4)');
        var ele7 = document.querySelector('.content:nth-child(2)'); 
        var ele8 = document.querySelector('.content:nth-child(3)'); 
        var ele9 = document.querySelector('#skills .content'); 
        var ele12 = document.querySelector('#contact .box:nth-child(1)'); 
        var ele10 = document.querySelector('#contact .box:nth-child(2)'); 
        var ele11 = document.querySelector('#contact .box:nth-child(3)'); 



        function animationAlt(){
            let scrollVal = window.scrollY;

            let argsLen = arguments.length;
            for(let i=0;i<argsLen;i++){

                if(scrollVal>99){
                    arguments[i].classList.add('anime');
                    arguments[i].classList.remove('noAnime');

                }else{
                    arguments[i].classList.remove('anime');
                    arguments[i].classList.add('noAnime');
                }
            }
        }

        var animation = (...collection) => {

            var argsLen = collection.length;
            for(let i=0;i<argsLen;i++){
                if (collection[i].getBoundingClientRect().top<630){
                    collection[i].style.animationPlayState = 'running';
                }
            }

        }

        var ele = document.querySelector('nav');
        var hEle  = document.querySelector('header');
        var aEle = document.querySelectorAll('ul li a');
        window.addEventListener('scroll',function(){
            animationAlt(ele1);
            animation(ele2,ele3,ele4,ele5,ele6,ele7,ele8,ele9,ele10,ele11,ele12);


            let scrollBar = window.scrollY;

            console.log(scrollBar)

            if(scrollBar<=10){
                hEle.style.visibility = 'hidden';

            }
            if(scrollBar>10 && scrollBar<362){
                hEle.style.visibility = 'visible';
                ele.style.marginTop='15px';
                hEle.style.background='transparent';

            }else{ 
                
                ele.style.marginTop='0px';
                    hEle.style.background='linear-gradient(rgba(8, 8, 8, 0.28), rgb(19, 19, 19))';
                    
                    aEle.forEach(function(e){
                        e.style.color='white';
                    })
                
                
                }
        });
}