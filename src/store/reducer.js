import * as actionType from './action';

const initialState ={
    ingredient :{
        salad:0,
        thinPatty:0,
        cheese:0,
        thickPatty:0
    },
    totlePrice : 20
};

const INGREDIENT_PRICE = {
    salad: 3,
    thinPatty: 10,
    thickPatty: 15,
    cheese: 7
}

const reducer =  (state=initialState,action)=>{
        switch(action.type)
        {
            case actionType.ADD_INGREDIENT:
                return{
                    ...state,
                    ingredient:{
                        ...state.ingredient,
                        [action.ingredientName]:state.ingredient[action.ingredientName]+1
                    },
                    totlePrice: state.totlePrice + INGREDIENT_PRICE[action.ingredientName]

                };
            case actionType.REMOVE_INGREDIENT:
                return{
                    ...state,
                    ingredient:{
                        ...state.ingredient,
                        [action.ingredientName]:state.ingredient[action.ingredientName]-1
                    },
                    totlePrice: state.totlePrice - INGREDIENT_PRICE[action.ingredientName]
                };
        }
        return state;
        
};

export default reducer;