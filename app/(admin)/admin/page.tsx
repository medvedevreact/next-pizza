import React from "react";
import { cn } from "@/lib/utils";

interface AdminProps {
  className?: string;
}

export default function Admin({ className }: AdminProps) {
  return <div className={cn(className)}>Admin</div>;
}
