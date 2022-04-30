import * as React from 'react';
import { Chart, GoogleChartWrapperChartType } from "react-google-charts";

interface GChartProps{
    ChartType: string;
    ChartData: any[];
}

const GChart: React.FunctionComponent<GChartProps>  = props => {
    return (
        <Chart width="100%" height="100%"
            chartType={props.ChartType as GoogleChartWrapperChartType}
            data={props.ChartData}
        />
    )
};

export default GChart;