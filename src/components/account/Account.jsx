import { useSelector } from 'react-redux';
export const Account = () => {
  const name = useSelector(state => { console.log(state.userApi.mutations) ;return state?.userApi?.mutations?.name?.user?.name ??   ("rt")});
  console.log(name)
  console.log(name ,"qwe");
  return (
    <div>
      <img src="" alt="" />
      <p>привет , {name}</p>
      <button type="button" >выйти</button>
    </div>
  );
};
