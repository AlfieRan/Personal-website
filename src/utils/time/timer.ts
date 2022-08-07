import { useState } from "react";

export type Timer = {
    time: number;
    Start: () => void;
    Pause: () => void;
    Restart: () => void;
};

export default function useTimer(): Timer {
    const [launched, setLaunched] = useState<boolean>(false);
    const [running, setRunning] = useState<boolean>(false);

    const [originTime, setOriginTime] = useState<number>();
    const [timeSpentPaused, setTimeSpentPaused] = useState<number>(0);
    const [lastPause, setLastPause] = useState<number>(0);

    const [time, setTime] = useState<number>(0);

    function init() {
        setTimeSpentPaused(0);
        setOriginTime(Date.now());
        setLaunched(true);
        setRunning(true);
        console.log("Init:", originTime);
    }

    function Restart() {
        init();
    }

    function Start() {
        if (!launched) {
            init();
        }

        if (!running) {
            // gets skipped if just init cause init sets running to true
            setTimeSpentPaused(timeSpentPaused + (Date.now() - lastPause));
            setRunning(true);
        }
    }

    function Pause() {
        if (running) {
            setLastPause(Date.now());
            setRunning(false);
        }
    }

    function getTime() {
        if (originTime) {
            return (Date.now() - (originTime + timeSpentPaused)) / 1000;
        }
    }

    setInterval(() => {
        const newTime = getTime();
        if (newTime) {
            setTime(newTime);
        }
    }, 250);

    return {
        time,
        Start,
        Pause,
        Restart,
    };
}
