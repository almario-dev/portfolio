import type { Project, SocialAccount, Technology } from '@/types/Portfolio'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const usePortfolioStore = defineStore('portfolio', () => {
  const TechIconsRegistry = ref<Record<string, string>>({})
  const AccountsList = ref<SocialAccount[]>([])
  const ProjectsList = ref<Project[]>([])
  const FeaturedTechnologies = ref<string[]>([])
  const aboutMe = ref<string>('')
  const intro = ref<string>('')
  const resumeLink = ref<string>('')
  const isFetching = ref<boolean>(false)

  const getTechnologies = computed(
    () =>
      Object.entries(TechIconsRegistry.value).map(([name, icon]) => ({
        name,
        icon,
      })) as Technology[],
  )

  const getFeaturedTechnologies = computed(
    () =>
      FeaturedTechnologies.value.map((name) => ({
        name,
        icon: TechIconsRegistry.value[name] ?? '',
      })) as Technology[],
  )

  const fetchData = async () => {
    try {
      isFetching.value = true

      const json = await fetch(import.meta.env.VITE_PORTFOLIO_URL || '/portfolio.json')
      const data = await json.json()

      TechIconsRegistry.value = data.techIconsRegistry
      AccountsList.value = data.accountsList
      ProjectsList.value = data.projectsList
      FeaturedTechnologies.value = data.featuredTechnologies
      aboutMe.value = data.aboutMe
      intro.value = data.intro
      resumeLink.value = data.resumeLink
    } catch (error) {
      console.error('Error fetching portfolio data:', error)
    } finally {
      isFetching.value = false
    }
  }

  return {
    TechIconsRegistry,
    AccountsList,
    ProjectsList,
    FeaturedTechnologies,
    intro,
    aboutMe,
    resumeLink,
    isFetching,
    getTechnologies,
    getFeaturedTechnologies,
    fetchData,
  }
})
