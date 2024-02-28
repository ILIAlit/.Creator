import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CREATE_PUBLICATION_ROUTE, HOME_ROUTE } from '../../utils/consts'

export default observer(function BurgerMenu({ isAuth }) {
	const navigate = useNavigate()
	const [anchorElNav, setAnchorElNav] = useState(null)

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleOpenNavMenu}
				color='inherit'
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id='menu-header'
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{
					display: { xs: 'block', md: 'none' },
				}}
			>
				<MenuItem onClick={handleCloseNavMenu}>
					<Typography onClick={() => navigate(HOME_ROUTE)} textAlign='center'>
						Главная
					</Typography>
				</MenuItem>
				{isAuth && (
					<MenuItem onClick={handleCloseNavMenu}>
						<Typography
							onClick={() => navigate(CREATE_PUBLICATION_ROUTE)}
							textAlign='center'
						>
							Создать
						</Typography>
					</MenuItem>
				)}
				<MenuItem onClick={handleCloseNavMenu}>
					<Typography textAlign='center'>Поиск</Typography>
				</MenuItem>
			</Menu>
		</Box>
	)
})
