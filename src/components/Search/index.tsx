import { ICategory } from 'src/types/db'
import s from './index.module.scss'

const Search = () => {
  return (
    <input className={s.input} type="text" placeholder="Поиск..." />
  )
}

export default Search