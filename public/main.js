$(document).ready(function(){

// Cooler Variables
var addCooler = $('#add-cooler');
var remCooler = $('#remove-cooler');
// Tire Variables
var addTire = $('#add-tire');
var remTire = $('#remove-tire');
// Water Variables
var addWater = $('#add-water');
var remWater = $('#remove-water');
// Jerky Variables
var addJerky = $('#add-jerky');
var remJerky = $('#remove-jerky');

// Counter Variables
var total_cost = 0;
var total_weight = 0;



// Button Function
var btnTotals = function () {
    var button = $('#cargo_btn');
    var finalCost = Number($('#cost-count').text());
    var finalWeight = Number($('#weight-count').text());
    console.log("cost: " + finalCost);
    console.log("weight: " + finalWeight);

            if (finalCost > Number(200)) {
                alert("You don't have enough money for all this!");
                button.removeClass('btn-success');
                button.addClass('disabled');
                button.addClass('btn-danger');
            } else {
                button.removeClass('btn-danger');
                button.removeClass('disabled');
                button.addClass('btn-success');
            }
            if (finalWeight > Number(200)) {
                alert("Your car can't handle the weight!");
                button.removeClass('btn-success');
                button.addClass('disabled');
                button.addClass('btn-danger');
            } else {
                button.removeClass('btn-danger');
                button.removeClass('disabled');
                button.addClass('btn-success');
            }
            if (finalWeight && finalCost < Number(-1)){
                alert("Negative Money ain't no thing here!");
                button.removeClass('btn-success');
                button.addClass('disabled');
                button.addClass('btn-danger');
            }
};

    $('#cargo_btn').on('click', function(event){
        console.log('clicked');
        event.preventDefault();
        $.post('/validate-cargo', {total_cost, total_weight}, function(data){
            console.log(data.message);
            $('#cargo_btn').html(data.message);
            $('#startTrip_btn').removeClass('hidden');
        });
    });



// ADD/REMOVE COOLER -------
addCooler.click(function (event){
    event.preventDefault();
    total_cost = Number(total_cost + 100) + Number($(this).val());
    $('#cost-count').text(total_cost);
    total_weight = Number(total_weight + 50) + Number($(this).val());
    $('#weight-count').text(total_weight);
    btnTotals();
});

remCooler.click(function(event){
    event.preventDefault();
    total_cost = Number(total_cost - 100) + Number($(this).val());
    $('#cost-count').text(total_cost);
    total_weight = Number(total_weight - 50) + Number($(this).val());
    $('#weight-count').text(total_weight);
    btnTotals();
});

// ADD/REMOVE TIRE ------------
addTire.click(function (event){
    event.preventDefault();
    total_cost = Number(total_cost + 150) + Number($(this).val());
    $('#cost-count').text(total_cost);
    total_weight = Number(total_weight + 180) + Number($(this).val());
    $('#weight-count').text(total_weight);
    btnTotals();
});

remTire.click(function(event){
    event.preventDefault();
    total_cost = Number(total_cost - 150) + Number($(this).val());
    $('#cost-count').text(total_cost);
    total_weight = Number(total_weight - 180) + Number($(this).val());
    $('#weight-count').text(total_weight);
    btnTotals();
});

// ADD/REMOVE WATER -----------
addWater.click(function (event){
    event.preventDefault();
    total_cost = Number(total_cost + 10) + Number($(this).val());
    $('#cost-count').text(total_cost);
    total_weight = Number(total_weight + 10) + Number($(this).val());
    $('#weight-count').text(total_weight);
    btnTotals();
});

remWater.click(function(event){
    event.preventDefault();
    total_cost = Number(total_cost - 10) + Number($(this).val());
    $('#cost-count').text(total_cost);
    total_weight = Number(total_weight - 10) + Number($(this).val());
    $('#weight-count').text(total_weight);
    btnTotals();
});

//ADD/REMOVE JERKY -----------
addJerky.click(function (event){
    event.preventDefault();
    total_cost = Number(total_cost + 5) + Number($(this).val());
    $('#cost-count').text(total_cost);
    total_weight = Number(total_weight + 1) + Number($(this).val());
    $('#weight-count').text(total_weight);
    btnTotals();
});

remJerky.click(function(event){
    event.preventDefault();
    total_cost = Number(total_cost - 5) + Number($(this).val());
    $('#cost-count').text(total_cost);
    total_weight = Number(total_weight - 1) + Number($(this).val());
    $('#weight-count').text(total_weight);
    btnTotals();
});

// console.log(total_cost);

}); // end of document.ready
