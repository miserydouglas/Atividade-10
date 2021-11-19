const antigo_head = document.querySelector('header')
antigo_head.id= 'head_id'
antigo_head.insertAdjacentHTML("afterbegin" , '<h1 class="h1_class">Este é o H1 do Header</h1>')


const main_perdido = document.querySelector('main')
const div_1 = document.createElement('div')
const div_2 = document.createElement('div')
const p_1 = document.createElement('p')
const h2_1 = document.createElement('h2')
const textp1 = document.createTextNode('Este é o "p" da div 1')
const texth21 = document.createTextNode('Este é o h2 da div1')
main_perdido.appendChild(div_1)
main_perdido.appendChild(div_2)


div_1.appendChild(h2_1)
div_1.id = 'div_1'
div_1.appendChild(p_1)
p_1.appendChild(textp1)
h2_1.appendChild(texth21)



const p_2 = document.createElement('p')
const h2_2 = document.createElement('h2')
const textp2 = document.createTextNode('Este é o "p" da div2')
const texth22 = document.createTextNode('Este é o h2 da div2')

div_2.appendChild(h2_2)
div_2.appendChild(p_2)
div_2.id = 'div_2'
p_2.appendChild(textp2)
h2_2.appendChild(texth22)




const footer_simples = document.querySelector('footer')
const textfooter = document.createTextNode('Exemplo de footer')
const  h1footer = document.createElement('h1')
footer_simples.appendChild(h1footer)
h1footer.appendChild(textfooter)
