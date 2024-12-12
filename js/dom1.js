/* console.log('Hello form dom');
console.log(document);
console.log(document.body);
console.log(document.getElementsByTagName('h1')); */

/* const student = {
    name: 'John',
    ID: 12,
    study: function (time) {
        console.log(time, 'It is time to study');
    }
}

student.study('5pm'); */

/* const liCollection = document.getElementsByTagName('li');
for(const li of liCollection){
    console.log(li);
    console.log(li.innerText);
}
 */

const heading = document.getElementById('heading1');
heading1.style.textAlign = 'center';
heading.style.backgroundColor = 'blue';

document.getElementById('dom_list').style.color = 'red';

const someLi = document.querySelectorAll('.dom-container li');
console.log(someLi);


const singleli = document.querySelector('.dom-container li').innerText;

first = document.getElementsByClassName('dom-container')[0].innerHTML;
console.log(first);