export function calculateTotal (items, tax) {
  
  //throw error if tax greater than 1
  if(tax > 1){
    throw new Error("Tax should not be greater than 1");
  }

  tax = Math.abs(tax);

  let total = 0;

  items.forEach(item => {

    if(item.taxable){
    total = total + (item.price * tax); 
    }

    total = total + item.price; 

  })

  return total;  

}

  

