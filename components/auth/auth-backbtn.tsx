import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackBtnProps {
  backBtnHref: string;
  backBtnLabel: string;
}

function BackBtn({ backBtnHref, backBtnLabel }: BackBtnProps) {
  return (
    <Link href={backBtnHref}>
      <Button variant="link" className="w-full">{backBtnLabel}</Button>
    </Link>
  );
}

export default BackBtn;
