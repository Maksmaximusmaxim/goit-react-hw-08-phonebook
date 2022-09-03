import { useSelector } from 'react-redux';
import { useLogOutMutation , useGetUserQuery } from 'redux/userApi';
import css from 'components/account/Account.module.css'
export const Account = () => {
  const {data}=useGetUserQuery()
  console.log(data)
const name= useSelector(state => state.user.name)
const [logOut]=useLogOutMutation()

  return (
    <div className={css.accountBox}>
      
      <p className={css.text}>привет ,{name}</p>
      <button className={css.btn} type="button" onClick={()=>logOut()} >выйти</button>
    </div>
  );
};
