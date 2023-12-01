var taxa = 0;
$(document).ready(function() {
    $("#calculate").click(function() {
        function formatarMoeda(numero) {
            return numero.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }

    var ci = parseFloat($("#ci").val());
    var t = parseFloat($("#t").val());
    var taxap = 1.06;
    var taxatd = 1.1225;
    var taxacdi = 1.1215;
    var taxalca = 1.1094;

    var totalp = ci * Math.pow(taxap, t);
    $("#p-totalp").text("Total Acumulado: " + formatarMoeda(totalp));

    var lucrop = totalp - ci;
    $("#p-lucrop").text("Lucro: " + formatarMoeda(lucrop));

    var totaltd = ci * Math.pow(taxatd, t);
    $("#p-totaltd").text("Total Acumulado: " + formatarMoeda(totaltd));

    var lucrotd = totaltd - ci;
    $("#p-lucrotd").text("Lucro: " + formatarMoeda(lucrotd));

    var totalcdi = ci * Math.pow(taxacdi, t);
    $("#p-totalcdi").text("Total Acumulado: " + formatarMoeda(totalcdi));

    var lucrocdi = totalcdi - ci;
    $("#p-lucrocdi").text("Lucro: " + formatarMoeda(lucrocdi));

    var totallca = ci * Math.pow(taxalca, t);
    $("#p-totallca").text("Total Acumulado: " + formatarMoeda(totallca));

    var lucrolca = totallca - ci;
    $("#p-lucrolca").text("Lucro: " + formatarMoeda(lucrolca));

    $("#resultado-p").toggleClass("accordion-collapse");
    $("#resultado-td").toggleClass("accordion-collapse");
    $("#resultado-cdi").toggleClass("accordion-collapse");
    $("#resultado-lca").toggleClass("accordion-collapse");
    $('html, resultado').animate({
            scrollTop: $("#resultado").offset().top
        }, 1000);
    });     
});