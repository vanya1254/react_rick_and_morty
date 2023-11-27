import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton = (props) => {
  return (
    <ContentLoader
      speed={3}
      width={540}
      height={260}
      viewBox="0 0 540 260"
      backgroundColor="#ffffff"
      foregroundColor="#ded9d9"
      {...props}
    >
      <rect x="0" y="311" rx="10" ry="10" width="280" height="88" />
      <rect x="20" y="20" rx="36" ry="36" width="200" height="220" />
      <rect x="240" y="20" rx="10" ry="10" width="284" height="36" />
      <rect x="240" y="60" rx="10" ry="10" width="146" height="21" />
      <rect x="240" y="99" rx="10" ry="10" width="207" height="21" />
      <rect x="240" y="121" rx="10" ry="10" width="284" height="24" />
      <rect x="240" y="163" rx="10" ry="10" width="207" height="21" />
      <rect x="240" y="185" rx="10" ry="10" width="284" height="24" />
    </ContentLoader>
  );
};

export default CardSkeleton;
