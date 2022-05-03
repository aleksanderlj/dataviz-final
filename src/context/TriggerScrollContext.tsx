import React, {ProviderProps, useContext, useState} from "react";

const TriggerScrollContext = React.createContext<boolean>(false);
const SetTriggerScrollContext = React.createContext<null | React.Dispatch<React.SetStateAction<boolean>>>(null);

export const useTriggerScroll = () => {
    const triggerScroll = useContext(TriggerScrollContext)
    const setTriggerScroll = useContext(SetTriggerScrollContext)
    if(setTriggerScroll === null) throw new Error()
    return {triggerScroll, setTriggerScroll}
}

export const TriggerScrollProvider = ({value, children}: ProviderProps<boolean>) => {
    const [triggerScroll, setTriggerScroll] = useState(value)

    return (
        <TriggerScrollContext.Provider value={triggerScroll}>
            <SetTriggerScrollContext.Provider value={setTriggerScroll}>
                {children}
            </SetTriggerScrollContext.Provider>
        </TriggerScrollContext.Provider>
    )
}

export default TriggerScrollProvider;