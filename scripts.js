document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.classList.add('header-container');
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    h1.classList.add('h1');
    let text1 = document.createTextNode('This is an h1');
    h1.appendChild(text1);
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    h2.classList.add('h2');
    let text2 = document.createTextNode('This is an h2');
    h2.appendChild(text2);
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.classList.add('h3');
    let text3 = document.createTextNode('This is an h3');
    h3.appendChild(text3);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    h4.classList.add('h4');
    let text4 = document.createTextNode('This is an h4');
    h4.appendChild(text4);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    h5.classList.add('h5');
    let text5 = document.createTextNode('This is an h5');
    h5.appendChild(text5);
    div.appendChild(h5);

    let h6 = document.createElement('h6');
    h6.classList.add('h6');
    let text6 = document.createTextNode('This is an h6');
    h6.appendChild(text6);
    div.appendChild(h6);

    // Change color to random array of colors
    let headers = document.querySelector(div).children;
    document.addEventListener("dblclick", function () {
        let colorArray = ["red", "blue", "yellow", "purple", "orange", "green", "pink", "brown"];
        headers[0].style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    });



    let list = 1;
    function newListItem() {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let item = document.createTextNode(`This is list item ${list}`);
        li.appendChild(item);
        ul.appendChild(li);
        document.body.appendChild(ul);
        list++;
        li.addEventListener("click", function(){
            let colorArray = ["red", "blue", "yellow", "purple", "orange", "green", "pink", "brown"];
            li.style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
        })
        li.addEventListener("dblclick", function() {
            li.style.display = "none";
        })
    };


    let btn = document.getElementsByClassName('button');
    btn[0].addEventListener("click", function () {
        newListItem("click");
    });
    
});

