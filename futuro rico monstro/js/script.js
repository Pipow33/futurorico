var taxa = 0;

$(document).ready(function() {
    $("#calculate").click(function() {
        var ci = parseFloat($("#ci").val());
        var t = parseFloat($("#t").val());
        var taxap = 1.06;
        var taxatd = 1.1225;

        var totalp = ci * Math.pow(taxap, t);
        $("#p-totalp").text("Total Acumulado: R$" + totalp.toFixed(2)); 
        lucrop = totalp - ci;
        $("#p-lucrop").text("Lucro: R$" + lucrop.toFixed(2));
        var totaltd = ci * Math.pow(taxatd, t);
        $("#p-totaltd").text("Total Acumulado: R$"+ totaltd.toFixed(2));
        var lucrotd = totaltd - ci;
        $("#p-lucrotd").text("Lucro: R$" + lucrotd.toFixed(2))
            $("#resultado-p").click();
            $("#resultado-td").click();
            $('html, body').animate({
                scrollTop: $(".accordion-button.collapsed").offset().top
                }, 1000); // Ajuste a velocidade conforme necessário
        

    });
});