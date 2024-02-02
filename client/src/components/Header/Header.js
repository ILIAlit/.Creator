import { useContext, useState } from 'react';
import {
	AppBar,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	Button,
	Tooltip,
	Avatar,
	CssBaseline,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
	CREATE_PUBLICATION_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
} from '../../utils/consts';
import { observer } from 'mobx-react-lite';
import BurgerMenu from '../UI/BurgerMenu';
import SearchInput from '../UI/SearchInput';
import { Context } from '../../context/index'

const Header = ({ isAuth, user, logout }) => {
	const navigate = useNavigate();

	const [anchorElUser, setAnchorElUser] = useState(null);
	const {userStore} = useContext(Context)

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const loginOut = () => {
		userStore.logout()
		navigate(HOME_ROUTE);
	};

	console.log("HEADER")

	return (
		<AppBar sx={{position:'fixed',}} className="appBar">
			<CssBaseline />
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							margin: '15px',
						}}
					>
						Creator.
					</Typography>
					<BurgerMenu />

					<Typography
						variant="h5"
						noWrap
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
						}}
					>
						Creator.
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button
							variant="text"
							onClick={() => {
								navigate(HOME_ROUTE);
							}}
							sx={{
								my: 2,
								color: 'white',
								display: 'block',
								textDecoration: 'none',
							}}
						>
							Главная
						</Button>
						{isAuth && (
							<Button
								variant="text"
								onClick={() => {
									navigate(CREATE_PUBLICATION_ROUTE);
								}}
								sx={{
									my: 2,
									color: 'white',
									display: 'block',
									textDecoration: 'none',
								}}
							>
								Создать
							</Button>
						)}
						<SearchInput />
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip>
							<>
								{!isAuth && (
									<Button
										variant="contained"
										onClick={() => navigate(LOGIN_ROUTE)}
										sx={{
											my: 2,
											color: 'white',
											display: 'block',
											textDecoration: 'none',
										}}
									>
										Войти
									</Button>
								)}
								{isAuth && (
									<IconButton
										onClick={handleOpenUserMenu}
										sx={{ p: 0 }}
									>
										<Avatar alt="avatar" src={user.avatar}>
											{user.name[0]}
										</Avatar>
									</IconButton>
								)}
							</>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={!!anchorElUser}
							onClose={handleCloseUserMenu}
						>
							<MenuItem
								component={Link}
								to="/profile"
								onClick={handleCloseUserMenu}
							>
								<Typography textAlign="center">Профиль</Typography>
							</MenuItem>
							<MenuItem
								onClick={() => {
									loginOut();
									handleCloseUserMenu();
								}}
							>
								<Typography textAlign="center">Выйти</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default observer(Header);
