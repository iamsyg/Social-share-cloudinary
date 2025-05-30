"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const redirect = useRouter();

  useEffect(() => {
    redirect.push("/home");
  }, [redirect]);

  return (
    <></>
  );
}
