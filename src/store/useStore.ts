import {create} from 'zustand';

export const useImage = create((set) => ({
    imageUrl: undefined,
    setImageUrl: (url: string) => set({
        imageUrl: url
    })
}))

export const useRoomType = create((set) => ({
    room:"living room",
    setRoom: (room: string) => set({
        room
    })
}))

export const useTheme = create((set) => ({
    theme: undefined,
    setTheme: (theme: string) => set({ 
        theme
    })
}))