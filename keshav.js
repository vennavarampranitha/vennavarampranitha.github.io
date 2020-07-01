const log = document.getElementById('logo')
let count = 0;

log.addEventListener('click', () => {
    count++;
    console.log('Count ', count);
    if (count == 5) {
        alert('Hi, Hello Whatsup? from KP, Take a look my Keshu\'s web app')
        window.open('https://keshavlingala.web.app')
        count = 0;
    }
})
const ent=()=>{
    console.log('hello');
    b.style.visibility='visible';
    yes=true
}
const lev=()=>{
    yes=false;
}
let yes=false
let d=document.getElementsByTagName('li')[0]
d.removeAttribute('onmouseover')
const b=document.querySelector('.LI-profile-badge')
b.style.position='absolute';b.style.left='20%';b.style.top='40%';b.style.visibility='hidden';b.style.textAlign='left';
b.style.zIndex=100
d.onmouseover=ent;d.onmouseleave=lev;
b.onmouseover=ent;b.onmouseleave=lev;
window.setInterval(()=>{
        b.style.visibility=yes?'visible':'hidden'
},2000)
const prani = () => {
    console.log('kesh bedda bugga')
}