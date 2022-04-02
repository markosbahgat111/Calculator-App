import React from "react";
import "./style.scss";

interface Props {
	theme: number;
	numbers: string;
	total: number | null;
}

const Total: React.FC<Props> = ({ theme, numbers, total }) => {
	return (
		<div className="total_container h-[100px] text-2xl flex items-center justify-end px-5" id={"theme" + theme}>
			{typeof total === "number" ? (isNaN(total) ? "This Action Can't be Calculated" : total) : numbers}
		</div>
	);
};

export default Total;
