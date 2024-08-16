import { ErrorBoundary, Header, Main } from '@/components';

export default function Home() {
  return (
    <ErrorBoundary>
      <Header />
      <Main />
    </ErrorBoundary>
  );
}
