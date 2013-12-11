// JavaScript Document

var desktopVolume = {
    0: '<span class="violet-text" style="line-height: 2.5;">Ei soovi</span>',
    1: '<span class="violet-text">1M / 0,5M</span><br>alla / üles',
    2: '<span class="violet-text">10M / 5M</span><br>alla / üles',
    3: '<span class="violet-text">20M / 5M</span><br>alla / üles',
    4: '<span class="violet-text">30M / 10M</span><br>alla / üles',
    5: '<span class="violet-text">50M / 30M</span><br>alla / üles'
};

var desktopPrice = {
    0: "0",
    1: "25",
    2: "32",
    3: "45",
    4: "135",
    5: "300"
};

var phoneVolume = {
    0: '<span class="violet-text">Ei soovi</span>',
    1: '<span class="violet-text">60</span> minutit',
    2: '<span class="violet-text">120</span> minutit',
    3: '<span class="violet-text">240</span> minutit',
};

var phonePrice = {
    0: "0",
    1: "1.66",
    2: "2.99",
    3: "5.66",
};

var mobileVolume = {
    0: '<br /><span class="violet-text">Ei soovi</span>',
    1: '<span class="violet-text">1,5GB</span><br>3M alla /<br>1M üles',
    2: '<span class="violet-text">5GB</span><br>21,6M alla /<br>5,7M üles',
    3: '<span class="violet-text">10GB</span><br>50M alla /<br>5M üles',
    4: '<span class="violet-text">20GB</span><br>100M alla /<br>50M üles',
    5: '<span class="violet-text">25GB</span><br>100M alla /<br>50M üles',
};

var mobilePrice = {
    0: "0",
    1: "6.49",
    2: "9.95",
    3: "16.96",
    4: "29.95",
    5: "35.95"
};

var mobileAddedMin = {
    0: "0",
    1: "0",
    2: "0",
    3: "150",
    4: "300",
    5: "500"
};

var mobileAddedSms = {
    0: "0",
    1: "0",
    2: "0",
    3: "50",
    4: "100",
    5: "200"
};

var mobileVolumeVol = {

    0: '<span class="violet-text" id="minsum"></span> minutit<br><span class="violet-text" id="smssum"></span> sms-i',
    1: '<span class="violet-text" id="minsum"></span> minutit<br><span class="violet-text" id="smssum"></span> sms-i',
    2: '<span class="violet-text" id="minsum"></span> minutit<br><span class="violet-text" id="smssum"></span> sms-i',
};

var mobileVolumeVolSms = {

    0: "40",
    1: "90",
    2: "200"
};

var mobileVolumeVolMin = {

    0: "400",
    1: "900",
    2: "2000"
};

var mobilePriceVol = {

    0: "6",
    1: "12",
    2: "24",
};

var dongleVolume = {
    0: '<span class="violet-text">15GB</span><br>2,5M alla /<br>384K üles',
    1: '<span class="violet-text">15GB</span><br>5M alla /<br>1M üles',
    2: '<span class="violet-text">30GB</span><br>15M alla /<br>3M üles',
    3: '<span class="violet-text">30GB</span><br>50M alla /<br>25M üles',
    4: '<span class="violet-text">60GB</span><br>150M alla /<br>50M üles'
};

var donglePrice = {
    0: "7.45",
    1: "11.95",
    2: "15.95",
    3: "24.95",
    4: "50.00"
};

function ReplaceNumberWithCommas(yourNumber) {
    //Seperates the components of the number
    var n= yourNumber.toString().split(".");
    //Comma-fies the first part
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Combines the two sections
    return n.join(",");
}



var calculatePrice = function () {
    $("#js-price-desktop").val(desktopPrice[$("#js-slider-desktop").val()]);
    $("#js-volume-desktop").html(desktopVolume[$("#js-slider-desktop").val()]);

    $("#js-price-phone").val(phonePrice[$("#js-slider-phone").val()]);
    $("#js-volume-phone").html(phoneVolume[$("#js-slider-phone").val()]);

    $("#js-price-mobile").val(mobilePrice[$("#js-slider-mobile").val()]);
    $("#js-volume-mobile").html(mobileVolume[$("#js-slider-mobile").val()]);
    $("#js-volume-mobile-minutes").val(mobileAddedMin[$("#js-slider-mobile").val()]);
    $("#js-volume-mobile-sms").val(mobileAddedSms[$("#js-slider-mobile").val()]);

    $("#js-price-mobile-vol").val(mobilePriceVol[$("#js-slider-mobile-vol").val()]);
    $("#js-volume-mobile-vol").html(mobileVolumeVol[$("#js-slider-mobile-vol").val()]);
    // $("#js-volume-mobile-vol").html(mobileVolumeVol[$("#js-slider-mobile-vol").val()]);

    // $(function() {
    // var x = $("#js-slider-mobile-vol").slider();
    // $("#js-slider-mobile").slide(function() {
    //     x.slider('setValue', 2);
    //     });
    // });

    $("#js-volume-mobile-sms-val").val(mobileVolumeVolSms[$("#js-slider-mobile-vol").val()]);
    $("#js-volume-mobile-min-val").val(mobileVolumeVolMin[$("#js-slider-mobile-vol").val()]);

    $("#js-price-dongle").val(donglePrice[$("#js-slider-dongle").val()]);
    $("#js-volume-dongle").html(dongleVolume[$("#js-slider-dongle").val()]);

    var desktop = parseFloat($("#js-price-desktop").val());
    var phonecount = parseFloat($("#js-counted-phone").val());
    var phone = parseFloat($("#js-price-phone").val());
    var mobilecount = parseFloat($("#js-counted-mobile").val());
    var mobile = parseFloat($("#js-price-mobile").val());
    var mobilevol = parseFloat($("#js-price-mobile-vol").val());
    var donglecount = parseFloat($("#js-counted-dongle").val());
    var dongle = parseFloat($("#js-price-dongle").val());

    if (desktop > 0 && phonecount > 0) {
        var phonecountsum = (phonecount * 4.15) - 4.15;
    }

    else {
        var phonecountsum = phonecount * 4.15;
    }

    var phonesum = ( phonecount * phone ) + phonecountsum;
    var mobilesum = mobilecount * (mobile + mobilevol);
    var donglesum = donglecount * dongle;
    

    var counted =  desktop + phonesum + mobilesum + donglesum;

    var countedround = counted.toFixed(2);
    var comnum = ReplaceNumberWithCommas(countedround);
    $("#js-sum").html(comnum);


    var summedsms = parseFloat($("#js-volume-mobile-sms").val());
    var summedsmsval = parseFloat($("#js-volume-mobile-sms-val").val());
    var smssum = summedsms + summedsmsval;
    $('#smssum').html(smssum);

    var summedmin = parseFloat($("#js-volume-mobile-minutes").val());
    var summedminval = parseFloat($("#js-volume-mobile-min-val").val());
    var minsum = summedmin + summedminval;
    $('#minsum').html(minsum);


// Fill the form //

    $("#js-volume-desktopStripped").val($("#js-volume-desktop").text());

    $("#js-phoneamount").html($("#js-counted-phone").val());
    $("#js-volume-phoneStripped").val($("#js-volume-phone").text());
    $("#js-counted-phonePrice").val((phonecountsum).toFixed(2));
    $("#js-counted-phoneSum").val((phonesum).toFixed(2));

    $("#js-mobileamount").html($("#js-counted-mobile").val());
    $('#js-mobilesum').val((mobilesum).toFixed(2));

    $("#js-dongleamount").html($("#js-counted-dongle").val());
    $("#js-volume-dongleStripped").val($("#js-volume-dongle").text());
    $('#js-donglesum').val((donglesum).toFixed(2));
    $("#js-yourmail").html($("#js-email").val());

};

// count on -+

    var addDongle = function () {
        var countD = $("#js-counted-dongle").val();
            countD++;
        
        $("#js-counted-dongle").val(countD);
        calculatePrice();
    };

    var removeDongle = function () {
        var countD = $("#js-counted-dongle").val();
        if (countD > 0)
            countD--;

        $("#js-counted-dongle").val(countD);
        calculatePrice();
    };

    var addMobile = function () {
        var countM = $("#js-counted-mobile").val();
            countM++;
        $("#js-counted-mobile").val(countM);

        calculatePrice();
    };

    var removeMobile = function () {
        var countM = $("#js-counted-mobile").val();
        if (countM > 0)
            countM--;
        $("#js-counted-mobile").val(countM);
        calculatePrice();
    };

    var addPhone = function () {
        var countP = $("#js-counted-phone").val();
            countP++;
        $("#js-counted-phone").val(countP);
        calculatePrice();
    };

    var removePhone = function () {
        var countP = $("#js-counted-phone").val();
        if (countP > 0)
            countP--;
        $("#js-counted-phone").val(countP);
        calculatePrice();
    };

// add one to count when slided

    function addOnePhone() {
        if ($("#js-slider-phone").val() > 0) {
            $("#js-counted-phone").val(1);
            window.addOneMobile = function (){};
        }
    }

    function addOneMobile() {
        if ($("#js-slider-mobile").val() > 0) {
            $("#js-counted-mobile").val(1);
            window.addOneMobile = function (){};
        }
    }

    function addOneMobileVol() {
        if (($("#js-slider-mobile-vol").val() > 0) && ($("#js-slider-mobile").val() === 0)) {
            $("#js-counted-mobile").val(1);
            window.addOneMobileVol = function (){};
        }
    }

    function addOneDongle() {
        if ($("#js-slider-dongle").val() > 0) {
            $("#js-counted-dongle").val(1);
            window.addOneDongle = function (){};
        }
    }

$(document).ready( function() {

    $("#js-slider-desktop").slider()
    .on('slide', function(ev){
        calculatePrice();
    });

    $("#js-slider-phone").slider()
    .on('slide', function(ev){
        addOnePhone();
        calculatePrice();
    });

    
    $("#js-slider-mobile").slider()
    .on('slide', function(ev){
        addOneMobile();
        calculatePrice();
    });

    $("#js-slider-mobile-vol").slider()
    .on('slide', function(ev){
        addOneMobileVol();
        calculatePrice();
    });

    $("#js-slider-dongle").slider()
    .on('slide', function(ev){
        addOneDongle();
        calculatePrice();
    });


    $("#js-price-desktop").val("0");

    $("#js-counted-phone").val("0");
    $("#js-price-phone").val("0");

    $("#js-counted-mobile").val("0");
    $("#js-price-mobile").val("0");
    $("#js-price-mobile-vol").val("0");

    $("#js-volume-mobile-minutes").val("0");
    $("#js-volume-mobile-min-val").val("0");
    $("#js-volume-mobile-sms").val("0");
    $("#js-volume-mobile-sms-val").val("0");

    $("#js-counted-dongle").val("0");
    $("#js-price-dongle").val("0");

    calculatePrice();
});


$("#js-confirm-calc").click(function(){
    $("#js-calcwrapper").slideUp('slow');
    $("#js-contactwrapper").show();
});

$("#js-back").click(function(){
    $("#js-contactwrapper").hide();
    $("#js-calcwrapper").show();
});


$("#js-sendIt").click(function(){
    // Check for required 
    var empt = $(".form-group :input").val();
    if (empt ==="") {
        $(".form-group").addClass("has-error");
        $(".alert-danger").slideDown("fast");
        return false;
    }
    else {
        $(".alert-danger").slideUp("fast");
        $(".form-group").removeClass("has-error");
    }

    // var url = "path/to/script";

    $.ajax({
           type: "POST",
           // url: url,
           data: $("#theData").serialize(),
           success: function(data) {
                $("#js-contactwrapper").slideUp('slow');
                $("#js-thankswrapper").show();
           }
         });
    console.log($("#theData").serialize());
    return false;
});






