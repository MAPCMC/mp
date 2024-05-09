"use client";

import * as React from "react";
import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <span>Aanpassen</span>
          <Settings className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Thema</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4 rotate-0 opacity-100 transition-all dark:-rotate-90 dark:opacity-50 text-yellow-600 dark:text-blue-300" />
          Licht
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4 opacity-50 transition-all dark:rotate-0 dark:opacity-100 text-blue-300 dark:text-yellow-500" />
          Donker
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
