import { useEffect, useState } from "react";
import sleep from "./sleep";

export default function useTimer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [lastTick, setLastTick] = useState(new Date().getTime());

    function start() {
        setIsRunning(true);
        sleep(500).then(() => {
            console.log(isRunning);
            tick();
        });
    }

    function pause() {
        setIsRunning(false);
    }

    function stop() {
        setIsRunning(false);
        setTime(0);
    }

    function tick() {
        console.log(isRunning);
        if (!isRunning) {
            console.log("timer is not running");
            return;
        } else if (new Date().getTime() - lastTick > 1000) {
            setTime(time + 1);
            setLastTick(new Date().getTime());
            console.log("tick", time);
        }
        sleep(1000).then(() => {
            tick();
        });
    }

    useEffect(() => {
        console.log("isRunning was updated: ", isRunning);
    }, [isRunning]);

    return {
        time,
        start,
        pause,
        stop,
    };
}
