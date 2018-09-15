var drinks = [
    {
        name: "Ashima",
        stream: "Non-med"
    },
    {
        name: "Harnoor",
        stream: "Non-med"
    },
    {
        name: "Manas",
        stream: "Commerce"
    },
    {
        name: "Arisha",
        stream: "Medical"
    },
    {
        name: "Nitya",
        stream: "Commerce"
    },
    {
        name: "Mansher",    
        stream: "Medical"
    }
]
var original_array = rollnumbers.slice();

 function generateHTML(){
     elem = "";
     rollnumbers.forEach(function(v,i) {
        elem += `<div class="row">`;
        elem += `<div>${v.name}</div>`;
        elem += `<div>${v.stream}</div>`;
        elem += `</div>`;
     });
            fill.innerHTML = elem;
    }
    generateHTML();


    function firstfilter(event) {
        var b= event.target.value;
        rollnumbers = original_array.slice();
        rollnumbers = rollnumbers.filter(function(v){
            return (
                v.name.toLowerCase().includes(b.toLowerCase())
                ||
                v.stream.toLowerCase().includes(b.toLowerCase())
            );
        });
    
    generateHTML();
    }