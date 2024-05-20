let inp = document.querySelector('input');
let btn = document.querySelector('button');


//2-ci ceht duzgun islemir hamisi 1 manatdir
//ve qepiklerle islemir
// let imgObj = {
//     500: './images/500.jpg',
//     200: './images/200.jpg',
//     100: './images/100.jpg',
//     50: './images/50.jpg',
//     20: './images/20.jpg',
//     10: './images/10.jpg',
//     5: './images/5.jpg',
//     1: './images/1.jpg',
//     0.5: './images/0.5.jpg',
//     0.2: './images/0.2.jpg',
//     0.1: './images/0.1.jpg',
//     0.05: './images/0.05.jpg',
//     0.03: './images/0.03.jpg',
//     0.01: './images/0.01.jpg'
// }

// let convert = (value) => {
//     value = +value;
//     let parentDiv = document.createElement('div');
//     parentDiv.innerHTML = '';
//     Object.keys(imgObj).forEach(el => {
//         el = +el;
//         while (value !== 0) {
//             if (value >= el) {
//                 let img = document.createElement('img');
//                 img.src = imgObj[el];
//                 img.width = '300';
//                 parentDiv.append(img);
//                 document.body.append(parentDiv);
//             }
//             value = value - el;
//         }
//     });
// }

// btn.addEventListener('click', () => {
//     convert(inp.value);
// });


//4-cu ceht USLEK KOD
//1-ci usul Map ise
//Map istifad eledim cunki burda elementler oz yerlerini qoruyur
//amma obyek yaradanda elementler=>1,5,10,20,50,100,200,500
//bele siralamada proqram duzgun islemir
let imgMap = new Map([
    ['500', './images/500.jpg'],
    ['200', './images/200.jpg'],
    ['100', './images/100.jpg'],
    ['50', './images/50.jpg'],
    ['20', './images/20.jpg'],
    ['10', './images/10.jpg'],
    ['5', './images/5.jpg'],
    ['1', './images/1.jpg'],
    ['0.5', './images/0.5.jpg'],
    ['0.2', './images/0.2.jpg'],
    ['0.1', './images/0.1.jpg'],
    ['0.05', './images/0.05.jpg'],
    ['0.03', './images/0.03.jpg'],
    ['0.01', './images/0.01.jpg']
]);

let convert = (input) => {
    let parentDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Map ile';
    h2.style.color = 'red';
    parentDiv.append(h2);
    while (input != 0) {
        imgMap.forEach((key, value) => {
            value = +value;
            while (input >= value) {
                let img = document.createElement('img');
                img.src = key;
                img.width = '300';
                parentDiv.append(img);
                //if else-ni qepiklerle duzgun islesin deye yazdim
                //cunki 0.3-0.2=0.9999999999998
                //if else bu error-u duzeldir
                if (value >= 1) {
                    input = input - value;
                } else {
                    input = (input - value).toFixed(2);
                }
            }
        });
        document.body.append(parentDiv);
    }
}


//5-ci ceht ISLEK KOD
//2-ci usul Array ile
let money = [500, 200, 100, 50, 20, 10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.03, 0.01];
let convert2 = (inpValue) => {
    let cover = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Array ile';
    h2.style.color = 'green';
    cover.append(h2);
    while (inpValue != 0) {
        money.forEach(el => {
            let parentDiv = document.createElement('div');
            while (inpValue >= el) {
                let img = document.createElement('img');
                img.src = `./images/${el}.jpg`;
                img.width = '300';
                parentDiv.append(img);
                if (el >= 1) {
                    inpValue = inpValue - el;
                } else {
                    inpValue = (inpValue - el).toFixed(2);
                }
            }
            if (parentDiv.hasChildNodes()) {
                cover.append(parentDiv);
            }
        });
    }
    document.body.append(cover);
}




//6-ci ceht Leyla xanimin izahi
//money array-i yuxardi var
let convert3 = (inpValue) => {
    inpValue.value = +inpValue.value;
    let parentDiv = document.getElementById('forConvert3');
    parentDiv.innerHTML = '';
    money.map(el => {
        let count = parseInt(inpValue.value / el);
        if (count) {
            let convertImg = document.createElement('div');
            convertImg.classList.add('convertImg');
            for (let i = 0; i < count; i++) {
                let img = document.createElement('img');
                img.src = `./images/${el}.jpg`;
                img.width = '300';
                img.style.left = `${i * (-200)}px`;
                convertImg.append(img);
            }
            parentDiv.append(convertImg);
        }
        inpValue.value = (inpValue.value - el * count).toFixed(2);
    });
    inpValue.value='';
}


btn.addEventListener('click', () => {
    //convert(inp.value);
    //convert2(inp.value);
    convert3(inp);
});








