import { user } from 'types/user'
import './style.css'

type Props = {
    user: user;
}

const Navigation = ({user}:Props)=>{
    return (
        <div className='container-navigation'>
            <span className='primary-point'>{user.info}</span>
            <span className='next-point'>` / {user.subInfo}</span>
        </div>
    )
}

export default Navigation