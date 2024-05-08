import React from 'react'
import { intensiveMembers } from '../../data/intensiveMembers'
import styles from './Members.module.css'

const Members = () => {
	return (
		<div className={styles.membersContainer}>
			<ul>
				{intensiveMembers.map(el => {
					return (
						<li key={el.id} className={styles.listItem}>
							{el.name}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Members
