import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={css.Loader}>
            <TailSpin
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                visible={true}
            />
        </div>
    )
};
