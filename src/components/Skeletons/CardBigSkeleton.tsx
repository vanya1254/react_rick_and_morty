import React from "react";
import ContentLoader from "react-content-loader";

const CardBigSkeleton: React.FC = (props) => (
  <div className="CardBig_skeleton">
    <ContentLoader
      speed={3}
      width={1536}
      height={1063}
      viewBox="0 0 1536 1063"
      backgroundColor="#ffffff"
      foregroundColor="#ded9d9"
      {...props}
    >
      <rect x="0" y="311" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="0" rx="36" ry="36" width="400" height="440" />
      <rect x="240" y="20" rx="10" ry="10" width="284" height="36" />
      <rect x="240" y="60" rx="10" ry="10" width="146" height="21" />
      <rect x="240" y="99" rx="10" ry="10" width="207" height="21" />
      <rect x="240" y="121" rx="10" ry="10" width="284" height="24" />
      <rect x="240" y="163" rx="10" ry="10" width="207" height="21" />
      <rect x="240" y="185" rx="10" ry="10" width="284" height="24" />
    </ContentLoader>
  </div>
);

export default CardBigSkeleton;
