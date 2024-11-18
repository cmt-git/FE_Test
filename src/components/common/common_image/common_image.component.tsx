"use client";

import Image from "next/image";
import { useState } from "react";

/**
 *
 *
 * SPACE
 *
 *
 */

//region: Common Image
export function CommonImage(_props: {
  className: string;
  type: "svg" | "png";
  fileName: string;
  size?: number;
  width?: number;
  height?: number;
  loadingPlaceholder?: boolean;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  /**
   *
   *
   * SPACE
   *
   *
   */
  //region: --- Return
  return (
    <Image
      className={`${_props.className} ${
        loading && _props.loadingPlaceholder ? "bg-gray-100" : ""
      }`}
      alt={_props.fileName}
      width={_props.size ?? _props.width ?? 32}
      height={_props.size ?? _props.height ?? 32}
      src={`/${_props.type}/${_props.fileName}.${_props.type}`}
      onLoad={() => setLoading(false)}
    />
  );
}
