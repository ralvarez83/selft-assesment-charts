"use client";
// import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
// import React from 'react';

// export type NavbarProps = {
// 	// types...
// }

const Navbar = (): JSX.Element => {
	return (
		<>
		{/* <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Últimas películas
          </Typography> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Últimas películas
          </Typography> 
        </Toolbar>
				
      </AppBar> */}
			<nav>
				<img src="/logo.svg" />
				<h1>
					Datos de Auto-Evaluación
				</h1>
				{/* <ul>
					<li>
						<a>
							Últimas películas
						</a>
					</li>
					<li>
						<a>
							Las más vistas
						</a>
					</li>
				</ul>
				<div className='search'>

				</div> */}
			</nav>
		</>
	);
};

export default Navbar;
