import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";

const Content = () => {
	return (
		<div className={styles.landing}>
			<Box
				sx={{
					width: 120,
					height: 400,
					backgroundColor: "primary.dark",
					"&:hover": {
						backgroundColor: "primary.main",
						opacity: [0.9, 0.8, 0.7],
					},
				}}
			/>
			<div>
				<Typography
					variant="h1"
					component="h2"
				>
					Shalom . Taiwo
				</Typography>
				;
			</div>
		</div>
	);
};

export default Content;
