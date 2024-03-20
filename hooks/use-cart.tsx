import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartOrder, Product } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
  items:CartOrder[];
  addItem: (data:CartOrder) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  get: (id: string) => CartOrder | undefined;
  removeAll: () => void;
};

const useCart =create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data:CartOrder ) => {
        const currentItems: CartOrder[] = get().items;
        const existingItem: CartOrder | undefined = currentItems.find((item) => item.id === data.id);
       
        if (existingItem) {
          return toast.error("Item is already in cart.");
     } else {

      if (data.orderQuantity <= 0 || data.orderQuantity > data.stock) {
        return toast.error("Item quantity is invalid")
      }
        set({ items: [...currentItems, data] });
        toast.success("Item successfully added to cart");
        }
    },
    increaseQuantity: (id: string) => {
      
      set({
        items: get().items.map((item) =>
          item.id === id && Number(item.orderQuantity) < item.stock ? { ...item, orderQuantity: Number(item.orderQuantity) + 1 } : item
        ),
      });
    },
    decreaseQuantity: (id: string) => {
      set({
        items: get().items.map((item) =>
          item.id === id && Number(item.orderQuantity) > 1
            ? { ...item, orderQuantity: Number(item.orderQuantity) - 1 }
            : item
        ),
      });
    },
    removeItem: (id: string) => {
        set({items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from cart");
    },
    get: (id) => {
         return get().items.find((item) => item.id === id);
    },
    
        removeAll: () => set({items: []}),
}), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
}
));

export default useCart;