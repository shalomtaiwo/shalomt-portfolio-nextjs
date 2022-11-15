import React from "react";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import styles from "../../styles/Header.module.css";
import { Link } from "@mui/material";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<IconButton
					color="primary"
					aria-label="upload picture"
					component="label"
				>
					<InsertEmoticonIcon />
				</IconButton>
			</div>
			<div className={styles.nav}>
                <nav>
                    <Link href="#" underline="none">Home</Link>
                    <Link href="#" underline="none">About</Link>
                    <Link href="#" underline="none">Projects</Link>
                </nav>
            </div>
			<div className={styles.topbar}>
				<Stack
					direction="row"
					spacing={2}
				>
					<Button
						variant="contained"
						endIcon={<GitHubIcon />}
					>
						GitHub
					</Button>
					<Button
						variant="contained"
						endIcon={<MailIcon />}
					>
						Message
					</Button>
				</Stack>
			</div>
		</div>
	);
};

export default Header;
