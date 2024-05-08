import React from 'react'
import UserInfo from '../UserInfo/UserInfo'
import styles from './Form.module.css'
class Form extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			email: '',
			tempUsername: '',
			tempEmail: '',
		}
	}

	componentDidMount() {
		console.log('компонент смонтирован')
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return true
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('компонент обновился!')
	}

	componentWillUnmount() {
		console.log('компонент размонтирован')
	}

	componentDidCatch(error, errorInfo) {
		console.error('ошибка : ', error)
		console.error('информация об ошибке : ', errorInfo)
	}

	handleChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	handleSubmit = event => {
		event.preventDefault()
		const { tempUsername, tempEmail } = this.state
		this.setState({
			username: tempUsername,
			email: tempEmail,
			tempUsername: '',
			tempEmail: '',
		})
		console.log('submitted values :', { tempUsername, tempEmail })
	}

	render() {
		const { username, email, tempUsername, tempEmail } = this.state
		return (
			<>
				<div className={styles.container}>
					<form onSubmit={this.handleSubmit}>
						<div className={styles.inputsContainer}>
							<input
								type='text'
								placeholder='username'
								name='tempUsername'
								value={tempUsername}
								onChange={this.handleChange}
								className={styles.input}
							/>
							<input
								type='email'
								name='tempEmail'
								placeholder='email'
								value={tempEmail}
								onChange={this.handleChange}
								className={styles.input}
							/>
						</div>
						<button type='submit' className={styles.button}>
							Submit
						</button>
					</form>
				</div>
				<UserInfo username={username} email={email} />
			</>
		)
	}
}

export default Form
