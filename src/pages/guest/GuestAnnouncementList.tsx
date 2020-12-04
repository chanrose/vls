import React, { useEffect, useState } from "react";

import { firestore } from "../../firebase";
import { guestProfile, PostEntry, toPostEntry } from "../../model";
import AnnouncementCard from "../../components/AnnouncementCard";
import { useRouteMatch } from "react-router";
import { useAuth } from "../../auth";

interface props {
  organId: string;
}

const GuestAnnouncementList: React.FC<props> = ({ organId }) => {
  const [guestInfo, setGuest] = useState<guestProfile>();
  const [postList, setPostList] = useState<PostEntry[]>([]);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organId)
      .collection("posts");
    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostList(docs.map(toPostEntry))
    );
  }, [organId]);
  return (
    <div>
      {postList.map((entry) => (
        <AnnouncementCard
          key={entry.id}
          title={entry.title}
          subtitle={entry.subtitle}
          content={entry.content}
        />
      ))}
    </div>
  );
};

export default GuestAnnouncementList;
