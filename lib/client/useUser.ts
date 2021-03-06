import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function useUser() {
  const { data, error } = useSWR('/api/user/me');
  const router = useRouter();

  useEffect(() => {
    if (data && !data.ok) {
      // router.replace('/auth');
    }
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}
