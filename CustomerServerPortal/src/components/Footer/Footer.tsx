import React from 'react';
import { AppBar, Box, Container, MenuItem, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

// import MenuIcon from '@mui/icons-material/Menu';

export type FooterProps = {
}

//Estas constantes definen los nombres de las páginas y las configuraciones que se mostrarán en los menús desplegables.
//const pages = ['Knowledge', 'My Support', 'Cases'];

const socialLinks = [
	{ icon: InstagramIcon, url: 'https://www.instagram.com' },
	{ icon: TwitterIcon, url: 'https://www.twitter.com' },
	{ icon: FacebookIcon, url: 'https://www.facebook.com' },
];

const pages = [
	{ title: 'Knowledge', link: './Knowledge' },
	{ title: 'My Support', link: './MySupport' },
	{ title: 'Cases', link: './Cases' },
];

const Footer: React.FC<FooterProps> = ({ }) => {


	return (
		<AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>


					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
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
					</Link>

					{/* Icono y título de la barra de navegación (versión móvil):
					Estos elementos representan el icono y el título de la barra de navegación en la versión móvil (tamaño de pantalla `xs`).*/}

					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
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
					</Link>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', justifyContent: 'center' } }}>
						{pages.map((page) => (
							<MenuItem key={page.title} sx={{ justifyContent: 'center' }}>
								<Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
									<Typography textAlign="left">{page.title}</Typography>
								</Link>
							</MenuItem>
						))}
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						{socialLinks.map((socialLink, index) => {
							const { icon: Icon, url } = socialLink;
							return (
								<a key={index} href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
									<Icon sx={{ mx: 1 }} />
								</a>
							);
						})}
					</Box>

				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Footer;