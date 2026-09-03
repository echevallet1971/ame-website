'use client';

import { useRouter } from 'next/navigation';

type BackLinkProps = {
  fallbackHref?: string;
  label?: string;
  className?: string;
};

export default function BackLink({
  fallbackHref = '/',
  label = 'Back to previous page',
  className = '',
}: BackLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <a href={fallbackHref} onClick={handleClick} className={className}>
      ← {label}
    </a>
  );
}
