/*  
==  ”Igual”, sempre dois para comparar valores;
a == b = true  - leia-se: Se a for igual ao b, recebe verdadeiro (true)
const a = 3 //(a recebe 3)
const b = 3 //(b recebe 3)
console.log(a == b); 


=== “Idêntico” sempre usar 3 sinais de =;   
a === b = true  → leia-se: Se a for idêntico ao b, recebe verdadeiro (true)
const a = 1
const b = 1
console.log(a === b);


!== Não Idêntico : é igual ao idêntico, mas com uma negação na frente;
a !== b = true  → leia-se: Se a não for idêntico ao b, recebe verdadeiro (true)
const a = 2
const b = 2
console.log(a !== b); 


!= Diferente: para ver se são diferentes;
a != b -> leia-se: Se a é diferente de b
const a = 4
const b = 4
console.log(a != b);

< Menor que : sinal de menor;
a < b = true  → leia-se: Se a for menor que b, recebe verdadeio (true) 
const a = 4
const b = 4
console.log(a < b); 

> Maior que : sinal de maior;
a > b = true  → leia-se: Se a for maior que b, recebe verdadeio (true)
const a = 4
const b = 4
console.log(a > b);

Nos dois casos acima < e > posso usar o sinal de maior ou igual ex:
a <= b -> Leia-se a é menor ou igual a b
ou
a >= b -> Leia-se a é maior ou igual a b

&& operador e (and);
para ser considerado verdade precisa as duas ter resposta de verdadeira, se uma delas
for falso, é considerado F.

const a = 2
const b = 2

console.log(a === b && a <= b) -> leia-se: Se a é idêntico a b, "e" se a é menor ou igual a b
Então nas duas perguntas vai dar verdadeiro: V e V = V "Ver tabela da verdade"

console.log(a === b && a < b) Leia-se: Se a é idêntico a b, "e" se a é maior que b
Aqui a primeira vai dar verdadeiro e na segunda vai dar falso: V e F = F

console.log(a > b && a === b) Leia-se: Se a é maior que b,"e" se a é idêntico a b
Aqui a primeira vai dar falso e a segunda verdadeiro: F e V = F

console.log(a > b && a < b) Leia-se: Se a é maior que b, "e" se a é menor que b
Aqui as duas vai dar falso: F e F = F

|| operador or (ou) 
No operador "ou" uma das opções deve dar verdadeiro, para ser considerada V

const a = 2
const b = 2

console.log(a === b || a <= b)
Aqui a primeira e a segunda verdadeiro: V ou V = V

console.log(a === b || a < b)
Aqui a primeira vai dar verdadeiro e a segunda vai dar falso,então como uma delas 
deu verdadeiro enãto: V ou F = V

console.log(a > b || a === b)
Aqui a primeira vai dar falso e a segunda vai dar verdadeiro,então como uma delas 
deu verdadeiro entâo: F ou V = V

console.log(a > b || a < b)
Aqui as duas vai dar falso, então como nenhuma é verdadeiro, então será falso 
deu verdadeiro entâo: F ou F = F

 !operador não (not)
 O operador not inverte a espressão, o que der veradeiro, ele muda pra falso, e vice-versa

console.log(!(a === b))
Aqui a resposta seria verdadeiro, mas como estou negando com o !, então agora ele vira falso.

console.log(!(a < b))
Aqui a resposta seria falso, mas como estou negando com o !, então agora ele vira verdadeiro.


*/