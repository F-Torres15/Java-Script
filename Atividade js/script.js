document.write
    (" ----- Seja bem vindo a Burguer House  ----- <br><br><br> </t>|||| CARDÁPIO|||| <br><br><br> 1-X-Burguer :2 Blends 100g ,2 fatias de queijo, cebola,tomate e alface. <br> R$:10,00<br><br> 2-X-Salada : Blend 100g,1 fatia de queijo,alface,tomate,cebola,picles. <br> R$: 9,00<br><br> 3-X-Bacon : Blend 100g, 4 fatias de bacon,2 fatias de queijo,alface e tomate.<br> R$:15,00"

    )


function pedido() {
    let escolha
    escolha = Number(prompt(`Digite o numero relacionado ao pedido 1: X-Burguer 2: X-Salada 3: X-Bacon`))

    switch (escolha) {
        case 1:
            confirmacao = confirm("Seu pedido: X-Burguer  Preço: R$10,00. Confirma seu pedido?")
            if (confirmacao) {
                document.write("Seu pedido foi X-Burguer <br> Preço: R$10,00 <br> Forma de Pagamento: Pix <br><br>Obrigado pela preferência!!! <br> Bom apetite!")
            }
            else {
                document.write("Seu pedido foi cancelado.")
    
            }
            break
        case 2:
            confirmacao = confirm("Seu pedido: X-Salada Preço: R$9,00. Confirma seu pedido?")
            if (confirmacao) {
                document.write("Seu Pedido: X-Salada <br>Preço: R$:9,00 <br> Forma de pagamento: Pix <br><br> Obrigado pela prefrência!! <br> Bom apetite!!")
            }
            else {
                document.write("Seu pedido foi cancelado.")

            }
            break
        case 3:
            confirmacao = confirm("Seu pedido: X-Bacon Preço: R$15,00. Confirma seu pedido?")
            if (confirmacao) {
                document.write("Seu Pedido: X-Bacon <br>Preço: R$:15,00 <br> Fomra de pagamento: Pix <br> Obrigado pela preferência!! <br> Bom apetite!!")

            }
            else {
                document.write("Seu pedido foi cancelado.")

            }

    }
}


