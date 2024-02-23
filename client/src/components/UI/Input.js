import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

const Input = ({
	control,
	variant,
	id,
	type,
	label,
	name,
	error,
	helperText,
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					error={error}
					helperText={helperText || ''}
					fullWidth
					label={label}
					type={type}
					id={id}
					variant={variant}
					// onChange={handleInstagramChange}
				></TextField>
			)}
		/>
	)
}

export default Input
