import { fetcher } from 'util/api/fetcher'
import { type ChordComposite } from 'components/models/ChordComposite'
import { type StringsFlets } from 'components/models/StringsFlets'

export const getQuiz = async (): Promise<ChordComposite[]> => {
  const apiHost = process.env.NEXT_PUBLIC_API_HOST
  const path = process.env.NEXT_PUBLIC_QUIZ_API_PATH
  if (apiHost === undefined) {
    // 環境変数読み込み失敗時はエラーとする
    const error = new Error('環境変数の読み込みに失敗しました。')
    throw error
  }

  if (path === undefined) {
    // 環境変数読み込み失敗時はエラーとする
    const error = new Error('環境変数の読み込みに失敗しました。')
    throw error
  }
  const requestURL = apiHost + path
  const response = await fetcher(requestURL)
  const quiz: ChordComposite[] = []
  if (Array.isArray(response)) {
    response.forEach((data) => {
      const stringFlets: StringsFlets = {}
      if (Array.isArray(data.composition)) {
        data.composition.forEach((compositeData) => {
          stringFlets[compositeData.strings] = compositeData.flet
        })
      }
      quiz.push({
        ChordName: {
          base: data.name,
          addSign: data.addSign
        },
        StringsFlets: stringFlets,
        Mode: data.mode
      })
    })
  }

  return quiz
}
