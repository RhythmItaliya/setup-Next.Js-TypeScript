import type { AppProps } from 'next/app';
import '~/src/styles/globals.css';

/**
 * App component.
 * @param  {object}  props           The component attributes as props.
 * @param  {object}  props.Component Page component to display.
 * @param  {boolean} props.pageProps Page component props.
 * @return {Element}                 The App component.
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
