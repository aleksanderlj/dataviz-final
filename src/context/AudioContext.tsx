import React, {useContext, useEffect, useState} from "react";

const AudioIDContext = React.createContext<number>(-1);
const PlayAudioContext = React.createContext<Function>(() => {});
const StopAudioContext = React.createContext<Function>(() => {});

export const useAudioContext = () => {
    const audioId = useContext(AudioIDContext)
    const playAudio = useContext(PlayAudioContext)
    const stopAudio = useContext(StopAudioContext)
    return {audioId, playAudio, stopAudio}
}

export const AudioProvider = ({children}: {children?: JSX.Element}) => {
    const [audio, setAudio] = useState<HTMLAudioElement>()
    const [id, setId] = useState(0)

    function playAudio(newAudio: HTMLAudioElement, audioId: number){
        if(audio) {
            audio.pause()
            audio.currentTime = 0
        }
        newAudio.onended = stopAudio
        setAudio(newAudio)
        newAudio.play()
        setId(audioId)
    }

    function stopAudio() {
        if(audio) {
            audio.pause()
            audio.currentTime = 0
        }
        setId(0)
    }

    return (
        <AudioIDContext.Provider value={id}>
            <PlayAudioContext.Provider value={playAudio}>
                <StopAudioContext.Provider value={stopAudio}>
                    {children}
                </StopAudioContext.Provider>
            </PlayAudioContext.Provider>
        </AudioIDContext.Provider>
    )
}

export default AudioProvider;