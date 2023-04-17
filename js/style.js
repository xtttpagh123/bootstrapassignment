// Providing behaviour to responsivenes humberger options
const hummberger=()=>{
    obj=document.getElementById("sidebar");
    currdiv=document.getElementById("hubberg");
    nextdiv=document.getElementById("sectionhum");
    if(obj.style.display=="block"){
        obj.style.display="none";
        currdiv.innerHTML='<span class="glyphicon glyphicon-th-list" style="font-size: 22px;"></span>';
        nextdiv.style.marginTop="0px";
    }
    else{
        obj.style.display="block";
        currdiv.innerHTML='<span class="glyphicon glyphicon-remove-circle" style="font-size: 25px;"></span>';
        nextdiv.style.marginTop="500px";
    }
}

// Displaying Charts on index.html
document.addEventListener("DOMContentLoaded", () => {
    new ApexCharts(document.querySelector("#reportsChart"),{
        series:[{
            name: '',
            data: [85, 88, 77, 70, 66, 72, 80, 85, 90, 84, 68, 56, 59, 75, 102, 79, 88, 88, 88, 88 , 88, 88, 88]
        }, 
        {
            name: '',
            data: [46, 62, 77, 80, 78, 83, 111, 122, 103, 84, 58, 56, 75, 100, 114, 118, 115, 88, 88, 88, 88, 88, 88]
        }
        ],
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: true
            },
        },
        markers: {
            size: 0
        },
        colors: ['#dbdbdb', '#435CFE'],
        fill:{
        
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width:  2
        },
        xaxis:{
            type: 'text',
            categories: ["0", "1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18", "19", "20", "21" ,"22" ]
        },
        tooltip:{
            x:{
                format: 'dd/MM/yy HH'
            },
        }
        }).render(document.getElementById("chart_js")); //Rendering chart into index.html
});

