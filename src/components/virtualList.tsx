/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useRef, useState } from 'react'
type IProp = {
    width: string
    height: number
    itemCount: number
    itemSize: number
    renderItem: any
}
export const VirtualList: FC<IProp> = (props: IProp) => {
    const { width, height, itemCount, itemSize, renderItem } = props
    const [start, useStart] = useState(0)
    const itemRef = useRef(null)
    // 计算结束位置
    let end = start + Math.floor(height / itemSize) + 1
    end = end > itemCount ? itemCount : end
    const visibleList = new Array(end - start).map((item, index) => ({
        index: start + index,
    }))


    console.log(visibleList)

    const style = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: itemSize,
    }

    // 滚动事件

    const handlerOnScroll = () => {
        const { scrollTop } = itemRef.current
        if (scrollTop) {
            // 计算出开始位置
            const start = Math.floor(scrollTop / itemSize)
            useStart(start)
        }
    }

    return (
        <div
            style={{
                overflow: 'auto',
                willChange: 'transform',
                width,
                height,
            }}
            ref={itemRef}
            onScroll={handlerOnScroll}
        >
            {visibleList.map(({ index }) =>
                renderItem({
                    index,
                    style: { ...style, top: itemSize * index },
                })
            )}
        </div>
    )
}
