import { NoteProps } from "@/app/(app)/new-note";
import { Dispatch, PropsWithChildren, createContext, useContext, useReducer } from "react";

const initialState: NoteProps = {
    id: "",
    title: "",
    location: {
        longitude: 0,
        latitude: 0,
        placeName: "Somewhere",
        isoCountryCode: "E"
    },
    body: "",
    color: "",
    date: new Date()
}

function noteReducer(state: NoteProps, action: { type: "SET_NOTE" | "REMOVE_NOTE", payload?: NoteProps }) {
    switch (action.type) {
        case "SET_NOTE":
            console.log("Payload: ", action.payload)
            if (!action.payload) return initialState
            return { 
                ...state,  
                title: action.payload.title,
                body: action.payload.body,
                color: action.payload.color,
                location: action.payload.location,
                date: action.payload.date,
                id: action.payload.id
            }
        case "REMOVE_NOTE":
            return { ...state, ...initialState }
        default:
            return state
    }
}

const NoteContext = createContext<{ state: NoteProps, dispatch: Dispatch<{ type: "SET_NOTE" | "REMOVE_NOTE", payload?: NoteProps }> }>({ state: initialState, dispatch: () => null })

function NoteContextProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(noteReducer, initialState)

    return (
        <NoteContext.Provider value={{ state, dispatch }}>
            {children}
        </NoteContext.Provider>
    )
}

export { NoteContextProvider, NoteContext }