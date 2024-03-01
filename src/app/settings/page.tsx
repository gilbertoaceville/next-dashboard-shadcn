"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";
import { Setting } from "@/global";
import { settingData } from "@/base/constants";

const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category"
  },
  {
    accessorKey: "value",
    header: "Value"
  }
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={settingData} />
    </div>
  );
}