


export function cartReducer(cart = {}, action) {
    let { type } = action;
    switch (type) {
        case 'BUY': {
            let { item, qty } = action
            let { id } = item;
            let cartLine = cart[id];
            if (!cartLine) {
                cartLine = { item, qty: 1 }
            } else {
                cartLine = { item, qty: cartLine.qty + qty }
            }
            return { ...cart, [id]: cartLine }
        }
        default: return cart;
    }

}