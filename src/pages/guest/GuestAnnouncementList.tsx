import React, { useEffect, useState } from "react";

import { firestore } from "../../firebase";
import { guestProfile, PostEntry, toPostEntry } from "../../model";
import AnnouncementCard from "../../components/AnnouncementCard";

interface props {
  organID: string;
}

const GuestAnnouncementList: React.FC<props> = ({ organID }) => {
  const [guestInfo, setGuest] = useState<guestProfile>();

  const organizationId = organID;
  const [postList, setPostList] = useState<PostEntry[]>([]);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organizationId)
      .collection("posts");
    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostList(docs.map(toPostEntry))
    );
  }, [organizationId]);
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
