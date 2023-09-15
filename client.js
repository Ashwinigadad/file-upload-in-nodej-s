const form=document.querySelector('form');
//file handling

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const fn=document.getElementById("fn");
    const ln=document.getElementById("ln");
    const files=document.getElementById("files");

    const formData=new FormData();
    formData.append("fn",fn.value);
    formData.append("ln",ln.value);

    for (let i=0; i < files.files.length; i++){
        formData.append("files",files.files[i]);
    }

    fetch('http://127.0.0.1:5001/upload',{
        method:'POST',
        body:formData,
    })
    .then(res=>res.json())
    .then(data=> console.log(data));
})