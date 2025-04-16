"use client";

import React, { useState, useEffect, useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { Spinner } from "@heroui/spinner";
import { getHorseRaceEvents } from "@/app/actions/horse-race-actions/horseRaceActions";

import lisilakeLogo from "../../../public/equestrian-sports-images/equestrian-clubs-logo/lisilakeLogo.jpg";
import menesLogo from "../../../public/equestrian-sports-images/equestrian-clubs-logo/menesLogo.jpg";
import ambasadoriLogo from "../../../public/equestrian-sports-images/equestrian-clubs-logo/ambasadoriLogo.jpg";

import classes from "@/styles/horse-race/event-participants/eventParticipants.module.css";

export default function EventParticipants({ eventId }) {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const events = await getHorseRaceEvents();
        const event = events.find((e) => e.$id === eventId);

        if (event) {
          setParticipants(event.participants || []);
        } else {
          console.error("Event not found!");
        }
      } catch (error) {
        console.error("Error fetching horse race participants:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (eventId) {
      fetchParticipants();
    }
  }, [eventId]);

  const clubLogos = {
    "Lisi Lake": lisilakeLogo.src,
    Menes: menesLogo.src,
    Ambasadori: ambasadoriLogo.src,
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "number",
        header: "#",
        size: 50,
        Cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: "riderName",
        header: "მონაწილის სახელი",
        size: 150,
      },
      {
        accessorKey: "horseName",
        header: "ცხენის სახელი",
        size: 150,
      },
      {
        accessorKey: "raceNumber",
        header: "გარბენის ნომერი",
        size: 200,
        // Cell: ({ row }) => {
        //   const clubName = row.original.equestrianClub;
        //   const clubLogo = clubLogos[clubName];

        //   return (
        //     <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        //       {clubLogo && (
        //         <img
        //           src={clubLogo}
        //           alt={clubName}
        //           style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        //         />
        //       )}
        //       <span>{clubName || "Unknown"}</span>
        //     </div>
        //   );
        // },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: participants,
  });

  return (
    <div className={classes.tableContainer}>
      {isLoading ? (
        <div className={classes.spinnerContainer}>
          <Spinner color="red" />
        </div>
      ) : (
        <MaterialReactTable
          table={table}
          renderTopToolbarCustomActions={() =>
            isLoading && (
              <div className={classes.spinnerContainer}>
                <Spinner color="red" />
              </div>
            )
          }
        />
      )}
    </div>
  );
}
