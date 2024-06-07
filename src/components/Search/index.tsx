import { ICategory } from 'src/types/db'
import s from './index.module.scss'

type Props = {
  db: ICategory[]
}

const Search = ({db}: Props) => {
  return (
    <input className={s.input} type="text" placeholder="Поиск..." />
  )
}

export default Search