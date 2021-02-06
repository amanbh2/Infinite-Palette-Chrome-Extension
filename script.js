strips = document.querySelectorAll('.strips');
c_tags = document.querySelectorAll('h3');
refresh_btn = document.getElementById('refresh');
heart_btn = document.getElementById('heart');
plus_btn = document.getElementById('plus');
moon_btn = document.getElementById('dark');


strips.forEach(changecolor);
strips.forEach(fillcolor);
c_tags.forEach(copycolor);

saved1=["#f01150", "#ff4b5c", "#ed0440", "#ff7b54", "#ffc93c"];
saved2=["#202040", "#41444b", "#ff6363", "#fddb3a", "#40a8c4"];

document.body.onkeydown = function(e){
    if(e.keyCode == 32 && e.target == document.body){
        e.preventDefault();
        strips.forEach(changecolor);
    }
}
refresh_btn.addEventListener("click", function(){
    strips.forEach(changecolor);
});

heart_btn.addEventListener("click", function(){
    one=0
    strips.forEach(fillsavedone);
});

plus_btn.addEventListener("click", function(){
    one=0
    strips.forEach(savecolor);
});

moon_btn.addEventListener("click", function(){
    two=0
    strips.forEach(fillsavedtwo);
});

function fillcolor(box){
    box.addEventListener("click", function() {
        changecolor(box);
    });
}

function fillsavedone(box){
    box.style.backgroundColor = saved1[one];
    c= box.children;
    c[0].innerHTML=saved1[one];
    one++;
}
function fillsavedtwo(box){
    box.style.backgroundColor = saved2[two];
    c= box.children;
    c[0].innerHTML=saved2[two];
    two++;
}

function savecolor(box){
    c= box.children;
    saved1[one]=c[0].innerHTML;
    one++;
}
function changecolor(box){
    generateColor();
    box.style.backgroundColor = hex;
    c= box.children;
    c[0].innerHTML=hex;
}
function copycolor(tag) {
    tag.addEventListener("click", function(e){
        var text = tag.innerText;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
        e.stopPropagation();
    });
}

function generateColor(){
    r=Math.ceil((Math.random())*255);
    g=Math.ceil((Math.random())*255);
    b=Math.ceil((Math.random())*255);
    rh=Number(r).toString(16);
    if (r<16){
        rh = "0"+rh;
    }
    gh=Number(g).toString(16);
    if (g<16){
        gh = "0"+gh;
    }
    bh=Number(b).toString(16);
    if (b<16){
        bh = "0"+bh;
    }
    hex="#"+rh+gh+bh
}

