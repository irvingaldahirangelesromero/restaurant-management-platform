'use client'

import { useRouter } from "next/navigation";

export function useRedirect() {
    const router = useRouter();

    const redirectTo = (url: string) => {
      router.push(url);
    };
    
    return {redirectTo}
}