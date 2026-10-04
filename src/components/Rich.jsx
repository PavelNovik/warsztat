import { Fragment } from 'react'

// Текст из словаря: *слово* → акцентный курсив, \n → перенос строки
export default function Rich({ text }) {
  return text.split('\n').map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line.split(/(\*[^*]+\*)/).map((part, j) =>
        part.startsWith('*') ? <em key={j} className="accent">{part.slice(1, -1)}</em> : part
      )}
    </Fragment>
  ))
}

// Тот же текст без разметки — для alt, aria-label и <title>
export const plain = (text) => text.replace(/\*/g, '').replace(/\n/g, ' ')
