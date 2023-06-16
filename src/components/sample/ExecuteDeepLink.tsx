import { Button, Input } from "@fluentui/react-components";
import { app, executeDeepLink } from "@microsoft/teams-js";

import React from "react";

interface IDeepLinkState {
  inputVal: string;
  isValidUrl: boolean;
}
export class ExecuteDeepLink extends React.Component<any, IDeepLinkState> {
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
  render(): React.ReactNode {
    app.initialize();
    // Check if app is initialized
    if (app.isInitialized()) {
      // check to see if capability is supported
      return (
        <div>
          <div>
            <h3>Execute DeepLink</h3>
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
              <Button
                appearance="primary"
                onClick={async () => {
                  // // open the install dialog for the Developer Portal app
                  // await appInstallDialog.openAppInstallDialog({
                  //   appId: "fa0550ec-7086-4c5f-94f1-a052ffba3a73",
                  // });
                  executeDeepLink(this.state.inputVal)
                }}
              > ExecuteDeepLink
              </Button>
            </div>
          </div>
        </div>
      )
    }
    // return's if capability is not supported.
    return <div>Capability is not supported</div>;;
  };
}
