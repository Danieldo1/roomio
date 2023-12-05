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
    Theme: undefined,
    setTheme: (theme: string) => set({theme}),
  }));

export const useOutput = create((set) => ({
    output: undefined,
    setOutput: (output: string) => set({
        output
    })
}))

export const useLoading = create((set) => ({
    isLoading: true,
    setLoading: (opt: boolean) => set({
       isLoading: opt,
       isGenerating: true,
       setGenerating: (gen: boolean) => set({
           isGenerating: gen
       })
    })
}))