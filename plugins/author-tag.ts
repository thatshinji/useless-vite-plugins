export type Options = {
  author: string
  date?: Date
  custom?: string
}

const AuthorTag = ({author, date, custom=''}: Options) => ({
  name: 'useless-author-tag',
  transformIndexHtml(html) {
    const template = 
    `<!--
      Author: ${author}
      Date: ${date?.toLocaleString() || new Date().toLocaleString()}
      ${custom}
    -->`
    const resolveHtmlStr = `${template}${html}`
    return resolveHtmlStr
  }
})

export default AuthorTag