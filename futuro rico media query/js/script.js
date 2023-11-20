var taxa = 0;

$(document).ready(function() {
    $("#calculate").click(function() {
        var ci = parseFloat($("#ci").val());
        var t = parseFloat($("#t").val());
        var taxap = 1.06;
        var taxatd = 1.1225;
        var taxacdi = 1.1215;
        var taxalca = 1.1094;

        var totalp = ci * Math.pow(taxap, t); // Valor inicial × (1,06)^tempo
        $("#p-totalp").text("Total Acumulado: R$" + totalp.toFixed(2)); 
        lucrop = totalp - ci;
        $("#p-lucrop").text("Lucro: R$" + lucrop.toFixed(2));
        var totaltd = ci * Math.pow(taxatd, t); // Valor inicial × (1,1225)^tempo
        $("#p-totaltd").text("Total Acumulado: R$"+ totaltd.toFixed(2));
        var lucrotd = totaltd - ci;
        $("#p-lucrotd").text("Lucro: R$" + lucrotd.toFixed(2))
        var totalcdi = ci * Math.pow(taxacdi, t); // Valor inicial × (1,1215)^tempo
        $("#p-totalcdi").text("Total Acumulado: R$"+ totalcdi.toFixed(2));
        var lucrocdi = totalcdi - ci;
        $("#p-lucrocdi").text("Lucro: R$" + lucrocdi.toFixed(2))
        var totallca = ci * Math.pow(taxalca, t); // Valor inicial × (1,1094)^tempo
        $("#p-totallca").text("Total Acumulado: R$"+ totallca.toFixed(2));
        var lucrolca = totallca - ci;
        $("#p-lucrolca").text("Lucro: R$" + lucrolca.toFixed(2))
            $("#resultado-p").click();
            $("#resultado-td").click();
            $("#resultado-cdi").click();
            $("#resultado-lca").click();
            $('html, body').animate({
                scrollTop: $(".accordion-button.collapsed").offset().top
                }, 1000); // Ajuste a velocidade conforme necessário
        
        

    });
});