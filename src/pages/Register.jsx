import { useState } from "react"
import { Link, redirect } from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import axios from "axios"

const Register = () => {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [repeatePassword, setRepeatePassword] = useState("")
	const [messageError, setMessageError] = useState("")
    const [message, setMessage] = useState("")

     {/* pushes for backend */}
	async function Registers(e) {
		e.preventDefault()

		try {
			const users = await axios.post("http://localhost:4000/api/users/register", {
				username: username,
				email: email,
				password: password,
				repeatePassword: repeatePassword
			})
			
			if (users.data.code == 201) {
			    setMessage("berhasil membuat users, silakan login")
			}
		} catch (error) {
			setMessageError(error.response.data.errors)
		}
	}
	
	return (
		<div className="vh-100">
			<div className="mb-5">
				<Navbar />
			</div>

			<div>
				<p className="text-center fw-normal text-capitalize"> 
				    { messageError }
				</p>
				<p className="text-center fw-normal text-capitalize"> 
				    { message }
				</p>
			</div>

			<div className="container mx-auto my-auto">
				<h1 className="text-uppercase fw-bold text-center mb-5"> Register </h1>

				<form
					onSubmit={Registers}
					className="mx-sm-auto mx-md-3 mx-lg-5">
					{/* Email input */}
					<div className="mb-4">
						<input
							type="text"
							id="form2Example1"
							className="form-control"
							placeholder="Username"
							required
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>

					{/* Email input */}
					<div className="mb-4">
						<input
							type="email"
							id="form2Example2"
							className="form-control"
							placeholder="Email"
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>

					{/* Password input */}
					<div className="mb-4">
						<input
							type="password"
							id="form2Example2"
							className="form-control"
							placeholder="Password"
							required
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					{/* Repeated password input */}
					<div className="mb-4">
						<input
							type="password"
							id="form2Example2"
							className="form-control"
							placeholder="repeate password"
							required
							value={repeatePassword}
							onChange={e => setRepeatePassword(e.target.value)}
						/>
					</div>

					{/* 2 column grid layout for inline styling */}
					<div className="row mb-4">
						<div className="col">
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
									required
								/>
								<label
									className="form-check-label"
									htmlFor="flexCheckDefault">
									Saya menerima ketentuan dan persyaratan HappyMart
								</label>
							</div>
						</div>
					</div>

					{/* Submit button */}
					<button
						type="submit"
						className="btn btn-primary btn-block mb-4 w-100">
						Sign Up
					</button>

					{/* Register buttons */}
					<div className="text-center">
						<p>
							Sudah Punya Akun? <Link to="/login">Login</Link>
						</p>
						<p className="text-center fw-light text-capitalize"> Atau Daftar Menggunakan :</p>
						<button
							type="button"
							className="btn btn-link btn-floating mx-1">
							<box-icon
								type="logo"
								name="google"
								size="sm"></box-icon>
						</button>

						<button
							type="button"
							className="btn btn-link btn-floating mx-1">
							<box-icon
								type="logo"
								name="facebook-square"
								size="sm"></box-icon>
						</button>

						<button
							type="button"
							className="btn btn-link btn-floating mx-1">
							<box-icon
								type="logo"
								name="twitter"
								size="sm"></box-icon>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Register
