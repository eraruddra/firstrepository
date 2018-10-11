    var persons = [
    {
        name: 'Varun',
        email:'Varun@gmail.cam',
        age: 28,
        gender: 'Male',
        active: 1
    },
    {
        name: 'Kushal',
        email:'Kushal@gmail.cim',
        age: 20,
        gender: 'Male',
        active: 0
    },
    {
        name: 'Era',
        email:'Era@gmail.cum',
        age: 17,
        gender: 'Female',
        active: 0
    },
    {
        name: 'Gurjit',
        email:'Gurjit@gmail.crm',
        age: 20,
        gender: 'Female',
        active: 1
    },
    {
        name: 'Megha',
        email:'Megha@gmail.com',
        age: 20,
        gender: 'Female',
        active: 0
    },
    {
        name: 'Saatvik',
        email:'Saatvik@gmail.com',
        age: 20,
        gender: 'Male',
        active: 1
    }, {
        name: 'Jorav',
        email:'Jorav@gmail.com',
        age: 20,
        gender: 'Male',
        active: 0
    }, {
        name: 'Tahir Bhai',
        email: 'Tahirbhai@gmail.com',
        age: 20,
        gender: 'Male',
        active: 1
    },
    {
        name: 'Param Seith',
        email: 'paramseith@gmail.com',
        age: 20,
        gender: 'Male',
        active: 0
    }
];

var original_array = persons.slice();

function generateHTML(){
    var elem = "";
    persons.forEach(function (v, i) {
        elem += `<div class="row">`;
        elem += `<div>${v.name}</div>`;
        elem += `<div>${v.email}</div>`;
        elem += `<div>${v.age}</div>`;
        elem += `<div>${v.gender}</div>`;
        elem += `<div>${v.active == 1 ? 'Active': 'Not Active'}</div>`;
        elem += `</div>`;
    });
    fill.innerHTML = elem;
}

generateHTML();

function filterPerson(event){
    var vl = event.target.value;
    persons = original_array.slice();
    persons = persons.filter(function(v){
    return (
            v.name.toLowerCase().includes(vl.toLowerCase()) 
            || 
            v.email.toLowerCase().includes(vl.toLowerCase())
            ||
            v.age == (+vl)
    );
    });
    generateHTML();
}

function filterGender(num){
    persons = original_array.slice();        
    if(num != 0){
        persons = persons.filter(function (v) {
            return (
                v.gender == (num == 1 ? "Male" : "Female")
            );
        });
    }
    generateHTML();
}
