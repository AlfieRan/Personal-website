import { question } from "./types/mathsTypes";
import useAWS from "./hooks/mathTool/useAWS";

function getQuestions() {
    const info = useAWS();

    const newQuestions: question[] = [];
    // for (let i = 0; i < Math.min(10, Questions.length); i++) {
    //     const index = Math.floor(Math.random() * Questions.length);
    //     const subIndex = Math.floor(
    //         Math.random() * Questions[index].questions.length
    //     );
    //     newQuestions.push({
    //         ...Questions[index].questions[subIndex],
    //         name: `${Questions[index].name} ${Questions[index].questions[subIndex].name}`,
    //     });
    // }
    return newQuestions;
}

export default getQuestions;
