let mbl =document.getElementById('mebleg')
let f =document.getElementById('faiz')
let mdt =document.getElementById('muddet')
let um =document.getElementById('um')
let ao =document.getElementById("ao")
let btn =document.getElementById('btn')

btn.addEventListener('click',function(){
    
  let fm =(parseFloat(mbl.value)*parseFloat(f.value))/100;
    document.getElementById('um').innerHTML= parseFloat(mbl.value) + fm;
    document.getElementById('ao').innerHTML= parseFloat(parseFloat(mbl.value) + fm) /(parseFloat(mdt.value));
    
})


