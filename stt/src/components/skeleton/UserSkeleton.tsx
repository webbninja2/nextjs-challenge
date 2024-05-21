import React from 'react';
import Skeleton from 'react-loading-skeleton';

const UserSkeleton = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4">
      <div className="p-4 col-span-1">
        <Skeleton height={200} width={"100%"} highlightColor="#d1d5db" />
      </div>
      <div className="p-4 col-span-2">
        <div className="mb-2">
          <Skeleton height={12} width={"70%"} highlightColor="#d1d5db" />
        </div>
        <div className="mb-2">
          <Skeleton height={12}  width={"80%"}  highlightColor="#d1d5db" />
        </div>
        <div className="mb-2">
          <Skeleton height={12}  width={"100%"} highlightColor="#d1d5db" />
        </div>
        <div className="mb-2">
          <Skeleton height={12} width={"70%"} highlightColor="#d1d5db" />
        </div>
        <div>
          <Skeleton height={12}  width={"80%"}  highlightColor="#d1d5db" />
        </div>
      </div>
    </div>
  );
};

export default UserSkeleton;
