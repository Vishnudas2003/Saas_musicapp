"use client";

import {signIn} from "next-auth/react";

export function Appbar() {
  return <div>
    <div className="flex justify-between">
        <div>
            Music App
        </div>
        <div>
            <button className="m-2 p-2 bg-blue-400"onClick={() => signIn()}>Sign in with Google</button>
        </div>
    </div>
  </div>
}