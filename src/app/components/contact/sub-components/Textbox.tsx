"use client";

import { useState } from "react";
import { Textarea } from "@mantine/core";

export default function Textbox() {
  const [value, setValue] = useState("");
  return (
    <Textarea
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
