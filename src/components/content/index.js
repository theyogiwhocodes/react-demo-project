import React from "react";
import SearchListing from "../../pages/search-listing";
import StoreDetails from "../../pages/store-details";

import { Switch, Route } from "react-router-dom";

export default function Content() {
  return (
    <Switch>
      <Route exact path="/">
        <div>Home Page</div>
      </Route>
      <Route exact path="/search">
        <SearchListing></SearchListing>;
      </Route>
      <Route exact path="/search/stores/:id">
        <StoreDetails></StoreDetails>
      </Route>
    </Switch>
  );
}
