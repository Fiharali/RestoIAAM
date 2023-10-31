const search = document.querySelector('.vectoricon');
const inputicon = document.querySelector('.navitems input');

search.addEventListener('click',function(){
    if(inputicon.style.display==='none'){
        inputicon.style.display='block';
    } else{
        inputicon.style.display='none'
    }
})