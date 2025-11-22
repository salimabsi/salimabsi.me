import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {};
 
const withMDX = createMDX({})
 
export default withMDX(nextConfig)
