"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";
import { Spinner } from "@heroui/spinner";
import { useInfiniteScroll } from "@heroui/use-infinite-scroll";
import { getEventParticipants } from "@/admin-components/stables/actions/showumping-actions/showjumpingActions";

import lisilakeLogo from "@/public/equestrian-sports-images/equestrian-clubs-logo/lisilakeLogo.jpg";
import menesLogo from "@/public/equestrian-sports-images/equestrian-clubs-logo/menesLogo.jpg";
import ambasadoriLogo from "@/public/equestrian-sports-images/equestrian-clubs-logo/ambasadoriLogo.jpg";

import styles from "@/styles/showjumping/event-participants/eventParticipants.module.css";

export default function EventParticipants({ eventId }) {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  console.log(participants);
  useEffect(() => {
    if (eventId) {
      fetchParticipants();
    }
  }, [eventId]);

  const fetchParticipants = async () => {
    try {
      setIsLoading(true);
      const data = await getEventParticipants(eventId);
      setParticipants(data);
      setHasMore(false); // Disable infinite scrolling for now
    } catch (error) {
      console.error("Error fetching participants:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: fetchParticipants,
  });

  return (
    <div className={styles.tableContainer}>
      <Table
        isHeaderSticky
        aria-label="Participants Table"
        baseRef={scrollerRef}
        bottomContent={
          isLoading ? (
            <div className={styles.spinnerContainer}>
              <Spinner ref={loaderRef} color="red" />
            </div>
          ) : null
        }
        classNames={{
          base: styles.tableBase,
          table: styles.table,
        }}
      >
        <TableHeader>
          <TableColumn key="number">#</TableColumn>
          <TableColumn key="riderName">მონაწილის სახელი</TableColumn>
          <TableColumn key="horseName">ცხენის სახელი</TableColumn>
          <TableColumn key="equestrianClub">საცხენოსნო კლუბი</TableColumn>
        </TableHeader>
        <TableBody isLoading={isLoading} items={participants}>
          {participants.map((participant, index) => {
            // Map equestrian club names to corresponding logos
            const clubLogos = {
              "Lisi Lake": lisilakeLogo,
              Menes: menesLogo,
              Ambasadori: ambasadoriLogo,
            };

            // Get the correct logo or fallback to null
            const clubLogo = clubLogos[participant.equestrianClub] || null;

            return (
              <TableRow key={participant.$id}>
                <TableCell>{index !== undefined ? index + 1 : "-"}</TableCell>
                <TableCell>{participant.riderName || "Unknown"}</TableCell>
                <TableCell>{participant.horseName || "Unknown"}</TableCell>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {participant.equestrianClub || "Unknown"}
                    {clubLogo && (
                      <img
                        src={clubLogo.src} // Use `.src` since it's imported as a module
                        alt={participant.equestrianClub}
                        width="40"
                        height="40"
                        style={{ borderRadius: "50%" }}
                      />
                    )}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
