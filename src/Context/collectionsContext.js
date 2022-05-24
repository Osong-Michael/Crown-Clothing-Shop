import { createContext, useState, useEffect } from 'react';

import { getCollectionsAndDocuments } from '../firebase/firebase.utils';

export const CollectionsContext = createContext({
    collections: {},
});

export const CollectionsProvider = ({ children }) => {
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        const getCollectionsMap = async () => {
            const collectionMap = await getCollectionsAndDocuments();

            setCollections(collectionMap);
        };

        getCollectionsMap();
    }, []);

  const value = { collections };
  return (
    <CollectionsContext.Provider value={value}>
      {children}
    </CollectionsContext.Provider>
  );
};