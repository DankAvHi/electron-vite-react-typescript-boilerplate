import { useCallback, useState } from "react";
import styles from "./App.module.css";

export const App = () => {
    const [like, setLike] = useState<number>(0);

    const likeAction = useCallback(() => setLike((prev) => prev + 1), [setLike]);

    return (
        <>
            <div className={styles.baner}>
                <h1 className={styles.heading}>
                    {`Hello from web 🛜,`}
                    <br />
                    {`to Desktop world 🖥️!`}
                </h1>
                <button className={styles.like} onClick={likeAction}>{`${like}❤️+`}</button>
            </div>
        </>
    );
};
