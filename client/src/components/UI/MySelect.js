import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function MySelect({ value, onChange, label, options }) {
	return (
		<FormControl sx={{ minWidth: 200 }}>
			<InputLabel id="select-label">{label}</InputLabel>
			<Select
				labelId="select-label"
				label={label}
				value={value || ''}
				onChange={onChange}
			>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				{options.map((item) => (
					<MenuItem key={item.value} value={item.value}>
						{item.text}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
