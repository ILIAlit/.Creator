import { Box, Typography } from '@mui/material';
import { default as React} from 'react';
import ButtonLike from './Buttons/ButtonLike';
import ButtonSave from './Buttons/ButtonSave';

export default function CardCover({title}) {
	return (
		<Box className="publication-cover">
			<Box className="publication-navigate-buttons">
				<ButtonSave />
				<ButtonLike />
			</Box>
			<Box className="publication-title">
				<Typography gutterBottom variant="h4" component="h5">
					{title}
				</Typography>
			</Box>
		</Box>
	);
}
