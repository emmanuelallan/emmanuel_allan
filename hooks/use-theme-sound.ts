"use client"

import useSound from "use-sound"

export function useThemeSound() {
  const [playOn] = useSound("/sounds/switch-on.mp3", { volume: 0.5 })
  const [playOff] = useSound("/sounds/switch-off.mp3", { volume: 0.5 })

  return { playOn, playOff }
}

