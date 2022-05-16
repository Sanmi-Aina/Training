import * as React from 'react';
import { Chart, GoogleChartWrapperChartType } from "react-google-charts";

export interface GChartProps{
    dimension: {height:number, width:number};
    ChartType: string;
    ChartData: any[];
}

export const GChart: React.FunctionComponent<GChartProps>  = props => {
    return (
        <div style={{width:`${props.dimension.width}px`, height:`${props.dimension.height}px`}}>
            <Chart width="100%" height="100%"
                chartType={props.ChartType as GoogleChartWrapperChartType}
                data={props.ChartData}
            />
        </div>
    )
};

export default GChart;