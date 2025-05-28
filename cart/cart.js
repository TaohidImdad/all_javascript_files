class Cart{
    constructor(name){
      this.name= name;
      if (!localStorage.getItem(this.name)) {
          localStorage.setItem(this.name, JSON.stringify([]));
      }
    }

  getItems(){
   let cartItems= JSON.parse(localStorage.getItem(this.name)) ;
   return cartItems;
  } 

   add(item){
    let cartItems= JSON.parse(localStorage.getItem(this.name));
    let itemExsits= cartItems.find(citem=> citem.id == item.id);
    if (itemExsits != undefined) {
        itemExsits.qty +=1;
    }else{
        cartItems.push(item);
    }
     localStorage.setItem(this.name, JSON.stringify(cartItems));
   }

   delItem(id){
    let cartItems= JSON.parse(localStorage.getItem(this.name));
    cartItems= cartItems.filter(citem=> citem.id != id);
    localStorage.setItem(this.name, JSON.stringify(cartItems))
    
   }

   delAll(){
    //  let cartItems= JSON.parse(localStorage.getItem(this.name));
    //  localStorage.setItem("clearedItems", JSON.stringify(cartItems))
     localStorage.removeItem(this.name);
     localStorage.setItem(this.name, JSON.stringify([]))
   }

   itemDec(id){
    let cartItems= JSON.parse(localStorage.getItem(this.name));
    let itemExsits= cartItems.find(citem=> citem.id == id);
    if (itemExsits != undefined) {
        if(itemExsits.qty > 1)
        itemExsits.qty -=1;
    }
    localStorage.setItem(this.name, JSON.stringify(cartItems))
   }
}