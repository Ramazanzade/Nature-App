import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [
    {
        id: 1,
        name: 'Peperomia',
        category: "Top picks",
        price: 24.50,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet perferendis assumenda sunt laboriosam ipsum totam nisi. Vitae, aspernatur harum.',
        imge: require('../../asset/4.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35 - 36,
        lig: 15 - 16
    },
    {
        id: 2,
        name: 'Bonsai Plant',
        category: "Top picks",
        price: 50.99,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet perferendis assumenda sunt laboriosam ipsum totam nisi. Vitae, aspernatur harum.',
        imge: require('../../asset/5.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 20,
        hei: 15 - 26,
        lig: 25 - 36
    },
    {
        id: 3,
        name: 'Peperomia',
        category: "Top picks",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet perferendis assumenda sunt laboriosam ipsum totam nisi. Vitae, aspernatur harum.',
        imge: require('../../asset/4.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35 - 36,
        lig: 15 - 16
    },
    {
        id: 4,
        name: 'Bonsai Plant',
        category: "Indoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet perferendis assumenda sunt laboriosam ipsum totam nisi. Vitae, aspernatur harum.',
        imge: require('../../asset/5.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35 - 36,
        lig: 15 - 16
    },
    {
        id: 5,
        name: 'Peperomia',
        category: "Indoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet perferendis assumenda sunt laboriosam ipsum totam nisi. Vitae, aspernatur harum.',
        imge: require('../../asset/4.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35 - 36,
        lig: 15 - 16
    },
    {
        id: 6,
        name: 'Bonsai Plant',
        category: "Indoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet perferendis assumenda sunt laboriosam ipsum totam nisi. Vitae, aspernatur harum.',
        imge: require('../../asset/5.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35 - 36,
        lig: 15 - 16
    },

    {
        id: 7,
        name: 'Peperomia',
        category: "Outdoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet perferendis assumenda sunt laboriosam ipsum totam nisi. Vitae, aspernatur harum.',
        imge: require('../../asset/4.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35 - 36,
        lig: 15 - 16
    },

    {
        id: 8,
        name: 'Peperomia',
        category: "Outdoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet perferendis assumenda sunt laboriosam ipsum totam nisi. Vitae, aspernatur harum.',
        imge: require('../../asset/5.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35 - 36,
        lig: 15 - 16
    },

    {
        id: 9,
        name: 'Peperomia',
        category: "Outdoor",
        price: 64.50,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet perferendis assumenda sunt laboriosam ipsum totam nisi. Vitae, aspernatur harum.',
        imge: require('../../asset/4.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at eos cumque, mollitia ab voluptatum fugit ad odit quaerat. Cupiditate voluptate, est aut dolorem illo quis velit maxime quos quisquam totam excepturi natus nisi veniam non dolore repellat facilis beatae magni voluptas error harum expedita a nostrum! Natus, quia eos.',
        tem: 30,
        hei: 35 - 36,
        lig: 15 - 16
    },
]
export const natureSlice = createSlice({
    name: 'nature1',
    initialState: { value: initialStateValue },
    reducers: {
        nattureaction: (state, action) => {
            state.value = action.payload
        },

    }
})

export const natureReducer = natureSlice.reducer
export const { nattureaction } = natureSlice.actions