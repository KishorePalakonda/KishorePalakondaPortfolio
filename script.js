const bar1=document.querySelector(".in-bar1");
const bar2=document.querySelector(".in-bar2");
const bar3=document.querySelector(".in-bar3");
const bar4=document.querySelector(".in-bar4");
const bar5=document.querySelector(".in-bar5");
const per1=document.querySelector(".per1");
const per2=document.querySelector(".per2");
const per3=document.querySelector(".per3");
const per4=document.querySelector(".per4");
const per5=document.querySelector(".per5");
let started = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
  
        let val = 1;
        const inter = setInterval(() => {
          bar1.style.width = `${val}%`;
          per1.innerHTML = `${val}%`;
          val++;
  
          if (val >= 76) {
            clearInterval(inter);
          }
        }, 30);
        let val2 = 1;
        const inter2 = setInterval(() => {
          bar2.style.width = `${val2}%`;
          per2.innerHTML = `${val2}%`;
          val2++;
  
          if (val2 === 61) {
            clearInterval(inter2);
          }
        }, 30);
        let val3 = 1;
        const inter3 = setInterval(() => {
          bar3.style.width = `${val3}%`;
          per3.innerHTML = `${val3}%`;
          val3++;
  
          if (val3 === 79) {
            clearInterval(inter3);
          }
        }, 30);
        let val4 = 1;
        const inter4 = setInterval(() => {
          bar4.style.width = `${val4}%`;
          per4.innerHTML = `${val4}%`;
          val4++;
  
          if (val4 >= 66) {
            clearInterval(inter4);
          }
        }, 30);
        let val5 = 1;
        const inter5 = setInterval(() => {
          bar5.style.width = `${val5}%`;
          per5.innerHTML = `${val5}%`;
          val5++;
  
          if (val5 >= 73) {
            clearInterval(inter5);
          }
        }, 30);
      }
    });
  });
  

  observer.observe(bar1);
  const apps=document.querySelector("#contact-apps");
  const ab=document.querySelector("#about-section");
  const div=document.createElement("div");
  div.setAttribute("id","button-up")
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        div.style.width="50px";
        div.style.height="50px";
        div.style.backgroundColor="black";
        div.style.position="fixed";
        div.style.right="50px";
        div.style.top="500px";
        div.style.borderRadius="50%"
        div.style.backgroundColor="transparent"
        div.style.border="1px solid"
        div.style.borderColor="orangered"
        div.innerHTML = `<img src="./images/arrow_up.svg">`;
        div.style.textAlign="center"
        div.style.color="white";
        div.style.paddingTop="6px";
        div.style.boxSizing=Z="border-box"
        document.querySelector("body").appendChild(div);

      }
    })

  })
  const obs2=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        document.querySelector("body").removeChild(div);
      }
    })

  })
  obs2.observe(ab);
  obs.observe(apps);

  div.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });