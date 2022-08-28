import { useSelector } from 'react-redux';
import { useLogOutMutation , useGetUserQuery } from 'redux/userApi';

export const Account = () => {
  const {data}=useGetUserQuery()
  console.log(data)
const name= useSelector(state => state.user.name)
const [logOut]=useLogOutMutation()
console.log(name)
  return (
    <div>
      <img src="" alt="" />
      <p>привет ,{name}</p>
      <button type="button" onClick={()=>logOut()} >выйти</button>
    </div>
  );
};
