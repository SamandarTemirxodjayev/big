import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  actions: {
    clearCart(){
      this.items.splice(0,this.items.length)
    },
    
    getCounter(){
        return this.items;
    },
    getCount(){
        return this.items.length;
    },
    addToCart(item) {
      const existingItem = this.items.find((i) => i._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart(index) {
      this.items.splice(index, 1);
    },
    deleteFromCart(item) {
        const existProduct = this.items.find(i => i._id == item._id);
        if(existProduct){
            existProduct.quantity--;
            if(existProduct.quantity == 0){
                const index = this.items.indexOf(existProduct);
                this.items.splice(index, 1);
            }
        } else {
        }
      },
      reset(item) {
        const existProduct = this.items.find((i) => i._id === item._id);
        if (existProduct) {
          const index = this.items.indexOf(existProduct);
          this.items.splice(index, 1);
        }
      },

      clearProduct(item){
        const existProduct = this.items.find(i => i._id == item._id);
        if(existProduct){
            const index = this.items.indexOf(existProduct);
            this.items.splice(index, 1)
        }
      },
    totalItems(){
      return this.items;
    },
    
  },
  
  persist: {
    storage: persistedState.localStorage,
  },
});