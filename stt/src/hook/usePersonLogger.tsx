import { useContext, useEffect } from 'react';
import { PersonContext } from '@/contexts/PersonContext';
import { UserInfo } from '@/types/person';

const usePersonLogger = (personDetails: UserInfo | null, currentTime: Date) => {
  const context = useContext(PersonContext);

  // Ensure context is defined
  if (!context) {
    throw new Error("usePersonLogger must be used within a PersonContextProvider");
  }

  const { enableLog } = context;

  useEffect(() => {
    if (enableLog && personDetails) {
      console.group('Person Details');
      console.log('Name:', personDetails.name);
      console.log('Title:', personDetails.title);
      console.log('Followers:', personDetails.followers);
      console.log('Following:', personDetails.following);
      console.log('Current Time:', currentTime.toLocaleString());
      console.groupEnd();
    }
  }, [personDetails, currentTime, enableLog]);
};

export default usePersonLogger;
