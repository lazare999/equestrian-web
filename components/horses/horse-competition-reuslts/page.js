"use client";

import React, { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import classes from "@/styles/horses/horse-competition-results/horseCompetitionResults.module.css";

export default function HorseCompetitionResults({ horse }) {
  const results = horse.competitionResults || [];

  const columns = useMemo(
    () => [
      {
        accessorKey: "competition",
        header: "ტურნირი",
        size: 200,
      },
      {
        accessorKey: "event",
        header: "შეჯიბრი",
        size: 200,
      },
      {
        accessorKey: "show",
        header: "ლოკაცია",
        size: 200,
      },
      {
        accessorKey: "date",
        header: "თარიღი",
        size: 100,
      },
      {
        accessorKey: "athlete",
        header: "მხედარი",
        size: 150,
      },
      {
        accessorKey: "height",
        header: "სიმაღლე (სმ)",
        size: 100,
      },
      {
        accessorKey: "position",
        header: "პოზიცია",
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: results,
  });

  return (
    <div className={classes.tableContainer}>
      <MaterialReactTable table={table} />
    </div>
  );
}
