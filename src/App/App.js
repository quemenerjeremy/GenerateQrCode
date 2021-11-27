import React from "react"
import GenerateOrdo from "../Pages/GenerateOrdo";
import { CssBaseline } from '@material-ui/core';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline/>
        <GenerateOrdo/>
      </div>
    )
  }
}