import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { HouseholdList } from "./household/HouseholdList";
import { HouseholdCreate } from "./household/HouseholdCreate";
import { HouseholdEdit } from "./household/HouseholdEdit";
import { HouseholdShow } from "./household/HouseholdShow";
import { HouseholdCalendarList } from "./householdCalendar/HouseholdCalendarList";
import { HouseholdCalendarCreate } from "./householdCalendar/HouseholdCalendarCreate";
import { HouseholdCalendarEdit } from "./householdCalendar/HouseholdCalendarEdit";
import { HouseholdCalendarShow } from "./householdCalendar/HouseholdCalendarShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Household"
          list={HouseholdList}
          edit={HouseholdEdit}
          create={HouseholdCreate}
          show={HouseholdShow}
        />
        <Resource
          name="HouseholdCalendar"
          list={HouseholdCalendarList}
          edit={HouseholdCalendarEdit}
          create={HouseholdCalendarCreate}
          show={HouseholdCalendarShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
