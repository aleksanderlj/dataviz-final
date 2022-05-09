import {Box} from "@mui/material";
import Image from "mui-image";
import PlayIcon from "../../images/play.png"
import StopIcon from "../../images/stop.png"
import React, {useState} from "react";
import {useAudioContext} from "../../context/AudioContext";

export interface AudioButtonProps {
    id: number;
    audio: string;
}

function AudioButton(props: AudioButtonProps) {
    const [audio, setAudio] = useState<HTMLAudioElement>(new Audio(props.audio))
    const {audioId, playAudio, stopAudio} = useAudioContext()

    function handleSound(audio: HTMLAudioElement, id: number) {
        if(audioId === id) {
            stopAudio()
        } else {
            playAudio(audio, id)
        }
    }

    return (
        <Box width={"50%"}>
            <Image
                src={audioId === props.id ? StopIcon : PlayIcon}
                duration={100}
                fit={"contain"}
                onClick={() => handleSound(audio, props.id)}
                sx={{
                    cursor: "pointer"
            }}/>
        </Box>
    )
}

export default AudioButton;