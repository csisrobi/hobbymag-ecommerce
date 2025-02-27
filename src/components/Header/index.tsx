import { Category } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Navbar } from './navbar'

const demoData = {
  logo: {
    url: '/',
    alt: 'Magazin Creativ Hobby ',
    title: 'Magazin Creativ Hobby',
  },
  mobileExtraLinks: [
    { name: 'Press', url: '/press' },
    { name: 'Contact', url: '/contact' },
    { name: 'Imprint', url: '/imprint' },
    { name: 'Sitemap', url: '/sitemap' },
  ],
  auth: {
    login: { text: 'Log in', url: '/login' },
    signup: { text: 'Sign up', url: '/create-account' },
  },
}

type MappedCategory = {
  id: number
  title: string
  url: string
  items?: MappedCategory[]
}

const buildCategoryTree = (
  categories: Omit<Category, 'createdAt' | 'updatedAt'>[],
): MappedCategory[] => {
  const categoryMap: Record<number, MappedCategory> = {}
  const roots: MappedCategory[] = []

  categories.forEach(({ id, title, slug }) => {
    categoryMap[id] = { id, title, url: `/${slug}`, items: [] }
  })

  categories.forEach(({ id, parent }) => {
    if (parent === null) {
      roots.push(categoryMap[id])
    } else {
      categoryMap[parent as number].items?.push(categoryMap[id])
    }
  })
  return roots
}

export async function Header() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'categories',
    select: {
      title: true,
      slug: true,
      parent: true,
    },
    depth: 0,
  })
  // console.log(buildCategoryTree(docs))
  return <Navbar {...demoData} menu={buildCategoryTree(docs)} />
}
