var i=0
    var images=["./images/image1.jpeg","./images/image.jpeg"]
    var c=document.getElementById("change");
    setInterval(()=>{
    c.src=images[i]
    i++
    if(i==images.length){
    i=0
    }
    },5000)