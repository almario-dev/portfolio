export interface Technology {
  name: string
  icon: string
}

export interface SocialAccount {
  name: string
  icon: string
  link: string
}

export interface Project {
  name: string
  description: string
  tech: string[]
  url?: string | null
  collab?: boolean
}
