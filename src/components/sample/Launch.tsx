import "./Launch.css";

import { Button, Input, } from "@fluentui/react-components";

import { Chat } from "./Chat";
import { ExecuteDeepLink } from "./ExecuteDeepLink";
import React from "react";
import { ReactNode } from "react";
import { ShareDeepLink } from "./ShareDeepLink";
import { app } from "@microsoft/teams-js";

interface ILaunchState {
  inputVal: string;
  isValidUrl: boolean;
}
export class Launch extends React.Component<any, ILaunchState> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputVal: "",
      isValidUrl: false,
    }
  }

  isValidHttpUrl = (inputString: string) => {
    let url;
    try {
      url = new URL(inputString);
    } catch (e) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  render(): ReactNode {
    // app.initialize().then(x => this.setState({ isInit: true }))
    return (

      <div className="launch page">
        <div className="page-header">
          <h2>Deep Link</h2>
        </div>
        <div>
          <div>
            <h3>App.OpenLink</h3>
          </div>
          <div className="launch-section">
            <div className="launch-input">
              <Input
                placeholder="Enter any url"
                value={this.state.inputVal}
                onChange={(e) => {
                  const isValid = this.isValidHttpUrl(e.target.value);
                  if (!isValid) {
                    this.setState({});
                    console.log("not valid")
                  }
                  this.setState({ inputVal: e.target.value, isValidUrl: isValid })
                }} />
            </div>
            <div className="launch-btn">
              <Button disabled={!this.state.isValidUrl} appearance="primary" onClick={async () => {
                await app.initialize();
                if (app.isInitialized()) {
                  app.openLink(this.state.inputVal);
                }
              }}>
                OpenLink
              </Button>
            </div>
          </div>
        </div>
        {/* <Chat />
        <ExecuteDeepLink />
        <ShareDeepLink /> */}
      </div>
    );
  }
}


