import React from 'react'
import './Article.css'

const Article = ({ date, title, imgURL }) => {
	return (
		<div className='gpt3__articles-container__article'>
			<div className="gpt3__articles-container__article-img">
				<img src={imgURL} alt="article image" />
			</div>
			<div className="gpt3__articles-container__article-content">
				<div>
					<p>{date}</p>
					<h3>{title}</h3>
				</div>
				<p>Read Full Article</p>
			</div>
		</div>
	)
}

export default Article