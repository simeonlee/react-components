// var onListItemClick = (event) => {
//    console.log('I got clicked');
// };

var App = () => (
  <div>
		<h1>Grocery List</h1>
  	<GroceryList list={['Bananas', 'Carrots', 'Oranges']} />
  </div>
);

var GroceryList = (props) => (
	<ul>
		{props.list.map(item => <GroceryListItem item={item} />)}
	</ul>
)

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false
		};
	}
	onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}
	render() {
		var style = {
			textDecoration: this.state.done ? 'line-through' : 'none'
		}
		return (
			<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
		);
	}
} 

var Bananas = () => (
	<li>bananas</li>
)

var Carrots = () => (
	<li>carrots</li>
)

ReactDOM.render(<App />, document.getElementById("app"));