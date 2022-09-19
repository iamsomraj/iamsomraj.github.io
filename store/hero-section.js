export const state = () => ({
  avatar_url: 'portfolio/avatar-modified_ozofdm.png',
  name: 'Somraj Mukherjee',
  designation: 'Full Stack Developer',
  description:
    'I have a passion for web development. I enjoy creating solutions that make life easier for people.',
    
  })
export const getters = {
  avatar_url: (state) => state.avatar_url,
  name: (state) => state.name,
  designation: (state) => state.designation,
  description: (state) => state.description,
}
