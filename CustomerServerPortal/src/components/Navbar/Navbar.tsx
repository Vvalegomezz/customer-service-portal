import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react';
export type NavbarProps = {}

//Estas constantes definen los nombres de las páginas y las configuraciones que se mostrarán en los menús desplegables.
const pages = ['Home', 'Knowledge', 'My Support'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar: React.FC<NavbarProps> = ({ }) => {


	//Aquí se utilizan los hooks de estado de React para declarar y gestionar dos estados: `anchorElNav` y `anchorElUser`. 
	//Estos estados se utilizan para controlar la apertura y cierre de los menús desplegables de navegación y usuario respectivamente.

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	//Estas funciones manejan los eventos de apertura y cierre de los menús desplegables. 
	//Al hacer clic en los botones correspondientes, se actualizan los estados `anchorElNav` y `anchorElUser`.

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<AppBar position="fixed">
			<Container maxWidth="xl">
				<Toolbar disableGutters>

					{/*Aquí se encuentran los elementos visibles en la barra de navegación, como un icono, un título y botones.
					Estos elementos se muestran de manera diferente dependiendo del tamaño de la pantalla (mediante las propiedades `display` y `sx`). */}

					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>

					{/* Menú desplegable de navegación:
					Acá tenemso el botón de menú desplegable de navegación que se muestra en dispositivos móviles (tamaño de pantalla `xs`).
					 Al hacer clic en el botón, se llama a la función `handleOpenNavMenu` para abrir el menú desplegable.*/}
					
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon/>
						</IconButton>
						<Menu
							id="menu-appbar"
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
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					{/* Icono y título de la barra de navegación (versión móvil):
					Estos elementos representan el icono y el título de la barra de navegación en la versión móvil (tamaño de pantalla `xs`).*/}

					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>

					{/*Botones de páginas de navegación (versión de escritorio):
					 se generan los botones para cada página de navegación en la versión de escritorio (tamaño de pantalla md).
					  Los botones se crean mediante el mapeo del array pages.*/}

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>

					{/* Menú desplegable de configuración de usuario:
					 Acá tenemos  se encuentra el botón de menú desplegable de configuración de usuario, que muestra un avatar y al hacer clic en él se abre el menú desplegable.
					El menú desplegable contiene elementos generados mediante el mapeo del array settings.*/}

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Paez Juan" src="@/static/images/avatar/jfp.JPG" />
							</IconButton>
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
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);

};

export default Navbar;
