var React = require('react');
var ReactDOM = require('react-dom')
var QuestionApp = require('./component/QuestionApp.js')



var mainCom = ReactDOM.render(
	<QuestionApp/>,
	document.getElementById('app')
)