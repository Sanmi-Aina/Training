import { IInputs, IOutputs } from "./generated/ManifestTypes";
import DataSetInterfaces = ComponentFramework.PropertyHelper.DataSetApi;
type DataSet = ComponentFramework.PropertyTypes.DataSet;

import GChart from "./component/GChart";

export class XtraCharts implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private _notifyOutputChanged: () => void;
	private _context: ComponentFramework.Context<IInputs>;
	private _refreshData: EventListenerOrEventListenerObject;
	private _container: HTMLDivElement;

	// private _chartType: string;

	constructor() {

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
		// Add control initialization code

		this._context = context;
		this._container = container;
		// this._chartType = context.parameters.ChartType.raw;
		this._notifyOutputChanged = notifyOutputChanged;
		// this._refreshData = this._refreshData.bind(this);
		// container.innerHTML = `<h3>${this._chartType}</h3>`;
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		// Add code to update control view

		let _chartType = context.parameters.ChartType.raw;
		let _chartData = this.FormatChartData(context.parameters.ChartData);

		this._container.innerHTML = `
			<h3>${_chartType}</h3>
		`;

		let chart = GChart({
			ChartType: _chartType,
			ChartData: _chartData
		});

		// this._container.append(chart);
	}

	private FormatChartData = (InputData: ComponentFramework.PropertyTypes.DataSet): any[] => {
		const columnTitle = InputData.columns.map(col => col.name);
		let records: any[] = [];

		records = InputData.sortedRecordIds.map(recordId => columnTitle.map(col => InputData.records[recordId].getValue(col)));

		console.log(records)
		return [columnTitle, ...records];
	}

	/**
	 * It is called by the framework prior to a control receiving new data.
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		return {
			// ChartType: this._chartType
		};
	}


	/**
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		// Add code to cleanup control if necessary
	}

}
