import { addProductToBasket, removeProductFromBasket } from '../actions'

describe('actions', () => {
    it('should create an action to add a product into basket', () => {        
        const productId = 0;
        const count = 1;
        const expectedAction = {
            type: 'ADD_PRODUCT_TO_BASKET',
            productId,
            count
        }
        expect(addProductToBasket(productId, count)).toEqual(expectedAction)
    });
    
    it('should create an action to remove a product from basket', () => {        
        const productId = 0;
        const count = 1;
        const expectedAction = {
            type: 'REMOVE_PRODUCT_FROM_BASKET',
            productId,
            count
        }
        expect(removeProductFromBasket(productId, count)).toEqual(expectedAction)
    });    
})