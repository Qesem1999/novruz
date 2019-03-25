"use strict"

let studentArray = [];
let roomArray = [];
let groupArray = []

let wrapper = document.querySelector('.personlist');
let wrapper1 = document.querySelector('.roomlist');
let wrapper2 = document.querySelector('.grouplist')

let countstudent = document.querySelector('#numberofstudent');
let countteacher = document.querySelector('#numberofteacher');
let countgroup = document.querySelector('#numberofgroup');
let countroom = document.querySelector('#numberofroom');

function student(ad, soyad, email, kuce, seher, olke){
    this.name = ad;
    this.surname = soyad;
    this.email = email;
    this.street = kuce;
    this.city = seher;
    this.country = olke;
}

function room(ad, tutum){
    this.name = ad;
    this.capacity = tutum;
}

function group(ad, otaq){
    this.name = ad;
    this.room = otaq;
}





function savestudent(){
    
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;
    let street = document.querySelector('#street').value;
    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country').value;

    let newStudent = new student(name, surname, email, street, city, country);
    studentArray.push(newStudent);
    displayList();
    displayCount(studentArray,countstudent);
    
}
function displayList(){
    let list = "<ol class='list-group'>"

    for(let i = 0; i < studentArray.length; i++){
        list += "<li class='list-group-item'>" + [i+1] +' '+ studentArray[i].name + ' ' + studentArray[i].surname +
        ' - ' + studentArray[i].street + ' ' + studentArray[i].city
        + ' ' + studentArray[i].country + "</li>"
    }

    list += "</ol>"
    wrapper.innerHTML = list;
}





function saveroom(){
    
    let name = document.querySelector('#roomname').value;
    let capacity = document.querySelector('#capacity').value;
    

    let newRoom = new room(name, capacity);
    roomArray.push(newRoom);
    displayroomList();
    displayCount(roomArray,countroom);
    
}

function displayroomList(){
    let list = "<ol class='list-group '>"

    for(let i = 0; i < roomArray.length; i++){
        list += "<li class='list-group-item'>" + [i+1] + '.' +' '+ roomArray[i].name + ' - ' + roomArray[i].capacity 
         + "</li>"
    }

    list += "</ol>"
    wrapper1.innerHTML = list;
}





function savegroup(){
    
    let name = document.querySelector('#groupname').value;
    let selectroom = document.querySelector('#selectroom').value;
   
  
    

    let newGroup = new group(name, selectroom);
    groupArray.push(newGroup);
    displaygroupList();
    displayCount(groupArray,countgroup);
    
}

function displaygroupList(){
    let list = "<ol class='list-group '>"

    for(let i = 0; i < groupArray.length; i++){
        list += "<li class='list-group-item'>" + [i+1] + '.' +' '+ groupArray[i].name + ' - '
         + groupArray[i].room  
         + "</li>"
    }

    list += "</ol>"
    wrapper2.innerHTML = list;
}

let teacherArray =  [];

let wrapper3 = document.querySelector('.teacherlist');

function teacher(ad, soyad, email, qrup){
    this.name = ad;
    this.surname = soyad;
    this.email = email;
    this.group = qrup;
}

function saveTeacher(){
    let teachername = document.querySelector('#nameteacher').value;
    let teachersurname = document.querySelector('#surnameteacher').value;
    let teacheremail = document.querySelector('#emailteacher').value;
    let teachergroup = document.querySelector('#selectteacher').value;

    let newTeacher = new teacher(teachername, teachersurname, teacheremail, teachergroup);
    teacherArray.push(newTeacher);

    displayteacherList()
    displayCount(teacherArray,countteacher);
}

function displayteacherList(){
    let list = "<div class='border rounded px-1'>"
    for(let i=0; i<teacherArray.length; i++){
        list += "<p>" + [i+1] + ' . ' + teacherArray[i].name +
        ' ' + teacherArray[i].surname + ' - ' + teacherArray[i].email
        + "</p>" + "<p>" + "Group" + "</p>" + "<ol class='list-group '>" + "<li class='list-group-item'>"
        + teacherArray[i].group + " " + " <a class='badge badge-primary'>" +
        "16" + "</a>" + "</li>" + "</ol>" 

    }
    list += "</div";
    wrapper3.innerHTML = list;
}



function displayCount(array , reference){
    reference.innerText = array.length;
}


