import { Link } from 'react-router-dom'





const Navbar = () => {
	return (
		<div>
			<nav className="navbar bg-body-tertiary sticky-top mb-5">
				<div className="container-fluid">
					<Link
						className="navbar-brand"
						to="/">
						happyMart
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="offcanvas offcanvas-end"
						tabIndex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel">
						<div className="offcanvas-header">
							<h5
								className="offcanvas-title"
								id="offcanvasNavbarLabel">
								happyMart
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li className="nav-item">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to="/discount">
										Harga Murah
									</Link>
								</li>
								<li className="nav-item dropdown">
									<Link
										className="nav-link dropdown-toggle"
										to="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										Settings
									</Link>
									<ul className="dropdown-menu">
										<li>
											<Link
												className="dropdown-item"
												href="createProduct">
												Buat product Baru 
											</Link>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="/accounts/EditProfile">
												Edit Profile
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a
												className="dropdown-item"
												href="/logout">
												Logout
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to="/accounts">
										my accounts
									</Link>
								</li>
							</ul>
							<form
								method="post"
								className="d-flex mt-3"
								role="search">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search products"
									aria-label="Search"
								/>
								<button
									className="btn btn-success"
									type="submit">
									Search
								</button>
							</form>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
