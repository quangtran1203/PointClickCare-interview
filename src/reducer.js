export const initialState = {
    tile: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            let i, str;
            i = state.tile.length + 1;
            str = "Tile " + i;
            return {
                ...state,
                tile: [...state.tile, str],
            }
        case "REMOVE":
            let copy = state.tile.slice(0, state.tile.length-1);
            return {
                ...state,
                tile: copy,
            }
        default:
            return state;
    }
}

export default reducer;
