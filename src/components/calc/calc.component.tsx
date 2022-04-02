import React from "react";
import "./style.scss";
import { ETYPES } from "../../models/process.enum";

interface Props {
	theme: number;
	handleAddingNumber: (number: number) => void;
	handleAddingSympols: (process: string) => void;
	handleDel: () => void;
	handleProcess: () => void;
	handleReset: () => void;
}

const Calc: React.FC<Props> = ({
	theme,
	handleAddingNumber,
	handleAddingSympols,
	handleDel,
	handleProcess,
	handleReset,
}) => {
	return (
		<div
			className="calc_container w-full  h-[400px] flex flex-col justify-evenly items-center"
			id={"theme" + theme}>
			<div className="row_1">
				<button className="number" onClick={() => handleAddingNumber(7)}>
					7
				</button>
				<button className="number" onClick={() => handleAddingNumber(8)}>
					8
				</button>
				<button className="number" onClick={() => handleAddingNumber(9)}>
					9
				</button>
				<button className="del" onClick={handleDel}>
					DEL
				</button>
			</div>

			<div className="row_2">
				<button className="number" onClick={() => handleAddingNumber(4)}>
					4
				</button>
				<button className="number" onClick={() => handleAddingNumber(5)}>
					5
				</button>
				<button className="number" onClick={() => handleAddingNumber(6)}>
					6
				</button>
				<button className="number" onClick={() => handleAddingSympols(ETYPES.PLUS)}>
					<i className="fa-solid fa-plus"></i>
				</button>
			</div>

			<div className="row_3">
				<button className="number" onClick={() => handleAddingNumber(1)}>
					1
				</button>
				<button className="number" onClick={() => handleAddingNumber(2)}>
					2
				</button>
				<button className="number" onClick={() => handleAddingNumber(3)}>
					3
				</button>
				<button className="number" onClick={() => handleAddingSympols(ETYPES.MINUS)}>
					<i className="fa-solid fa-minus"></i>
				</button>
			</div>

			<div className="row_4">
				<button className="number" onClick={() => handleAddingSympols(".")}>
					<i className="fa-solid fa-circle text-[6px]"></i>
				</button>
				<button className="number" onClick={() => handleAddingNumber(0)}>
					0
				</button>
				<button className="number" onClick={() => handleAddingSympols(ETYPES.DIVISION)}>
					/
				</button>
				<button className="number" onClick={() => handleAddingSympols(ETYPES.MULTIPLE)}>
					x
				</button>
			</div>

			<div className="row_5">
				<button type="reset" onClick={handleReset}>
					RESET
				</button>
				<button type="submit" onClick={handleProcess}>
					<i className="fa-solid fa-equals"></i>
				</button>
			</div>
		</div>
	);
};

export default Calc;
