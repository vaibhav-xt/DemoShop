import React, { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface SearchContextProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

interface SearchProviderProps {
    children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
    const [search, setSearch] = React.useState<string>('');

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }

    return context;
}
