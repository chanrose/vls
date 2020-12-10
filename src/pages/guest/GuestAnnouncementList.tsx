import React, { useContext, useEffect, useState } from "react";

import { firestore } from "../../firebase";
import { PostEntry, toEntry } from "../../model";

import RequestCard from "../../components/RequestCard";
import { UserContext } from "../../auth";

const GuestAnnouncementList: React.FC = () => {
  const [postList, setPostList] = useState<PostEntry[]>([]);
  const { organization } = useContext(UserContext);
  const [showNoData, setShow] = useState(false);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organization)
      .collection("posts");
    return postEntriesRef.onSnapshot(({ docs }) =>
      setPostList(docs.map(toEntry))
    );
  }, [organization]);

  useEffect(() => {
    const postEntriesRef = firestore
      .collection("public")
      .doc(organization)
      .collection("posts");
    return postEntriesRef.onSnapshot((snapshot) => {
      if (snapshot.size) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  }, [organization]);
  return (
    <div>
      {showNoData && (
        <div className="ion-text-center centerImg">
          <p>Your organization doesn't send any post yet!</p>
        </div>
      )}

      {postList.map((entry) => (
        <RequestCard
          key={entry.id}
          title={entry.title}
          subtitle={entry.subtitle}
          content={entry.content}
          collection={"posts"}
        />
      ))}
    </div>
  );
};

export default GuestAnnouncementList;
