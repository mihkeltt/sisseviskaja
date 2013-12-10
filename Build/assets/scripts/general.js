// JavaScript Document

function ReplaceNumberWithCommas(yourNumber) {
    //Seperates the components of the number
    var n= yourNumber.toString().split(".");
    //Comma-fies the first part
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Combines the two sections
    return n.join(",");
}

var count = 1;

var desktopVolume = {
    0: "Ei soovi",
    1: "2,5M/384kbit",
    2: "5M/1M",
    3: "15M/3M",
    4: "50M/25M",
    5: "150M/50M"
};

var desktopPrice = {
    0: "0",
    1: "7.45",
    2: "11.95",
    3: "15.95",
    4: "24.95",
    5: "50.00"
};

var phoneVolume = {
    0: "Ei soovi",
    1: "60 minutit",
    2: "120 minutit",
    3: "240 minutit",
};

var phonePrice = {
    0: "0",
    1: "1.66",
    2: "2.99",
    3: "5.66",
};

var a = {
    0: "None",
    1: "You Supply",
    2: "We Create",
};

var c = {
    0: "0",
    1: "150",
    2: "750",
};


$(document).ready( function() {

    $("#total").val("0");
    $("#amount").html("Vali internetikiirus");
    $("#amount-phone").html("Lauatelefoni kõnemaht");
    $("#amountc").val("Time?");
    $("#amountd").val("Extras?");


    $("#desktop-slider").slider({
        animate: true,
        value: "1",
        min: 0,
        max: 5,
        step: 1,
        slide: function(event, ui) {

            $("#price").html(desktopPrice[ui.value]);
            $("#amount").html(desktopVolume[ui.value]);
            var a = $("#price").html();
            var b = $("#price-phone").html();

            // var ccc = $("#pricec").html();
            // var ddd = $("#priced").html();
            var cc = $("#counted").html();
            var counted = + a + (+ b * cc );
            var countedround = counted.toFixed(2)
            var comnum = ReplaceNumberWithCommas(countedround);
            $("#total").html(comnum );

        }
        
    });

  $("#oneup").click(function() {
    count++;
    $("#counted").html(count);
  });


   $("#onedown").click(function() {
    if (count > 0) 
    count--;
    $("#counted").html(count);
  }); 
    


    $("#phone-slider").slider({
        animate: true,
        value: "0",
        min: 0,
        max: 3,
        step: 1,
        slide: function(event, ui) {
            $("#price-phone").html(phonePrice[ui.value]);
            $("#amount-phone").html(phoneVolume[ui.value]);
            var a = $("#price").html();
            var b = $("#price-phone").html();
            // var bnum = parseFloat(bbb.replace(/[^\d\.]/,""));
            // var ccc = $("#pricec").html();
            var cc = $("#counted").html();

            var counted = + a + (+ b * cc );
            var countedround = counted.toFixed(2);
            var comnum = ReplaceNumberWithCommas(countedround);
            $("#total .blue-text").html(comnum + " € / kuus");
        }
    });



        // $("#sliderc").slider({
        //     value: "0",
        //     min: 0,
        //     max: 2,
        //     step: 1,
        //     slide: function(event, ui) {
        //         $("#pricec").val(c[ui.value]);
        //         $("#amountc").val(a[ui.value]);
        //         var aaa = $("#price").val();
        //         var bbb = $("#price-phone").val();
        //         var ccc = $("#pricec").val();
        //         var ddd = $("#priced").val();
        //         var eee = $("#pricee").val();
        //         var fff = $("#pricef").val();
        //         $("#total").val(+aaa + +bbb + +ccc + +ddd);
        //     }
        // });


       
        // $("#foo").val('$' + $("#slider").slider("value"));
        // $("#price-phone").val('$' + $("#slider").slider("value"));
        // $("#pricec").val('$' + $("#slider").slider("value"));


        // $("#price").val("0");
        // $("#priceb").val("0");
        // $("#pricec").val("0");





});

