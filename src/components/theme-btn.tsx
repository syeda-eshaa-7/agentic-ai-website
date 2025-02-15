// 'use client'
// import { useTheme } from "next-themes"
// import { Moon, Sun } from "lucide-react" // Icons for dark and light themes
// import { Button } from "@/components/ui/button" // Import the Button component from shadcn/ui

// export function ThemeToggle() {
//   const { setTheme, theme } = useTheme()

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//     >
//       {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   )
// }