import { useDispatch } from "react-redux";

import s from "./SearchBox.module.css";
import { setFilter } from "../../redux/filterSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value.trim().toLowerCase()));
  };
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        Find contacts by name:
        <input onChange={handleChange} type="text" className={s.input} />
      </label>
    </div>
  );
};
