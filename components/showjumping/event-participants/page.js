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
import styles from "@/styles/showjumping/event-participants/eventParticipants.module.css";
import { getEventParticipants } from "@/admin-components/stables/actions/showumping-actions/showjumpingActions";

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
              <Spinner ref={loaderRef} color="white" />
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
        </TableHeader>
        <TableBody isLoading={isLoading} items={participants}>
          {(participant, index) => (
            <TableRow key={participant.$id}>
              <TableCell>{index !== undefined ? index + 1 : "-"}</TableCell>
              <TableCell>{participant.riderName || "Unknown"}</TableCell>
              <TableCell>{participant.horseName || "Unknown"}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
