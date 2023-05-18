var matriz = new Array();
var matriz2 = new Array();
var numcoluna = 3;
var numlinha = 3;
mrs= [];
mrm= [];

for (j = 0; j < numlinha; j++) {    //criando a matriz
    matriz.push([]);


    for (x = 0; x < numcoluna; x++) {
        matriz[j][x] = parseInt(prompt("digite um numero para " + j + "posição " + x));  //criando a matriz
    }
}
for (j = 0; j < numlinha; j++) {  //criando a matriz
    matriz2.push([]);


    for (x = 0; x < numcoluna; x++) {
        matriz2[j][x] = parseInt(prompt("digite um numero para " + j + "posição " + x));  //criando a matriz
    }
}
document.write("<h2>Trabalho de Matrizes- Alexia Daniela Reik Segundo ano de Info IFRS Matérias: Matemática e Desenvolvimento Web 2</h2>");
document.write("<br>");
document.write("<h3>Primeira matriz</h3>");
document.write("<table border=1>");
for (i = 0; i < matriz.length; i++) {  //escrevendo a tabela1
    var linha = '<tr>';
    for (x = 0; x < matriz[i].length; x++) {
        linha = linha + "<td>" + matriz[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");
document.write("<br>");
document.write("<br>");
document.write("<h3>Segunda matriz</h3>");

document.write("<table border=1>");
for (i = 0; i < matriz2.length; i++) { //escrevendo a tabela2
    var linha = '<tr>';
    for (x = 0; x < matriz2[i].length; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

for (j = 0; j < numlinha; j++) {   // metodo para fazer a soma
    mrs.push([]);
    for (x = 0; x < numcoluna; x++) {
        mrs[j][x] = matriz[j][x] + matriz2[j][x];
    }
}
document.write("<br>");
document.write("<h3>Somando as Matrizes</h3>");
document.write("<table border=1>"); //metodo para escrever a soma
for (i = 0; i < mrs.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < mrs[i].length; x++) {
        linha = linha + "<td>" + mrs[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

for (z=0; z< numlinha; z++) {   // metodo para multiplicar
    mrm.push([]);
    for (x =0; x < numcoluna; x++) {
        mrm[z][x] = 0;
    for (j =0; j < numlinha; j++) {
        mrm[z][x] += matriz[z][j] * matriz2[j][x];
    }
}
}
document.write("<br>");
document.write("<h3>Multiplicação das Matrizes</h3>");
document.write("<table border=1>");   //metodo para escrever
for (i = 0; i < mrm.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < mrm[i].length; x++) {
        linha = linha + "<td>" + mrm[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");