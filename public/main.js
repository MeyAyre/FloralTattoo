$(document).ready(function() {
    function changeOnTime(){
        var timeObj = new Date();
        var curTime = timeObj.getHours();
        if (curTime % 2 === 0){
            $('#endcap').text("04:20");
        }
        else{
            $('#endcap').text("06:09");
        }
    }
    changeOnTime(); 
});
