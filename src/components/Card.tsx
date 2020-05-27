import React, { FC } from "react";
import { Box } from "grommet";

const Card: FC<{}> = ({ children }) => {
	return (
		<Box
			pad="15px"
			height="350px"
			width="300px"
      border={{ size: "1px"}}
      round="5px"
      justify="between"
      alignContent="center"
		>
			{children}
		</Box>
	);
};

export default Card;
