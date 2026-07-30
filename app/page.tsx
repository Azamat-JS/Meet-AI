"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {

  const {
    data: session,
  } = authClient.useSession()

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {

    await authClient.signUp.email({ email, name, password }, {
      onError: () => {
        window.alert("Error signing up");
      },
      onSuccess: () => {
        window.alert("Signed up successfully");
      }
    });
  }
  // added a new function to handle login
  const onLogin = async () => {

    await authClient.signIn.email({ email, password }, {
      onError: () => {
        window.alert("Error signing in");
      },
      onSuccess: () => {
        window.alert("Signed in successfully");
      }
    });
  }

  if (session) {
    return (
      <div className="flex flex-col gap-y-4 w-100 mx-auto mt-10 p-4">
        <div>Logged in as {session.user.name} ({session.user.email})</div>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-4 w-100 mx-auto mt-10 p-4">
        <Input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onSubmit}>Sign Up</Button>
      </div>

      {/* Login form */}
      <div className="flex flex-col gap-y-4 w-100 mx-auto mt-10 p-4">
        <Input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={onLogin}>Sign In</Button>
      </div>
    </div>
  );
}