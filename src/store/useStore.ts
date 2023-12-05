import create from 'zustand';

export const useImage = create ((set) => ({
    imageUrl: undefined,
    setImageUrl: (url: string) => set({
        imageUrl: url
    })
}))