import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IChartProps{
}

function Chart({}:IChartProps) {
    const isDark = useRecoilValue(isDarkAtom);
    return (
        <>
            <h1>Chart isDark is </h1>
            {isDark ? "true" : "false"}
        </>
    );
}

export default Chart;