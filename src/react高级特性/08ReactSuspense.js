import React from 'react'

const LazySon = React.lazy(() => /* webpackChunkName: "Lazyson" */ import('./08ReactLazy'))

const Parent = () => {
    return (
        <div>
            <h1>Parent</h1>
            {/* 
                fallback用来显示，在懒加载的过程中
                显示的fallback内容，必须设置。
                不然Suspense会报没用fallback占位符的错误
            */}
            <React.Suspense fallback={<div>loading</div>}>
                <p>React.Suspense</p>
                <LazySon />
            </React.Suspense>
        </div>
    )
}
export default Parent