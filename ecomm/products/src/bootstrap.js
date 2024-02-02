
import { faker } from '@faker-js/faker'


const mount=(el)=>
{
  let products = ''
  for (let i = 0; i < 5; i++) {
    //   console.log(faker.internet.userName());
    const name = faker.internet.userName()
    products += `<div>${name}</div>`
  }
el.innerHTML = products
}

if(process.env.NODE_ENV==='development')
{
 const el= document.querySelector('#dev-products');
 
 if(el){
  mount(el)
 } 
}
export{mount}