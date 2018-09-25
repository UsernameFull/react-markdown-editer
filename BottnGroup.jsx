class Button extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    var classname = "button";
    for (var key in this.props.value) {
      if (this.props.value.ishead) {
        classname += " btnhead";
      }
      if (this.props.value.istail) {
        classname += " btntail";
      }
      if (this.props.value[key]) {
        classname += " selected";
      } else {
        classname += " unselect";
      }
      return (
        <button
          className={classname}
          onClick={() => {
            this.props.onClick();
          }}
        >
          {key}
        </button>
      );
    }
  }
}
class ButtonGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { Bold: false }, //黑体
        { Italic: false }, //斜体
        { Strikethrough: false }, //删除线
        { Underline: false }, //下划线
        { Mark: false } //标记
      ]
    };
  }
  Change(item, index) {
    let list=this.state.list;
    let obj = list[index];
    for (let key in obj) {
      obj[key] = !obj[key];
      break;
    }
    list[index] = obj;
    this.setState(list)
  }
  Created() {
    res = this.state.list.map((item, index) => {
      if (index == 0) {
        item.ishead = true;
      } else {
        item.ishead = false;
      }
      if (index == this.state.list.length - 1) {
        item.istail = true;
      } else {
        item.istail = false;
      }
      return (
        <Button
          key={index}
          value={item}
          onClick={e => {
            this.Change(item, index);
          }}
        />
      );
    });
    return res;
  }
  render() {
    return <div>{this.Created()}</div>;
  }
}
ReactDOM.render(
  <div>
    <ButtonGroup />
  </div>,
  document.getElementById("example")
);
