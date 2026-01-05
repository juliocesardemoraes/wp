import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {}
 
const withNextIntl = createNextIntlPlugin("./lib/i18n/config.ts");
export default withNextIntl(nextConfig);