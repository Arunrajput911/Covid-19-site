$(".container-third-content").accordion({
    collapisible:true,
    event:"mouseover",
    heightStyle: "auto",
    active:0,
    icons:{header:"ui-icon-plus", activeHeader:"ui-icon-minus"}
});


$("#click-btn").click(function(){
    $(".container-third-hide").css("display","block");
    $(".container-third-content").toggle();
});


init()

function init(){
        var url1="https://api.covid19api.com/summary"
        var active='';var recover='';var death='';
        $.get(url1,function(data1){
active=`<td>${data1.Countries[76]["TotalConfirmed"]}</td>`
recover=`<td>${data1.Countries[76]["TotalRecovered"]}</td>`
death=`<td>${data1.Countries[76]["TotalDeaths"]}</td>` 

$("#active").html(active);
$("#recover").html(recover);
$("#death").html(death);
        })

// statewise update
var url2="https://api.covid19india.org/data.json"
$.get(url2,function(data2){
    array=[12,32,16,13,21,25,4,9,26,22,11,19,8,1,27,36,31,30,17,18,6,33,2,14,23,5,20,7,3,15];
    var value='';
    console.log(data2.statewise[array[25]]);
    for(var i=0;i<30;i++){
        value=`<td>${data2.statewise[array[i]]["active"]}</td>
        <td>${data2.statewise[array[i]]["recovered"]}</td>
        <td>${data2.statewise[array[i]]["deaths"]}</td>`

        $("#state"+i).html(value);
    }
   
})

}

function Refresh(){
    clearData();
}
function clearData(){
    $("#active").empty();
    $("#recover").empty();
    $("#death").empty();
    for(var i=0;i<30;i++){
        $("#state"+i).empty();
    }
    
    init();
}

