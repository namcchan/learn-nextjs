import * as React from 'react';
import useSWR, { SWRConfiguration } from 'swr';

export interface StudentDetailProps {
  studentId: string;
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 2000,
  } as SWRConfiguration);

  function handleMutateClick() {
    mutate({ name: 'fuck it' }, true);
  }

  return (
    <div>
      Name: {data?.name || '--'} <button onClick={handleMutateClick}>mutate</button>
    </div>
  );
}
