import * as React from 'react';
import { Chart, GoogleChartWrapper, GoogleChartWrapperChartType } from "react-google-charts";

export interface GChartProps{
    dimension: {height:number, width:number};
    ChartType: string;
    ChartData: any[];
    onSelect: (item:number) => void;
}

export const GChart: React.FunctionComponent<GChartProps>  = props => {
    return (
        <div style={{width:`${props.dimension.width}px`, height:`${props.dimension.height}px`}}>
            <Chart width="100%" height="100%"
                chartType={props.ChartType as GoogleChartWrapperChartType}
                data={props.ChartData}
                chartEvents={[
                    {
                        eventName: "ready",
                        callback: ({chartWrapper, google}) => {
                            const chart = chartWrapper.getChart();
                            google.visualization.events.addListener(chartWrapper, "select", e =>{
                                const record = e.getSelection()[0];
                                if(record){
                                    props.onSelect(props.ChartData[record.row+1]);
                                    console.log(record);
                                    console.log(props.ChartData[record.row+1]);
                                }
                            })
                        }
                    }
                ]}
            />
        </div>
    )
};

export default GChart;