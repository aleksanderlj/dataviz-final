import React, {useContext, useState} from "react";

const LegacyContext = React.createContext<boolean>(false);
const SetLegacyContext = React.createContext<Function>(() => {});

export const useLegacyContext = () => {
    const legacy = useContext(LegacyContext)
    const setLegacy = useContext(SetLegacyContext)
    return {legacy, setLegacy}
}

export const LegacyProvider = ({children}: {children?: JSX.Element}) => {
    const [legacy, setLegacy] = useState<boolean>(false)

    return (
        <LegacyContext.Provider value={legacy}>
            <SetLegacyContext.Provider value={setLegacy}>
                {children}
            </SetLegacyContext.Provider>
        </LegacyContext.Provider>
    )
}

export default LegacyProvider;