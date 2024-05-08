import { Component } from 'react'
import styles from './UserInfo.module.css'

class UserInfo extends Component {
	render() {
		const { username, email } = this.props
		return (
			<div className={styles.container}>
				<h2>User Info</h2>
				<p>username: {username}</p>
				<p>email: {email}</p>
			</div>
		)
	}
}

export default UserInfo
