import React from "react";
import { useState } from "react";
import { UserContext } from "./src/contexts/userContext";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { User } from "./src/types/user";

export default function App() {
  const [user, setUser] = useState<User | null>({ id: "111", name: "test" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppNavigator />
    </UserContext.Provider>
  );
}
