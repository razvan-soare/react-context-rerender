import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import createBrowserHistory from "history/createBrowserHistory";

import Homepage from "../pages/homepage";

export const history = createBrowserHistory();

function Routes() {
  return (
    <Router history={history}>
      <Container>
        <Content>
          <Switch>
            <Route exact={true} path={"/"} component={Homepage} />
          </Switch>
        </Content>
      </Container>
    </Router>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

export default Routes;
