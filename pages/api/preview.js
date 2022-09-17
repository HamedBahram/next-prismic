import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'
import { linkResolver, createClient } from '../../prismicio'

const handler = async (req, res) => {
  const client = createClient({ req })
  setPreviewData({ req, res })
  await redirectToPreviewURL({ req, res, client, linkResolver })
}

export default handler
