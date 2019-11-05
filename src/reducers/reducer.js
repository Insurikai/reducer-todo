const reducer = (state, action) =>{
    switch(action.type){
        case "Add":
            return [...state, action.payload]
        case "Clear Completed":
            return state.filter(todoItem => !todoItem.completed)
        default:
            return state;
    }
    return 
}
const data = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'item2',
        completed: false,
        id: 3457834
    }
]

export {reducer, data}