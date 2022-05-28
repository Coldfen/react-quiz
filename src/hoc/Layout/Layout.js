import React from "react";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToogle";
import classes from "./Layout.module.css"

class Layout extends React.Component {
  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer
          onClose={this.menuCloseHandler}
          isOpen={this.state.menu}
        />
        <MenuToggle
        onToogle={this.toggleMenuHandler}
        isOpen={this.state.menu}
        />
        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout 