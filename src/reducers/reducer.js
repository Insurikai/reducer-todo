const reducer = (state, action) =>{
    switch(action.type){
        case "Add":
            return [...state, action.payload]
        case "Clear":
            return state.filter(todoItem => !todoItem.completed)
        case "Toggle":
            return state.map(item => {
                if(item.id === action.payload){ item.completed = !item.completed; }
                return item
            })
        default:
            return state;
    }
}
const data = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'item2',
        completed: true,
        id: 3457834
    }
]

export {reducer, data}