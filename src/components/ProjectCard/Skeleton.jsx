import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        speed={1}
        width={370}
        height={350}
        viewBox="0 0 370 350"
        backgroundColor="#5c62ec"
        foregroundColor="#171718"
    >
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6"/>
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6"/>
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6"/>
        <rect x="0" y="0" rx="21" ry="21" width="370" height="278"/>
        <rect x="0" y="302" rx="23" ry="23" width="370" height="46"/>
    </ContentLoader>
)

export default Skeleton