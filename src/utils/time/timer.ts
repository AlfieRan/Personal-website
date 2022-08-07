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

    const [originTime, setOriginTime] = useState<number>(0);
    const [timeSpentPaused, setTimeSpentPaused] = useState<number>(0);
    const [lastPause, setLastPause] = useState<number>(0);

    const [time, setTime] = useState<number>(0);

    function init() {
        setTimeSpentPaused(0);
        setOriginTime(Date.now());
        setLaunched(true);
        setRunning(true);
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
        return Date.now() - (originTime + timeSpentPaused);
    }

    setInterval(() => {
        setTime(getTime());
    }, 250);

    return {
        time,
        Start,
        Pause,
        Restart,
    };
}
