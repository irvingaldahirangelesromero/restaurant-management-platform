import store from './localstore';
import { useRedirect } from './useRedirect';


export function useHandleSubmit() {

    const { redirectTo } = useRedirect()

    async function handleSubmit(
        e: React.FormEvent,
        url: string,
        items: any,
        setError: (v: string | null) => void,
        nexturl?: string
    ) {
        e.preventDefault();
        setError(null)

        try {
            const response = await fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(items)
                }
            )

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            const data = await response.json();

            // store(
            //     [
            //         ['token', data.token],
            //         ['user', data.user]
            //     ]
            // )

            if (nexturl) redirectTo(nexturl)
            
        } catch (err: any) {
            setError(err.message)
        }
    }

    return { handleSubmit }
}