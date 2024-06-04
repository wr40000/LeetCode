const input = {
  user_name: "John Doe",
  user_age: 30,
  user_address: {
    street_name: "123 Main St",
    postal_code: "12345",
  },
  order_history: [
    {
      order_id: 1,
      order_date: "2023-05-20",
      order_items: [
        { item_id: 101, item_name: "Widget" },
        { item_id: 102, item_name: "Gadget" },
      ],
    },
    {
      order_id: 2,
      order_date: "2023-05-21",
      order_items: [{ item_id: 103, item_name: "Thingamajig" }],
    },
  ],
};

function handleKey(key){
    if(key.includes('_')){
        return key.split('_').map((item, index) => {
            if(index === 0){
                return item
            }else{
                return item[0].toUpperCase() + item.slice(1)
            }
        }).join('')
    }else{
        return key    
    }
}

function handle(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => handle(item));
  } else {
    if(typeof obj === 'object' && obj !== null) {
      let newObj = {}
      Object.keys(obj).forEach(key => {
        let newKey = handleKey(key)
        newObj[newKey] = handle(obj[key])
      })
      return newObj
    }
  }
  return obj;
}
console.log(handle(input));