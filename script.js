var i = 0;

$(document).ready(function() {
    $('#taxa').prop('readonly', true);
    $("#tipo-investimento").on("change", function() {
    const selectedOption = $(this).val();
    if (selectedOption === "TESOURO-DIRETO"){
        if (tempo <=3){
            i = 0.1074;  // 10,9% ao ano tesouro prefixado 2027
        }
            else{
                i = 0.1135; // 11,35% ao ano tesouro prefixado 2029
            }  
    }      
        else {
            if (selectedOption === "LCI") {
                i = 0.20;
            }
                else{ 
                    if (selectedOption === "LCA") {
                        i = 0.30;
                } 
                    else {
                    i = 0.40;
                    }
        }
    }
    });

    $("#botao-calcular").click(function() {
        var capital_inicial = parseFloat($("#capital-inicial").val());
        var tempo = parseFloat($("#tempo").val());
        var montante = capital_inicial * Math.pow(1 + i, tempo);
        $("#resultado").text("Total Acumulado: " + montante.toFixed(2));

    });
});