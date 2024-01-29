import React from "react";
import ContentLoader from "react-content-loader";

export const CardBigSkeleton: React.FC = (props) => (
  <div className="CardBig_skeleton">
    <ContentLoader
      speed={3}
      width={1536}
      height={1063}
      viewBox="0 0 1536 1063"
      backgroundColor="#bebebe"
      foregroundColor="#ffffff"
      {...props}
    >
      <rect x="0" y="0" rx="72" ry="72" width="400" height="440" />
      <rect x="432" y="0" rx="20" ry="20" width="568" height="70" />
      <rect x="432" y="74" rx="20" ry="20" width="230" height="40" />
      <rect x="432" y="142" rx="20" ry="20" width="368" height="40" />
      <rect x="432" y="186" rx="20" ry="20" width="368" height="46" />
      <rect x="432" y="270" rx="20" ry="20" width="368" height="40" />
      <rect x="432" y="314" rx="20" ry="20" width="368" height="46" />

      <rect x="1114.5" y="14" rx="20" ry="20" width="368" height="40" />
      <rect x="1114.5" y="58" rx="20" ry="20" width="368" height="46" />
      <rect x="1114.5" y="142" rx="20" ry="20" width="368" height="40" />
      <rect x="1114.5" y="186" rx="20" ry="20" width="368" height="46" />
      <rect x="1114.5" y="270" rx="20" ry="20" width="368" height="40" />
      <rect x="1114.5" y="314" rx="20" ry="20" width="368" height="46" />

      <rect x="134" y="520" rx="20" ry="20" width="300" height="34" />
      <rect x="134" y="566" rx="10" ry="10" width="100" height="22" />
      <rect x="134" y="593" rx="10" ry="10" width="100" height="22" />
      <rect x="134" y="620" rx="10" ry="10" width="100" height="22" />
      <rect x="134" y="647" rx="10" ry="10" width="100" height="22" />
      <rect x="134" y="674" rx="10" ry="10" width="100" height="22" />
      <rect x="134" y="701" rx="10" ry="10" width="100" height="22" />

      <rect x="902" y="520" rx="20" ry="20" width="300" height="34" />
      <rect x="902" y="556" rx="8" ry="8" width="60" height="19" />
      <rect x="902" y="601" rx="10" ry="10" width="150" height="26" />
      <rect x="902" y="639" rx="10" ry="10" width="100" height="22" />
      <rect x="902" y="666" rx="10" ry="10" width="100" height="22" />
      <rect x="902" y="693" rx="10" ry="10" width="100" height="22" />
    </ContentLoader>
  </div>
);

export default CardBigSkeleton;
