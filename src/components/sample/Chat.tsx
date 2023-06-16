import { Button, Input } from "@fluentui/react-components";
import { app, chat } from "@microsoft/teams-js";

import React from "react";

interface IChatState {
  inputVal: string;
}
export class Chat extends React.Component<any, IChatState> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputVal: ""
    }
  }
  render(): React.ReactNode {
    app.initialize();
    // Check to see if capability is isInitialized
    if (app.isInitialized()) {
      // Check to see if capability is supported
      if (chat.isSupported()) {
        return (
          <div>
            <div>
              <h3>Chat.openChat</h3>
            </div>
            <div className="launch-section">
              <div className="launch-input">
                <Input type="email"
                  placeholder="Enter email"
                  value={this.state.inputVal}
                  onChange={(e) => {
                    this.setState({ inputVal: e.target.value });
                  }} />
              </div>
              <div className="launch-btn">
                <Button appearance="primary" onClick={async () => {
                  await chat.openChat({
                    user: this.state.inputVal,
                    message: `This is the first message you are sending`,
                  });
                }}>
                  OpenChat
                </Button>
              </div>
            </div>
          </div>
        );
      }
    }
    // return's  if capability is not initialized.
    return <>Capability is not initialized</>;
  };
}
