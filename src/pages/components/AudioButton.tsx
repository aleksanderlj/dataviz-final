import {Box} from "@mui/material";
import Image from "mui-image";
import AudioIcon from "../../images/audio_icon.png";
import React, {useState} from "react";

declare global {
    var age: number;
}

export interface AudioButtonProps {
    audio: string;
}

function AudioButton(props: AudioButtonProps) {
    const [audio, setAudio] = useState<HTMLAudioElement>(new Audio(props.audio))

    function handleSound(sound: HTMLAudioElement) {
        if(globalThis.sound) {
            globalThis.sound!.pause()
            globalThis.sound!.currentTime = 0
        }
        globalThis.sound = sound
        globalThis.sound.play()
    }

    return (
        <Box width={"50%"}>
            <Image
                src={AudioIcon}
                duration={100}
                fit={"contain"}
                onClick={() => handleSound(audio)}
                sx={{
                    cursor: "pointer"
            }}/>
        </Box>
    )
}

export default AudioButton;