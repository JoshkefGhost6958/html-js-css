const drop_down_menu_toggle = document.getElementById('drop-down-toggle');
const menu_tag = document.getElementById('navbar-tag');
const welcome = document.getElementById('welcome-text');
const drop_down_menu = document.getElementById('drop-down-menu');
drop_down_menu_toggle.addEventListener('click',
(e)=>{
  e.preventDefault()
  const drop_down_menu = document.getElementById('drop-down-menu');
  if(drop_down_menu.style.display == "block"){
    drop_down_menu.style.display = "none";
    welcome.style.transition = "translate .15s ease-in-out";
    welcome.style.transform = `translate(0%,0%)`;
    man_page();
  }else if(drop_down_menu.style.display != "block"){
    drop_down_menu.style.display = "block"
    menu_tag.style.display = "none";
    welcome.style.transition = "translate .15s ease-in-out";
    welcome.style.transform = `translate(0%,130%)`;
  }
}
);

drop_down_menu.addEventListener('mouseleave',
(e)=>{
  e.preventDefault()
  drop_down_menu.style.display = "none";

})

drop_down_menu_toggle.addEventListener('mouseover',
(e)=>{
  menu_tag.style.display = "block";
});
drop_down_menu_toggle.addEventListener('mouseleave',
(e)=>{
  menu_tag.style.display = "none";
}
)
function check_width(){
  const drop_down_menu = document.getElementById('drop-down-menu');
  if(window.innerWidth > 699){
    console.log("screen is farely large");
    if (drop_down_menu.style.display == "block") {
      drop_down_menu.style.display = "none";
      welcome.style.transition = "translate .15s ease-in-out";
      welcome.style.transform = `translate(0%,0%)`;
    };
    console.log(drop_down_menu.style.display);
    console.log(window.innerWidth);
}
}

const body = document.body;
body.onresize = () =>{
  check_width();
};
