var React = require('react');
var QuestionItem = require('./QuestionItem.js')

module.exports= React.createClass({
	render:function(){
		var questions = this.props.questions;
		if(!Array.isArray(questions)) throw new Error('this.props.questions问题必须是数组')
		var self = this
		var questionComps = questions.map(function(qst){
			return <QuestionItem 
			onVote={self.props.onVote}
			key={qst.key} 
			questionkey = {qst.key}
			title={qst.title} 
			desc={qst.description} 
			voteCount={qst.voteCount}/>
		})

		return(
			<div id="questions" className="" >
				{questionComps}
			</div>
		)
	}
})