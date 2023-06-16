import { app, pages } from "@microsoft/teams-js";

import { Button } from "@fluentui/react-components";
import React from "react";

/**
 * This component returns a button which share's deep link.
 */
export class ShareDeepLink extends React.Component {
  render(): React.ReactNode {
    app.initialize();
    // Check if app is initialized;
    if (app.isInitialized()) {
      return (
        <>
          {pages.isSupported() && (
            <div>
              <div>
                <h3>Pages.shareDeepLink</h3>
              </div>
              <div className="launch-section">
                <Button appearance="primary" onClick={() => {
                  pages.shareDeepLink({
                    subPageId: "fa0550ec-7086-4c5f-94f1-a052ffba3a73",
                    subPageLabel: "Hello World"
                  })
                }}>
                  Share Deep Link
                </Button>
              </div>
            </div>
          )}
        </>
      );
    }
    // return's if sub capability is not supported.
    return <>SubCapability is not initialized</>;
  };
}
