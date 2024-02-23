import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

const InputMultiLine = ({
	name,
	control,
	id,
	variant,
	type,
	label,
	error,
	helperText,
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					multiline
					{...field}
					error={error}
					helperText={helperText }
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

export default InputMultiLine
