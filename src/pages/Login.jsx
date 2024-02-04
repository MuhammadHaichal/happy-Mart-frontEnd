import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar.jsx"

const Login = () => {
	return (
		<div className="vh-100">
			<div className="mb-5">
				<Navbar />
			</div>
		    
			<div className="container mx-auto my-auto">
			    <h1 className="text-uppercase fw-bold text-center mb-5"> Login </h1>
			
				<form className="mx-sm-auto mx-md-3 mx-lg-5">
					{/* Email input */}
					<div className="mb-4">
						<input
							type="email"
							id="form2Example1"
							className="form-control"
							placeholder="Email"
						/>
					</div>

					{/* Password input */}
					<div className="mb-4">
						<input
							type="password"
							id="form2Example2"
							className="form-control"
							placeholder="Password"
						/>
					</div>

					{/* 2 column grid layout for inline styling */}
					<div className="row mb-4">
						<div className="col">
							{/* Simple link */}
							<a className="text-primary text-lowercase" href="#!">Lupa Password</a>
						</div>
					</div>

					{/* Submit button */}
					<button
						type="submit"
						className="btn btn-primary btn-block mb-4 w-100">
						Sign in
					</button>

					{/* Register buttons */}
					<div className="text-center">
						<p>
						    Belum Punya Akun? <Link to="/register"> Register </Link>
						</p>
						<p className="text-capitalize text-center fw-light">Atau Masuk Menggunakan:</p>
						<button
							type="button"
							className="btn btn-link btn-floating mx-1">
							<box-icon type="logo" name="google" size="sm"></box-icon>
						</button>

						<button
							type="button"
							className="btn btn-link btn-floating mx-1">
							<box-icon type="logo" name="facebook-square" size="sm"></box-icon>
						</button>

						<button
							type="button"
							className="btn btn-link btn-floating mx-1">
						    <box-icon type="logo" name="twitter" size="sm"></box-icon>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
