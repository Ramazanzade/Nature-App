import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
    {
        id: 1,
        name: 'Peperomia',
        category: "Top picks",
        price: 24.50,
        title: 'Lorem ipsum dolor sit amet.',
        imge: require('../../asset/4.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35,
        lig: 15,
        isFavorite: false,

    },
    {
        id: 2,
        name: 'Bonsai Plant',
        category: "Top picks",
        price: 50.99,
        title: 'Lorem ipsum dolor sit amet.',
        imge: require('../../asset/5.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 20,
        hei: 15,
        lig: 25,
        isFavorite: false,

    },
    {
        id: 3,
        name: 'Peperomia',
        category: "Top picks",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet.',
        imge: require('../../asset/4.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35,
        lig: 15,
        isFavorite: false,

    },
    {
        id: 4,
        name: 'Bonsai Plant',
        category: "Indoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet.',
        imge: require('../../asset/5.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35,
        lig: 15,
        isFavorite: false,

    },
    {
        id: 5,
        name: 'Peperomia',
        category: "Indoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet.',
        imge: require('../../asset/4.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35 ,
        lig: 15,
        isFavorite: false,

    },
    {
        id: 6,
        name: 'Bonsai Plant',
        category: "Indoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet.',
        imge: require('../../asset/5.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35 ,
        lig: 15,
        isFavorite: false,

    },

    {
        id: 7,
        name: 'Peperomia',
        category: "Outdoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet.',
        imge: require('../../asset/4.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35,
        lig: 15,
        isFavorite: false,

    },

    {
        id: 8,
        name: 'Peperomia',
        category: "Outdoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet.',
        imge: require('../../asset/5.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35,
        lig: 15,
        isFavorite: false,

    },

    {
        id: 9,
        name: 'Peperomia',
        category: "Outdoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet.',
        imge: require('../../asset/4.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35,
        lig: 15,
        isFavorite: false,

    },
]
export const natureSlice = createSlice({
    name: 'nature1',
    initialState: { value: initialStateValue },
    reducers: {
        nattureaction: (state, action) => {
            state.value = action.payload
        },
        toggleFavorite: (state, action) => {
            const itemToUpdate = state.value.find((item) => item.id === action.payload);
            if (itemToUpdate) {
                itemToUpdate.isFavorite = !itemToUpdate.isFavorite;
            }
        },

    }
})

export const natureReducer = natureSlice.reducer
export const { nattureaction,toggleFavorite } = natureSlice.actions