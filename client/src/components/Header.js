import { useContext, useState } from "react";
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Button, Tooltip, Avatar, styled, alpha, InputBase, CssBaseline } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from '../context/index';
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from 'mobx-react-lite';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '26ch',
      },
    },
  },
}));


const Header = () => {

  const {userStore} = useContext(Context)
  const {isAuth, user} = userStore
  const navigate = useNavigate();
  

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const loginOut = () => {
    userStore.logout()
    navigate(HOME_ROUTE)
  }

  return (
    <AppBar 
      position="fix" className="appBar">
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
            }}>
          Creator.
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit">
            
            <MenuIcon />
          </IconButton>
          <Menu
              id="menu-header"
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
              }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Главная</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Создать</Typography>
              </MenuItem>
          </Menu>
        </Box>

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
                handleCloseNavMenu();
                navigate("/")
                }}
              sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}>
                Главная
            </Button>
            {isAuth && (
              <Button
              variant="text"
              onClick={() => {
                handleCloseNavMenu();
                navigate("/publ-create-tool");}}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}>
                  Создать
              </Button>
            )}
            <Toolbar>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </Toolbar>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <>
                {!isAuth && (
                  <Button
                    variant="contained"
                    onClick={() => navigate(LOGIN_ROUTE)}
                    sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}>
                      Войти
                  </Button>
                )}
                {isAuth && (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="avatar" src= {user.avatar}>{user.name[0]}</Avatar>
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
              open={!!(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Профиль</Typography>
              </MenuItem>
              <MenuItem onClick={() => {loginOut(); handleCloseUserMenu()}}>
                <Typography textAlign="center">Выйти</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default observer(Header);