"use client";
import DisableIcon from "@/utils/icons/DisableIcon";
import EnableIcon from "@/utils/icons/EnableIcon";
import React, { useState } from "react";
const EnableBox: React.FC<{ text: string; defaultValue?: Boolean }> = ({
  text,
  defaultValue,
}) => {
  const [state, setState] = useState<Boolean>(defaultValue || true);
  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => setState(!state)}
    >
      <div className="w-[67px]">{state ? <EnableIcon /> : <DisableIcon />}</div>
      <div>{text}</div>
    </div>
  );
};

export default EnableBox;
