import React, {FC, useEffect} from "react";

export type Props = {
    label: string;
}

export const ZMButton: FC<Props> = ({label}) => {
    // if (typeof window !== 'undefined') {
    //     useEffect(() => {}, [])
    // }

    return <button>{label}</button>
}
