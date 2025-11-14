import * as React from "react";

export default function MeetingPage({ params }: { params: { id: string } }) {
  return (
    <div>Meeting Page #{params.id}</div>
  );
}