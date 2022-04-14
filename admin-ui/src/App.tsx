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
import { ListList } from "./list/ListList";
import { ListCreate } from "./list/ListCreate";
import { ListEdit } from "./list/ListEdit";
import { ListShow } from "./list/ListShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { NoteList } from "./note/NoteList";
import { NoteCreate } from "./note/NoteCreate";
import { NoteEdit } from "./note/NoteEdit";
import { NoteShow } from "./note/NoteShow";
import { ForumList } from "./forum/ForumList";
import { ForumCreate } from "./forum/ForumCreate";
import { ForumEdit } from "./forum/ForumEdit";
import { ForumShow } from "./forum/ForumShow";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
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
        title={"Familyr"}
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
        <Resource
          name="List"
          list={ListList}
          edit={ListEdit}
          create={ListCreate}
          show={ListShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="Note"
          list={NoteList}
          edit={NoteEdit}
          create={NoteCreate}
          show={NoteShow}
        />
        <Resource
          name="Forum"
          list={ForumList}
          edit={ForumEdit}
          create={ForumCreate}
          show={ForumShow}
        />
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
      </Admin>
    </div>
  );
};

export default App;
